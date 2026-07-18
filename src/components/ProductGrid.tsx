import { Center, SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleteton from "./ProductCardSkeleteton";

const ProductGrid = () => {
  const { products, error,isLoading } = useProducts();
  const Skeleton=[1,2,3,4,5,6];

  return (
    <>
      {error && <p>{error}</p>}

  <SimpleGrid
  columns={{ base: 1, md: 2, lg: 3 }}
  spacing={8}
  justifyItems="center"
>
    {isLoading && Skeleton.map(skeleto => <ProductCardSkeleteton key={skeleto} />)}
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</SimpleGrid>

    </>
  );
};

export default ProductGrid;