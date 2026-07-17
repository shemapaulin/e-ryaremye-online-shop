import { HStack, Image } from "@chakra-ui/react"
import Isoko from "../assets/isoko.png"


const Navbar = () => {
  return (
    <HStack >
        <Image src={Isoko} boxSize='90px' boxShadow='5px'/>
    </HStack>
  )
}

export default Navbar
