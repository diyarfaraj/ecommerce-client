import { Container, CssBaseline, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";

function App() {
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
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </>
  );
}

export default App;
