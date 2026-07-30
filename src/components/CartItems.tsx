import { Table, Image, GridItem, Heading, Text, Icon, Button, Flex, Link } from "@chakra-ui/react"
import { RiArrowLeftLine, RiDeleteBin6Line } from "react-icons/ri";
import { FaAmazonPay } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import { useCart } from "./CartContext"
import Navbar from "./Navbar"

const CartItems = () => {
    const {cartItems,deleteItem} = useCart()
  return (
    <>
    <Navbar/>
    {cartItems && cartItems.length > 0 ? (
    <GridItem marginLeft='10px' marginRight='10px'>
      <Heading justifySelf='center' paddingTop='10px' paddingBottom='25px'>Cart Items</Heading>
    <Table size="sm" >
      <thead style={{boxSizing:"border-box"}}>
        <tr style={{ border: "1px solid" }}>
          <th>Product</th>
          <th>Product Name</th>
          <th>Price ($)</th>
        </tr>
      </thead>
      <tbody style={{ border: "1px solid" }}>
        {cartItems.map((item) => (
          <tr key={item.id} style={{ border: "1px solid" }}>
            <td style={{ border: "1px solid" }}>
              <Image src={item.image} alt={item.name} boxSize="50px" objectFit="cover" justifySelf='center' alignContent='center'/>
            </td>
            <td style={{ border: "1px solid" }}><Text justifySelf='center'>{item.name}</Text></td>
            <td style={{ border: "1px solid" }}><Text justifySelf='center'>{item.price}</Text></td>
            <td style={{ textAlign: "center",border: "1px solid" }}>
              <Icon as={FaAmazonPay} boxSize="23px" color="Green" onClick={() => deleteItem(item)} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Icon as={RiDeleteBin6Line} boxSize="23px" color="red" onClick={() => deleteItem(item)} />
            </td>
            
          </tr>
        ))}
      </tbody>
    </Table>
    </GridItem>
    ) : (
      <Text padding="20px" textAlign="center">Selected Items Will Appear Here</Text>
    )}
    <Flex justify="center" paddingTop={'30px'}>
      <Link as={RouterLink} to='/'>
  <Button bg="dark" variant="outline" >
    <RiArrowLeftLine />
    Back To Home
  </Button>
  </Link>
</Flex>
  
    </>
  )
}

export default CartItems
