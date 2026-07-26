import { HStack, List, ListItem, Image } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

interface Category{
    id:number;
    name:string;
    image:string;
}

interface Props {
  Category?: Category;
}

const CategoryList = ({Category}:Props) => {
  const{category}= useCategories()
  return (
    <List spacing={4}border="1px solid"
      borderColor="white"
      borderRadius="12px"
      marginTop="20px"
      paddingLeft="40px"
      paddingTop="15px"
      paddingBottom="10px">
  {category.map((category, index) => (
    <ListItem key={category.id} boxShadow="xl">
      <HStack>
        <Image
          src={category.image}
          alt={category.name}
          boxSize="40px"
          objectFit="contain"
        />
        <span>{category.name}</span>
      </HStack>
    </ListItem>
  ))}
</List>
  )
}

export default CategoryList
