import { useState, useEffect } from "react";
import { Product } from './product';


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:44337/api/products')
      .then(res => res.json())
      .then(data=> setProducts(data))

  }, [])
  

  function addProduct(){
    setProducts(prevState=> [...prevState, {
      id: prevState.length+1,
      name: "product"+(prevState.length+1), 
      price:12.00,
      description: "descrption",
      imgUrl:"sdfsdf",
      quantityInStock:23,
      type:"sfds",
      brand:"brnad"
    }]);
  }

  return (
    <div>
     <h1>Kochi Stockholm</h1>
     {products.map(product => (
       <p key={product.id}>{product.name} - {product.price}</p>
     ))}
     <button onClick={addProduct} >click me</button>
    </div>
  );
}

export default App;
