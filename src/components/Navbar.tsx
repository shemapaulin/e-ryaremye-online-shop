import { Badge, Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import Isoko from "../assets/isoko.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { useCart } from "./CartContext";

const Navbar = () => {
  const { count } = useCart();

  return (
    <HStack justifyContent="space-between">
      <Image src={Isoko} boxSize="90px" boxShadow="5px" />

      <Flex gap="7" align="center">
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

        <ColorModeSwitch />
      </Flex>
    </HStack>
  );
};

export default Navbar;