// CartContext.tsx
import { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  image:string;
  price:string;
}

interface CartContextType {
    count: number;
  cartItems: Product[];
  addToCart: (product: Product) => void;
  deleteItem: (product: Product) => void;
}

const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
 const count = cartItems.length;
  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const deleteItem=(product:Product)=>{
    setCartItems((prev) => prev.filter((p) => p.id !== product.id));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, count, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);