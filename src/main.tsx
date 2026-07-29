import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "./index.css";
import App from "./App";
import theme from "./theme";
import { CartProvider } from "./components/CartContext";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import CartItems from "./components/CartItems";


const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/CartItems",element:<CartItems/>}
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>

    </ChakraProvider>
  </StrictMode>
);