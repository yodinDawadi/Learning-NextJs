import React from 'react'
import { ButtonTypes } from '@/types'
function Button(props:ButtonTypes) {
  return (
    <button
    type={props.type}
    onClick={props.onClick}
    className={`${props.className} p-2 bg-black text-white rounded-full`}
    
    >
{props.value}
    </button>
  )
}

export default Button
