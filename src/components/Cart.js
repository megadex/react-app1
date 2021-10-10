import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from './../store/actions';

import ProductCart from './ProductCart';

import api from './../api';

const Cart = (props) => {
  
let [total, setTotal] = useState(null);
let {onGet} = props;

  useEffect(() => {
    api
      .getCart()
      .then(json => {  // json productsCart
        onGet(json);   // props.onGet(productsCart);

        setTotal(json.reduce((t, p) => t + p.price * p.quantity, 0));
      });
  }, [onGet, props.productsCart.length]);

  let handlePlus = (product) => {
    product.quantity++;
    setTotal(props.productsCart.reduce((t, p) => t + p.price * p.quantity, 0));

    api
      .updateCart(product)
      .then(() => {
        // console.log("quantity + 1", props.productsCart);
      })
      .catch(err => {
        console.log(err);
      });
  }

  let handleMinus = (product) => {
    if (product.quantity > 1) {
      product.quantity--;
      setTotal(props.productsCart.reduce((t, p) => t + p.price * p.quantity, 0));

    api
      .updateCart(product)
      .then(() => {
        // console.log("quantity - 1", props.productsCart);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
  
  let handleDelete = (event, productDelCart) => {
    event.stopPropagation();
    
    let {id, title, price, description} = productDelCart;
    let product = {
      id,
      title,
      description,
      price,
      inCart: false
    }

    api
      .update(product)
      .then(() => {
        // console.log("Good inCart - false");
      })
      .catch(err => {
        console.log(err);
      });

    api
      .destroyCart(productDelCart)
      .then(() => {
        props.onDel(productDelCart);
      });

    // props.history.push("/");
  }

    const renderProducts = props
      .productsCart
      .map(product => {
        return (<ProductCart
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onPlus={handlePlus}
          onMinus={handleMinus} />);
      });
  
  if (props.productsCart.length !== 0) {
    return (
      <div className="wrapper">
        <h1>Cart View</h1>

        <div className="products">
          {renderProducts}
        </div>

        <div className="row">
          Total: {total}
        </div>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <div className="row">
          <p className="mb-1">Cart is empty</p>
          <Link to="/">To Main View</Link>
        </div>
      </div>);
  }
}

let mapStateToProps = (state) => {
  return {
    productsCart: state.cart.productsCart
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onGet: (is) => dispatch(actions.cart.get(is)),
    onDel: (i) => dispatch(actions.cart.remove(i))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);