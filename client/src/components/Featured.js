import React from "react";

const Featured = () => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{padding: "30px"}}
        >
          <div className="h1 fa fa-check text-primary m-0 mr-3"></div>
          <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{padding: "30px"}}
        >
          <div className="h1 fa fa-shipping-fast text-primary m-0 mr-2"></div>
          <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{padding: "30px"}}
        >
          <div className="h1 fas fa-exchange-alt text-primary m-0 mr-3"></div>
          <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center bg-light mb-4"
          style={{padding: "30px"}}
        >
          <div className="h1 fa fa-phone-volume text-primary m-0 mr-3"></div>
          <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
        </div>
      </div>
    </>
  );
};

export default Featured;
