"use client";
import React from 'react'
import Button from '@/components/Button'
const handleScroll =()=>{
    console.log("Button working")
}

function Hero() {
  return (
    <div className='w-full mt-10 flex-wrap h-80 items-center justify-center flex bg-slate-100'>
      <div>
        <h1 className='text-3xl font-bold w-full text-center '>Leraning Next js</h1>
      <p className='w-full text-center'>In this page i will learn Nextjs</p>
      <div className='w-full justify-center flex'>
        <Button
        value='Explore More'
        type='button'
        onClick={handleScroll}
        className="p-2 bg-black text-white rounded-full"
        />
      </div>
      
      </div>
      <div id='Image section'>
      </div>
    </div>
  )
}

export default Hero
