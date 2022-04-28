import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:44337/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: "product" + (prevState.length + 1),
        price: 12.0,
        description: "descrption",
        imgUrl: "sdfsdf",
        quantityInStock: 23,
        type: "sfds",
        brand: "brnad",
      },
    ]);
  }
  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>
        click me
      </Button>
    </>
  );
}
