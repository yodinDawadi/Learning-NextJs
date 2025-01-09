"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { ProductsTypes,ProductContextTypes} from "@/types";

type productProvideProps ={
    children:ReactNode
}
//creating the context
export const ProductContext = createContext<Partial<ProductContextTypes>>({});
//creating the provider component
export default function ProductProvider ({children}:productProvideProps) {
const [products, setProducts]= useState<ProductsTypes[]>([]);

useEffect(()=>{

    const fetchProducts = async ()=>{
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };
    fetchProducts();
},[]);
return(
    <ProductContext.Provider value={{products,setProducts}}>
        {children}
    </ProductContext.Provider>
)
}
