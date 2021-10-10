import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; // mapStateToProps
import actions from './../store/actions';

import Product from './Product';
import Pagination from './Pagination';

import api from './../api';

const Main = (props) => {

  let {onGet} = props;
  const [selectInCart, setSelectInCart] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get()
      .then(json => {  // json products
        onGet(json);   // props.onGet(json);
        setLoading(true);
        setSelectInCart(false);
      });
  }, [onGet, props.products.length, props.selectedProduct.price, selectInCart]);

  const handleEnableAddMode = () => {
    props.addMode();

    props.history.push('/create');
  }

  const handleEdit = (product) => {
    props.onSelect(product);

    props.history.push('/edit');
  }

  const handleDelete = (event, product) => {
    event.stopPropagation();

    api
      .destroy(product)
      .then(() => {
        props.onDel(product);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleAddToCart = (event, product) => {
    event.stopPropagation();

    product.inCart = true;

    setSelectInCart(product.inCart);

    let {id, title, price, description} = product;
    let productToCart = {
      id,
      title,
      description,
      price,
      quantity: 1
    }

    api
      .update(product)
      .then(() => {
        // console.log("Good inCart");
      })
      .catch(err => {
        console.log(err);
      });

    api
      .createCart(productToCart)
      .then(() => {
        // console.log("Good productToCart");
      })
      .catch(err => {
        console.log(err);
      });
  }


  const [sort, setSort] = useState(true);

  const handleSort = () => {
    let p = products.sort((a, b) => {
      const isRev = (sort) ? 1 : -1;
      return isRev * a.title.localeCompare(b.title);
    })

    return p;
  }
  

  const [valueFilter, setValueFilter] = useState("");
  
  const handleFilter = (event) => {
    event.preventDefault();
    
    let str = event.target.value;

    setValueFilter(str.trim());
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  let renderProducts;
  let products = [];

  if (props.products.length > 0) {
    products = [...props.products].filter((item) => {
      let value;

      if (valueFilter === "") {
        value = item;
      } else if (item.title.includes(valueFilter)) {
        value = item;
      } else if (item.title.toLowerCase().includes(valueFilter)) {
        value = item;
      }

      return value;
    });

    products = handleSort(sort);
        
    let indexOfLastProduct = currentPage * productsPerPage;
    let indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    let currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    renderProducts = currentProducts.map(product => {
      return (
        <Product
          key={product.id}
          productP={product}
          selectedProduct={props.selectedProduct}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAddToCart={handleAddToCart}
        />);
    });
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="wrapper">

        <h1>Main View {props.products.length}</h1>

        <div className="mb-1">
          <button 
            className="mr-1"
            type="button" 
            onClick={() => handleEnableAddMode()}
            >
            Create
          </button>
          <button type="button" 
            onClick={ () => setSort(!sort) }>
              Sort
            </button>
        </div>
        
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="filter" onChange={(e) => handleFilter(e)} placeholder="Filter" className="filter"/>
        </div>
        
        <div className="products">
          { loading ? renderProducts : "Loading..." }
          { loading && products.length === 0 ? "Empty" : "" }
        </div>

        { loading && <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}/> }

      </div>
    );
}

let mapStateToProps = (state) => {
  return {
    products: state.main.products,
    selectedProduct: state.main.selectedProduct,
    addingProduct: state.main.addingProduct
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onGet: (i) => dispatch(actions.main.get(i)),
    onDel: (i) => dispatch(actions.main.remove(i)),
    onSelect: (i) => dispatch(actions.main.select(i)),
    addMode: () => dispatch(actions.main.addMode())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);