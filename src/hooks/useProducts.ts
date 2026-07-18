import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";
import { CanceledError } from "axios";

export interface ProductProps {
  id: number;
  title: string;
  image : string;
  price: Number;
}
const useProducts = ()=>{
    const [products, setProduct] = useState<ProductProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setLoading]=useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    apiClients
      .get<ProductProps[]>("/products",{signal:controller.signal})
      .then((res) => {
        setProduct(res.data)
        setLoading(false)
    })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)});
    

      return ()=> controller.abort()
  }, []);

  return {products,error,isLoading}
}

export default useProducts