'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button onClick={() => {
            console.log("Product Added !!");
        }}>Add To Cart</button>
    </div>
  )
}

export default AddToCart