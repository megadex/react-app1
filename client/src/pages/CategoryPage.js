import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategory } from "../store/middleware/categories";

import Breadcrumb from "../components/Breadcrumb";
import IconsView from "../components/IconsView";
import Sorting from "../components/Sorting";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
  const productsCategoryList = useSelector(
    (state) => state.categories.productsCategoryData
  );
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [titlePage, setTitlePage] = useState(null);

  useEffect(() => {
    dispatch(getCategory(categoryId));
    setTitlePage(`Category ${categoryId}`);
  }, [categoryId]);

  return (
    <>
      <Breadcrumb breadcrumbItem={ titlePage } />

      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4">
            <Filter />
          </div>

          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <IconsView />

                  <div className="ml-2">
                    <Sorting />
                  </div>
                </div>
              </div>

              {productsCategoryList.map((item) => (
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

              <div className="col-12">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
