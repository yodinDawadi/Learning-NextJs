import { Dispatch, SetStateAction } from "react"


 export interface ButtonTypes {
    children?:string,
    disabled?:boolean,
    value:string,
    type:"submit" | "reset" |"button",
    onClick?:()=> void,
    className?:string,
}
 
export interface ProductsTypes {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number}
};

export interface ProductContextTypes {
    products: ProductsTypes[],
    setProducts: Dispatch<SetStateAction<ProductsTypes[]>>
};

export interface CartProductsTypes {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string
};


export interface CartContextTypes {
    cartProducts: CartProductsTypes[],
    setCartProducts: Dispatch<SetStateAction<CartProductsTypes[]>>
};


export interface CardTypes {
    key:number
    image:string,
    title:string,
    price:number,
    description:string
}

