import React, { useContext } from 'react'
import { CartContext } from '@/Context/CartContext'
import Card from '@/components/Card'
import { CartProductsTypes } from '@/types'

const cart = () => {
    const {cartProducts} =useContext(CartContext)
  return (
    <>
    <div 
    className='flex items-center justify-center flex-wrap gap-10'
    id="productsWrapper">
   {
    cartProducts?.map((product:CartProductsTypes)=>(
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

export default cart
