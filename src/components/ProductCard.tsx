
import type { ProductProps } from '../hooks/useProducts'
import { Button, Card, CardBody, Flex, Heading, HStack, Image } from '@chakra-ui/react'
import Like from './Like'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useCart } from './CartContext';


export interface Props {
product : ProductProps
}

const ProductCard = ( {product}:Props) => {
  const { addToCart } = useCart();
  return (
   <Card w="100%" maxW="280px"  mx="auto" paddingTop={5} paddingLeft={5} alignContent="center">
    <Flex justify="flex-end" paddingRight="10px">
      <Button onClick={() => {
        addToCart({ ...product, name: product.title });
        console.log(product);
      }}>
  <MdOutlineAddShoppingCart size="20px" color="red"/>
  </Button>
</Flex>
        <HStack>
          <Image src={product.image} boxSize="140px"
    objectFit="contain"/>
    
        </HStack>
        <CardBody>
            <Heading fontSize="xs"  noOfLines={2}
  fontWeight="bold">{product.title}</Heading>
     <HStack justifyContent="space-between">
      <Heading fontSize="17px" paddingTop="3px">$ {String(product.price)}</Heading>
      <Like/>
     </HStack>
        </CardBody>
    </Card>
  )
}

export default ProductCard
