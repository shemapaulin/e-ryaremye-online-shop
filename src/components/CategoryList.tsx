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

const CategoryList = () => {
  const{category}= useCategories()
  return (
    <List spacing={4} >
  {category.map((category) => (
    <ListItem key={category.id} >
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
