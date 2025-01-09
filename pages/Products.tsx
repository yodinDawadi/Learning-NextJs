"use client";
import Card from '@/components/Card';
import React, { useContext } from 'react'
import {ProductContext} from '@/Context/productContext';
import { ProductsTypes } from '@/types';

const Products = () => {
  const {products} = useContext(ProductContext)
  return (
    <>
    <div 
    className='flex items-center justify-center flex-wrap gap-10 bg-slate-100'
    id="productsWrapper">
   {
    products?.map((product:ProductsTypes)=>(
      <Card key={product.id}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
      />
    ))
   }
    </div>
    </>
  )
}

export default Products
