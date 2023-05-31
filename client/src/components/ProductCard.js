import { Link } from "react-router-dom";

const currency = "$";

const ProductCard = (props) => {

  return (
    <>
      <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src={ props.image[0].p } alt="" />
        { null && <div className="product-action">
          <Link className="btn btn-outline-dark btn-square" to="/cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
          <Link className="btn btn-outline-dark btn-square" to="/">
            <i className="far fa-heart"></i>
          </Link>
        </div> }
      </div>
      <div className="text-center py-4">
        <Link className="h6 text-decoration-none text-truncate" to={ props.path }>
          { props.title }
        </Link>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <h5>{currency}{ props.priceLow ?? props.price }</h5>

          { props.priceLow && (<h6 className="text-muted ml-2">
            <del>{ currency + props.price }</del>
          </h6>) }

        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
          <small className="fa fa-star text-primary mr-1"></small>
          <small className="fa fa-star text-primary mr-1"></small>
          <small className="fa fa-star text-primary mr-1"></small>
          <small className="fa fa-star text-primary mr-1"></small>
          <small className="fa fa-star text-primary mr-1"></small>
          <small>({ props.reviews })</small>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
