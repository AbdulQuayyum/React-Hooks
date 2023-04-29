import React from 'react'
import { Logo } from "/logo.png"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <>
            <img src={Logo} alt='Logo' className='w-14 h-auto object-contain' />
        </>
        <div className=' flex gap-4'>
            <button
                type='button'
                onClick={() =>
                    window.open("https://github.com/AbdulQuayyum/React-Hooks.git", "_blank")
                }
                className='black-btn'
            >
                Source Code
            </button>
        </div>
    </nav>
  )
}

export default Navbar