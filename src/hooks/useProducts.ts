import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";
import { CanceledError } from "axios";

interface ProductProps {
  id: number;
  title: string;
}
const useProducts = ()=>{
    const [products, setProduct] = useState<ProductProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController()
    apiClients
      .get<ProductProps[]>("/products",{signal:controller.signal})
      .then((res) => setProduct(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)});
    

      return ()=> controller.abort()
  }, []);

  return {products,error}
}

export default useProducts