import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='flex items-center justify-between mx-40 mt-2'>
        <Link href="/" className='text-2xl font-bold'>Home</Link>
        <div className='flex gap-5'>
            <Link href="/about">About</Link>
            <Link href="/register">Register</Link>
        </div>
    </nav>
  )
}

export default Header