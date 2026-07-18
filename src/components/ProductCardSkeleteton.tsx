import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const ProductCardSkeleteton = () => {
  return (
    <Card w="100%" maxW="280px"  mx="auto" paddingTop={5} paddingLeft={5}>
        <Skeleton boxSize="140px" />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default ProductCardSkeleteton
