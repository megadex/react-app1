import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsOrder } from "../store/middleware/productsOrder";

import Breadcrumb from "../components/Breadcrumb";
import ProductOrder from "../components/ProductOrder";

const titlePage = "Order";

const OrderPage = () => {
  const productsOrderList = useSelector(
    (state) => state.productsOrder.productsOrderData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsOrder());
  }, []);

  return (
    <>
      <Breadcrumb breadcrumbItem={titlePage} />

      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-12 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                { productsOrderList.map(item => (
                < ProductOrder 
                   product = {item}
                   key = {item.date}
                />
                )) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
