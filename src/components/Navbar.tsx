import { Badge, Box, Button, Flex, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import Isoko from "../assets/isoko.png";
import IsokoWhite from "../assets/isokowhite.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { count } = useCart();
  const logo = useColorModeValue(Isoko, IsokoWhite);
  return (
    <HStack justifyContent="space-between" boxShadow='lg' position="sticky" zIndex='1000' top="0">
      <Image src={logo} boxSize="90px" boxShadow="5px" />
      
      <Flex gap="7" align="center">
        <Link to={'/CartItems'}>
        <Box position="relative">
          <Button rounded="3xl">
            <TiShoppingCart size="30px" />
          </Button>

          {count > 0 && (
            <Badge
              position="absolute"
              top="-2"
              right="-2"
              borderRadius="full"
              colorScheme="red"
              px="2"
              minW="20px"
              textAlign="center"
            >
              {count}
            </Badge>
          )}
        </Box>
</Link>
        <ColorModeSwitch />
      </Flex>
      
    </HStack>
  );
};

export default Navbar;