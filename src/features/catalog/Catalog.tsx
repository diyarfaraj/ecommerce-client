import { Product } from "../../app/models/product";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <p key={product.id}>
            {product.name} - {product.price}
          </p>
        ))}
      </ul>

      <button onClick={addProduct}>click me</button>
    </>
  );
}
