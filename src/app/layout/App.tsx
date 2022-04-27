import { useState, useEffect } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

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
    <div>
      <h1>Kochi Stockholm</h1>
      <Catalog products={products} addProduct={addProduct} />
    </div>
  );
}

export default App;
