"use client";
import React from 'react'
import Button from './Button';
import { CardTypes } from '@/types';


const Card = (props:CardTypes) => {
  const handleAddToCart =()=>{
    
  }
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80">
  <div className="relative p-2.5 h-52 overflow-hidden rounded-xl bg-clip-border">
    <img
      src={props.image}
      alt="card-image"
      className="h-full w-full object-cover rounded-md"
    />
  </div>
  <div className="p-4">
    <div className="mb-2 flex items-center justify-between">
      <p className="text-slate-800 text-xl font-semibold">
        {props.title}
      </p>
      <p className="text-cyan-600 text-xl font-semibold">
        ${props.price}
      </p>
    </div>
    <p className="text-slate-600 leading-normal font-light">
      {props.description}
    </p>
    <Button value='Add to cart'
    onClick={handleAddToCart}
    className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add to Cart
    </Button>
  </div>
</div>
  )
}

export default Card
