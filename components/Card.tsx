"use client";
import React, { useState } from 'react'
import Button from './Button';
import { CardTypes } from '@/types';


const Card = (props:CardTypes) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_DESCRIPTION_LENGTH = 50;
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  const displayedDescription = isExpanded
    ? props.description
    : props.description.length > MAX_DESCRIPTION_LENGTH
      ? `${props.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
      : props.description;
  const handleAddToCart =()=>{

  }
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
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
    {displayedDescription}
        {props.description.length > MAX_DESCRIPTION_LENGTH && (
          <button className="font-semibold text-black" onClick={toggleDescription}>
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        )}
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
