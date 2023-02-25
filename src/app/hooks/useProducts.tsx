import { useEffect, useState } from "react";
import {
  fetchFilters,
  fetchProductsAsync,
  productSelectors,
} from "../../features/catalog/catalogSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

export default function useProducts() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, filtersLoaded, brands, types, metaData } =
    useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!productsLoaded) dispatch(fetchProductsAsync());
    setLoading(false);
  }, [dispatch, productsLoaded]);

  useEffect(() => {
    setLoading(true);
    if (!filtersLoaded) dispatch(fetchFilters());
    setLoading(false);
  }, [dispatch, filtersLoaded]);

  return {
    products,
    productsLoaded,
    filtersLoaded,
    brands,
    types,
    metaData,
    loading,
  };
}
