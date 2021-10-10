import React from 'react';

const Product = (props) => {
  return (
    <div className="products__item">
      <div
        className={props.productP.id === props.selectedProduct.id
        ? 'product-selected'
        : ''}>
        <div className="product-element">
          <p className="product-element__badge">
            {props.productP.id}
          </p>
          <p className="product-element__title">
            {props.productP.title}
          </p>
          <p className="product-element__price">
            {props.productP.price}
          </p>
          <p className="product-element__description">
            {props.productP.description}
          </p>
        </div>
        <div className="product-buttons">
          <button type="button" 
                  className="product-buttons__edit" 
                  onClick={() => props.onEdit(props.productP)}
                  >
            Edit
          </button>
          <button type="button" 
                  className="product-buttons__delete" 
                  onClick={e => props.onDelete(e, props.productP)}
                  >
            Delete
          </button>
          <button type="button" 
                  className="product-buttons__to-cart" 
                  onClick={e => props.onAddToCart(e, props.productP)}
                  disabled={props.productP.inCart}
                  >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;