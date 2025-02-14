import React from 'react'

const Header = () => {
  return (
    <nav className='flex items-center justify-between mx-40 mt-2'>
        <h1 className='text-2xl font-bold'>Home</h1>
        <div className='flex gap-5'>
            <h3>About</h3>
            <h3>Sign-In</h3>
        </div>
    </nav>
  )
}

export default Header