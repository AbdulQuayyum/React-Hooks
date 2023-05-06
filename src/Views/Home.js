import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <Link to="/UseState" className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>
        UseState
      </Link>
      <Link to="/UseEffect" className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>
        UseEffect
      </Link>
      <Link to="/UseRef" className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>
        UseRef
      </Link>
      <Link to="/UseLayoutEffect" className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>
        UseLayoutEffect
      </Link>
      <Link to="/UseCallback" className='px-8 py-3 border border-black  hover:text-gray-500 hover:border-gray-500 rounded-3xl'>
        UseCallback
      </Link>
      <Link to="/UseMemo" className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>
        UseMemo
      </Link>
      <Link to="/UseReducer" className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>
        UseReducer
      </Link>
      <Link to="/UseContext" className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>
        UseContext
      </Link>
    </div>
  )
}

export default Home