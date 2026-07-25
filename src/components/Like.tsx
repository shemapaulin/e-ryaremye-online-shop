import { useState } from "react";
import { Icon } from "@chakra-ui/react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

const Like = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Icon
      as={liked ? HiHeart : HiOutlineHeart}
      boxSize="20px"
      color={liked ? "pink.700" : "gray.400"}
      cursor="pointer"
      onClick={() => setLiked(!liked)}
    />
  );
};

export default Like;
