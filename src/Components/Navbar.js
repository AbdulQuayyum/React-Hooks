import React from 'react'

import { Link } from 'react-router-dom'
import Logo from "../Images/logo.png"

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between w-full px-20 pt-3 mb-10'>
            <Link to="/">
                <img src={Logo} alt='Logo' className='object-contain h-auto w-14' />
            </Link>
            <div className='flex gap-4 '>
                <button
                    type='button'
                    onClick={() =>
                        window.open("https://github.com/AbdulQuayyum/React-Hooks.git", "_blank")
                    }
                    className='px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'
                >
                    Source Code
                </button>
            </div>
        </nav>
    )
}

export default Navbar