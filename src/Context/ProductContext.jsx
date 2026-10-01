import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [product, setProduct] = useState([])

    const getItems = async () => {
        console.log("entrou no getItems");

        const response = await axios.get("http://localhost:3000/products")

        setProduct(response.data)
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <ProductContext.Provider value={{ product }}>
            {children}
        </ProductContext.Provider>
    )
}