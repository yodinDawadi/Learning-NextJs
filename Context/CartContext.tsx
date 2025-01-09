import { CartContextTypes, CartProductsTypes } from "@/types"
import { createContext, ReactNode, useState } from "react"

type CartProductPropsType = {
children:ReactNode
}

//creating a context
export const CartContext = createContext<Partial<CartContextTypes>>({});

//creating a provider

export default function CartProvider ({children}:CartProductPropsType){
const [cartProducts,setCartProducts] = useState<CartProductsTypes[]>([]);
return(
    <CartContext.Provider value={{cartProducts,setCartProducts}}>
        {children}
    </CartContext.Provider>
)
}