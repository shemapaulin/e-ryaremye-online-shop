import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import ProductGrid from "./components/ProductGrid"
import CategoryList from "./components/CategoryList"

function App() {

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg:`"nav nav" "aside main"`
      }}>
  <GridItem area="nav" >
<Navbar/>
  </GridItem>
  <GridItem area="aside"   display={{ base: "none", lg: "block" }}>
  </GridItem>
  <GridItem area="main" marginTop={5}>
<ProductGrid/>
  </GridItem>
</Grid>
    </>
  )
}

export default App
