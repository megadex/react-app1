import React from "react";

const currency = "$";

const ProductCheckout = (props) => {
  const {title, subTotal} = props.product;

  return (
    <div className="d-flex justify-content-between">
      <p>{ title }</p>
      <p>{ currency + subTotal }</p>
    </div>
  );
};

export default ProductCheckout;
