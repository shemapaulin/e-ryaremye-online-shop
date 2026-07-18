import useProducts from "../hooks/useProducts";

const ProductGrid = () => {
  const {products , error} = useProducts();

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