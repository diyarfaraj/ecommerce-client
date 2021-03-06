import { useEffect } from "react";
import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { productSelectors, fetchProductsAsync } from "./catalogSlice";
import { useAppSelector, useAppDispatch } from "../../app/store/configureStore";

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  if (status.includes("pending")) return <LoadingComponent />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
