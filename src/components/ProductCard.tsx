
import type { ProductProps } from '../hooks/useProducts'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'


interface Props {
product : ProductProps
}

const ProductCard = ( {product}:Props) => {
  return (
   <Card w="100%" maxW="280px"  mx="auto" paddingTop={5} paddingLeft={5} alignContent="center">
        <Image src={product.image} boxSize="140px"
    objectFit="contain"/>
        <CardBody>
            <Heading fontSize='xl' noOfLines={2}
  fontWeight="bold">{product.title}</Heading>
        </CardBody>
    </Card>
  )
}

export default ProductCard
