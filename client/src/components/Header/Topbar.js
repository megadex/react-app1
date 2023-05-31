import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCart } from "../../store/actions/productsCart";
import { Link } from "react-router-dom";

const Topbar = () => {
  const productsCart = useSelector(
    (state) => state.productsCart.productsCartData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsCart());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row bg-secondary py-1 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="d-inline-flex align-items-center h-100">
            <Link className="text-body mr-3" to="/">
              About
            </Link>
            <Link className="text-body mr-3" to="/contact">
              Contact
            </Link>
            <Link className="text-body mr-3" to="/">
              Help
            </Link>
            <Link className="text-body mr-3" to="/">
              FAQs
            </Link>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <div className="btn-group"></div>
            <div className="btn-group mx-2">
              <button
                type="button"
                className="btn btn-sm btn-light dropdown-toggle"
                data-toggle="dropdown"
              >
                USD
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">
                  ---
                </button>
                <button className="dropdown-item" type="button">
                  ---
                </button>
                <button className="dropdown-item" type="button">
                  ---
                </button>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-light dropdown-toggle"
                data-toggle="dropdown"
              >
                EN
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">
                  --
                </button>
                <button className="dropdown-item" type="button">
                  --
                </button>
                <button className="dropdown-item" type="button">
                  --
                </button>
              </div>
            </div>
          </div>
          <div className="d-inline-flex align-items-center d-block d-lg-none">
            {null && (
              <Link to="/" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark"></i>
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: "2px" }}
                >
                  0
                </span>
              </Link>
            )}
            <Link to="/cart" className="btn px-0 ml-2">
              <i className="fas fa-shopping-cart text-dark"></i>
              <span
                className="badge text-dark border border-dark rounded-circle"
                style={{ paddingBottom: "2px" }}
              >
                {productsCart?.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-4">
          <Link to="" className="text-decoration-none">
            <span className="h1 text-uppercase text-primary bg-dark px-2">
              Multi
            </span>
            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
              Shop
            </span>
          </Link>
        </div>
        <div className="col-lg-4 col-6 text-left">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
              />
              <div className="input-group-append">
                <span
                  onClick={() => console.log("search")}
                  className="input-group-text bg-transparent text-primary"
                >
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 col-6 text-right">
          <p className="m-0">Customer Service</p>
          <h5 className="m-0">+012 345 6789</h5>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
