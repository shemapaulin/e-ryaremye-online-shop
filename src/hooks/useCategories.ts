import { useEffect, useState } from "react";
import apiClientCat from "../Services/api-client-cat";
import { CanceledError } from "axios";

export interface clientsProps {
  id: number;
  name: string;
  image : string;
}
const useCategories = ()=>{
    const [category, setCategory] = useState<clientsProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setLoading]=useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    apiClientCat
      .get<clientsProps[]>("/categories",{signal:controller.signal})
      .then((res) => {
        setCategory(res.data)
        setLoading(false)
    })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)});
    

      return ()=> controller.abort()
  }, []);

  return {category,error,isLoading}
}

export default useCategories