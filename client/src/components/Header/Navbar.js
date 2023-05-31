import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/middleware/categories";
import { getProductsCart } from "../../store/actions/productsCart";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const categoriesList = useSelector(
    (state) => state.categories.categoriesData
  );

  const productsCart = useSelector(
    (state) => state.productsCart.productsCartData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProductsCart());
  }, []);

  useEffect(() => {
    document.addEventListener("click", function (event) {
      if (
        !event.target.closest("a[href='#navbar-vertical']") &&
        document.getElementById("navbar-vertical")?.classList.contains("show")
      ) {
        document.querySelector("a[href='#navbar-vertical']").click();
      }
    });
  });

  return (
    <div className="container-fluid bg-dark mb-30">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: "65px", padding: "0 30px" }}
          >
            <h6 className="text-dark m-0">
              <i className="fa fa-bars mr-2"></i>Categories
            </h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav
            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
            id="navbar-vertical"
            style={{ width: "calc(100% - 30px)", zIndex: 999 }}
          >
            <div className="navbar-nav w-100">
              { categoriesList.map((item) => (
                <Link
                  to={`/categories/${item.id}`}
                  key={item.id}
                  className="nav-item nav-link"
                >
                  {item.title}
                </Link>
              )) }
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <Link to="/" className="text-decoration-none d-block d-lg-none">
              <span className="h1 text-uppercase text-dark bg-light px-2">
                Multi
              </span>
              <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                Shop
              </span>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <NavLink to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                <NavLink to="/shop" className="nav-item nav-link">
                  Shop
                </NavLink>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                { null && <Link to="/" className="btn px-0">
                  <i className="fas fa-heart text-primary mr-1"></i>
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{ paddingBottom: "2px" }}
                  >
                    0
                  </span>
                </Link> }
                <Link to={ productsCart?.length ? "/cart" : "/" } className="btn px-0 ml-3">
                  <i className="fas fa-shopping-cart text-primary mr-1"></i>
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{ paddingBottom: "2px" }}
                  >
                    {productsCart?.length}
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
