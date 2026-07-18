import { Center, SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products, error } = useProducts();

  return (
    <>
      {error && <p>{error}</p>}

  <SimpleGrid
  columns={{ base: 1, md: 2, lg: 3 }}
  spacing={8}
  justifyItems="center"
>
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</SimpleGrid>

    </>
  );
};

export default ProductGrid;