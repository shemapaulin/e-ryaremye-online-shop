import { Table, Image } from "@chakra-ui/react"
import { useCart } from "./CartContext"

const CartItems = () => {
    const {cartItems} = useCart()
  return (
    <Table size="sm">
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>
              <Image src={item.image} alt={item.name} boxSize="50px" objectFit="cover" />
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CartItems
