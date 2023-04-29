import React from 'react'
import Logo from "../Images/logo.png"

const Navbar = () => {
  return (
    <nav className='flex justify-between px-20 items-center w-full mb-10 pt-3'>
        <>
            <img src={Logo} alt='Logo' className='w-14 h-auto object-contain' />
        </>
        <div className=' flex gap-4'>
            <button
                type='button'
                onClick={() =>
                    window.open("https://github.com/AbdulQuayyum/React-Hooks.git", "_blank")
                }
                className='rounded-full border border-black bg-black py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'
            >
                Source Code
            </button>
        </div>
    </nav>
  )
}

export default Navbar