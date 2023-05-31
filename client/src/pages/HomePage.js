import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategory } from "../store/middleware/categories";

import Category from "../components/Main/Category";
import Offer from "../components/Offer";
import Vendor from "../components/Vendor";
import ProductCard from "../components/ProductCard";
import Featured from "../components/Featured";
import Carousel from "../components/Main/Carousel";

const HomePage = () => {
  const categoriesList = useSelector(
    (state) => state.categories.categoriesData
  );
  const productsOtherList = useSelector(
    (state) => state.categories.productsCategoryData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getCategory(1));
  }, []);

  const productsFeaturedList = productsOtherList?.slice(0, 4);
  const productsRecentList = productsOtherList?.slice(0, 4);

  return (
    <>
      <Carousel />

      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <Featured />
        </div>
      </div>

      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {categoriesList.map((item) => (
            <Category
              title={item.title}
              image={item.image}
              path={`/categories/${item.id}`}
              quantity={item.quantity}
              key={item.id}
            />
          ))}
        </div>
      </div>

      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
          {productsFeaturedList.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <ProductCard
                  title={item.title}
                  image={item.image}
                  path={`/products/${item.id}`}
                  price={item.price}
                  priceLow={item.priceLow}
                  reviews={item.reviews?.length}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          <Offer />
        </div>
      </div>

      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Recent Products</span>
        </h2>
        <div className="row px-xl-5">
          {productsRecentList.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <ProductCard
                  title={item.title}
                  image={item.image}
                  path={`/products/${item.id}`}
                  price={item.price}
                  priceLow={item.priceLow}
                  reviews={item.reviews?.length}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Vendor />
    </>
  );
};

export default HomePage;
