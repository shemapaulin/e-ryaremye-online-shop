import { HStack, Image } from "@chakra-ui/react"
import Isoko from "../assets/isoko.png"
import ColorModeSwitch from "./ColorModeSwitch"


const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} >
        <Image src={Isoko} boxSize='90px' boxShadow='5px'/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar
