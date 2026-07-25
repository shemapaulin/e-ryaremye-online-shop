
import type { ProductProps } from '../hooks/useProducts'
import { Card, CardBody, Flex, Heading, HStack, Image } from '@chakra-ui/react'
import Like from './Like'
import { MdOutlineAddShoppingCart } from "react-icons/md";


export interface Props {
product : ProductProps
}

const ProductCard = ( {product}:Props) => {
  return (
   <Card w="100%" maxW="280px"  mx="auto" paddingTop={5} paddingLeft={5} alignContent="center">
    <Flex justify="flex-end" paddingRight="10px">
  <MdOutlineAddShoppingCart size="20px" color="white"/>
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
