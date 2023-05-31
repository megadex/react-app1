import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductOne } from "../store/middleware/products";
import { getCategory } from "../store/middleware/categories";
import { setProductCart, putProductCart } from "../store/actions/productsCart";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";

const responsive = {
    0:{
        items:2
    },
    576:{
        items:3
    },
    768:{
        items:4
    },
    992:{
        items:5
    },
    1200:{
        items:4
    }
}

const currency = "$";

const ProductPage = () => {
  const productOne = useSelector((state) => state.products.productOne);
  const productsCartList = useSelector(
    (state) => state.productsCart.productsCartData
  );
  const productsRelatedList = useSelector(
    (state) => state.categories.productsCategoryData
  );
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [titlePage, setTitlePage] = useState(null);
  const price = productOne?.priceLow ?? productOne?.price;

  useEffect(() => {
    dispatch(getProductOne(productId));
    setTitlePage(`Product ${productId}`);
  }, [productId]);

  useEffect(() => {
    dispatch(getCategory(1));
  }, []);

  const [productQuantity, setProductQuantity] = useState(1);

  const handlePlus = () => {
    setProductQuantity(productQuantity + 1);
  }

  const handleMinus = () => {
    if (productQuantity <= 1) {
      return;
    }

    setProductQuantity(productQuantity - 1);
  }

  const handleAddToCart = () => {
    const {id, title, image, color, categoryId} = productOne;
    
    const productOld = productsCartList.find((item) => item.id === id);
    const quantity = productOld ? productOld.quantity + productQuantity : productQuantity;

    const size = null;
    const subTotal = (price * quantity).toFixed(2);
    const product = {
        id,
        category: {id: categoryId},
        title,
        image: image[0].p,
        date: Date.now(),
        color,
        size: size ?? "n/a",
        price,
        quantity,
        subTotal,
    }

    if (productOld) {
      dispatch(putProductCart(product));
    } else {
      dispatch(setProductCart(product));
    }
  }
  
  return (
    <>
      <Breadcrumb breadcrumbItem={titlePage} />

      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner bg-light">

                        { productOne?.image.map((item) => (
                        <div key={item.i} className={ item.i === 1 ? "carousel-item active" : "carousel-item" }>
                            <img className="w-100 h-100" src={item.p} alt="" />
                        </div>
                        )) }

                    </div>
                    <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                    </a>
                    <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                    </a>
                </div>
            </div>

            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                    <h3>{ productOne?.title +' '+ productOne?.color }</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star-half-alt"></small>
                            <small className="far fa-star"></small>
                        </div>
                        <small className="pt-1">({ productOne?.reviews.length } Reviews)</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">{currency + price}</h3>
                    <p className="mb-4">{ productOne?.shortDescription }</p>
                    { productOne?.sizes &&
                    ( <div className="d-flex mb-3">
                        <strong className="text-dark mr-3">Sizes:</strong>
                        <form>
                            { productOne?.sizes.map( size => (
                            <div key={size.i} className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" name="size" id={"size-"+size.i} value={ size.s } defaultChecked={size.i===1 && true} readOnly />
                                <label className="custom-control-label" htmlFor={"size-"+size.i}>{ size.s }</label>
                            </div>
                            )) }
                        </form>
                    </div> )}
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{width: '130px'}}>
                            <div className="input-group-btn">
                                <button onClick={handleMinus} className="btn btn-primary btn-minus">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary border-0 text-center" value={productQuantity} readOnly={true} />
                            <div className="input-group-btn">
                                <button onClick={handlePlus} className="btn btn-primary btn-plus">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button onClick={handleAddToCart} className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To
                            Cart</button>
                    </div>
                    <div className="d-flex pt-2">
                        <strong className="text-dark mr-2">Share on:</strong>
                        <div className="d-inline-flex">
                            <a className="text-dark px-2" href="/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="/">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="/">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="bg-light p-30">
                    <div className="nav nav-tabs mb-4">
                        <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                        <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                        <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews ({ productOne?.reviews.length })</a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">Product Description</h4>
                            <p>{ productOne?.description }</p>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <h4 className="mb-3">Additional Information</h4>
                            <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                      </ul> 
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                      </ul> 
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-4">1 review for "Product Name"</h4>
                                    <div className="media mb-4">
                                        <img src="/img/user.jpg" alt="" className="img-fluid mr-3 mt-1" style={{width: '45px'}} />
                                        <div className="media-body">
                                            <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                            <div className="text-primary mb-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="mb-4">Leave a review</h4>
                                    <small>Your email address will not be published. Required fields are marked *</small>
                                    <div className="d-flex my-3">
                                        <p className="mb-0 mr-2">Your Rating * :</p>
                                        <div className="text-primary">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="message">Your Review *</label>
                                            <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name *</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Your Email *</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="form-group mb-0">
                                            <input type="button" value="Leave Your Review" className="btn btn-primary px-3" onClick={() => console.log("form-sent")} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



      <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">You May Also Like</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col">

              <OwlCarousel
                className="related-carousel"
                responsive={responsive}
                loop
                autoplay
                margin={29}
              >
                {productsRelatedList.map((item) => (
                  <div key={item.id} className="product-item bg-light">
                    <ProductCard
                      title={item.title}
                      image={item.image}
                      path={`/products/${item.id}`}
                      price={item.price}
                      priceLow={item.priceLow}
                      reviews={item.reviews?.length}
                    />
                  </div>
                ))}
              </OwlCarousel>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
