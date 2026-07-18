import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";

interface ProductProps {
  id: number;
  title: string;
}

const ProductGrid = () => {
  const [products, setProduct] = useState<ProductProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get<ProductProps[]>("/products")
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <p>{error}</p>}

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductGrid;