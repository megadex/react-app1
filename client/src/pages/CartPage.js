import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCart, delProductCart,
         putProductCart } from "../store/actions/productsCart";

import Breadcrumb from "../components/Breadcrumb";
import ProductCart from "../components/ProductCart";

const titlePage = "Shopping Cart";
const currency = "$";

const CartPage = () => {
  const productsCartList = useSelector(
    (state) => state.productsCart.productsCartData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsCart());
  }, []);

  const [totalCart, setTotalCart] = useState(0);

  const handleTotal = () => {
    const subTotalAll = productsCartList.map(item => item.subTotal)
    const total = subTotalAll?.reduce((sum, current) => parseFloat(sum) + parseFloat(current), 0);
    setTotalCart(total.toFixed(2));
  }

  useEffect(() => {
    handleTotal();
  }, [productsCartList]);

  const handlePlus = (product) => {
    dispatch(putProductCart(product));
  }

  const handleMinus = (product) => {
    dispatch(putProductCart(product));
  }

  const handleDelete = (id) => {
    dispatch(delProductCart(id));
  }

  const handleToCheckout = () => {
    if (!productsCartList.length) {
      return;
    }

    navigate("/checkout");
  }

  return (
    <>
      <Breadcrumb breadcrumbItem={titlePage} />

      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                { productsCartList?.map(item => (
                < ProductCart 
                   product = {item}
                   key = {item.id}
                   onDelete = {handleDelete}
                   onPlus = {handlePlus}
                   onMinus = {handleMinus}
                />
                )) }
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Help</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>{currency + totalCart}</h5>
                </div>
                <button onClick={handleToCheckout} className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
