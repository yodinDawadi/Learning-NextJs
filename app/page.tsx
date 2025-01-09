"use client";
import Hero from "@/components/Hero";
import Products from "@/pages/Products";
import ProductProvider from "@/Context/productContext";
import CartProvider from "@/Context/CartContext";


export default function Home() {
  return (
    <CartProvider>
      <ProductProvider>
   <Hero/>
   <h2 className="font-bold text-3xl w-full bg-slate-100">Products Catelouge</h2>
   <Products/>
   </ProductProvider>
    </CartProvider>
   
  );
}
