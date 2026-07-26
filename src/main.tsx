import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "./index.css";
import App from "./App";
import theme from "./theme";
import { CartProvider } from "./components/CartContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <CartProvider>
        <App />
      </CartProvider>

    </ChakraProvider>
  </StrictMode>
);