import Image from 'next/image'
import React from 'react'
import laptop from '@/assets/laptop.webp'

const Hero = () => {
  return (
    <div className='w-96 h-96 mx-auto'>
        <Image src={laptop} alt='laptop' className='mx-auto' />
        <h1 className='text-2xl text-center uppercase font-bold'>Laptop</h1>
    </div>
  )
}

export default Hero