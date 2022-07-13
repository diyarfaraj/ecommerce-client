import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { productSelectors, fetchProductAsync } from "./catalogSlice";
import { useAppSelector, useAppDispatch } from "../../app/store/configureStore";

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductAsync());
  }, [productsLoaded]);

  if (status.includes("pending")) return <LoadingComponent />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
