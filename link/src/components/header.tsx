import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-zinc-500'>
      <nav className='flex items-center justify-between mx-40 h-12 text-white'>
        <Link href="/" className='text-2xl font-bold uppercase'>Home</Link>
        <div className='flex gap-5'>
            <Link href="/about">About</Link>
            <Link href="/register">Register</Link>
        </div>
    </nav>
    </div>
  )
}

export default Header