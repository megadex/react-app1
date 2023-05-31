import React from "react";
import { Link } from 'react-router-dom';

const Category = (props) => {
  const {title, image, path, quantity} = props;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <Link className="text-decoration-none" to={ path }>
        <div className="cat-item d-flex align-items-center mb-4">
          <div className="overflow-hidden" style={{width: "100px", height: "100px"}}>
            <img className="img-fluid" src={ image } alt="" />
          </div>
          <div className="flex-fill pl-3">
            <h6>{ title }</h6>
            <small className="text-body">{ quantity } Product{ quantity > 1 && "s" }</small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
