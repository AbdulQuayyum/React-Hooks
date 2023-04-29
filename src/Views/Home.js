import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full flex flex-col justify-center gap-y-4 items-center '>
      <Link to="/UseState" className='hover:text-gray-500 hover:border-gray-500 border border-black py-3 px-8 rounded-3xl'>
        UseState
      </Link>
      <Link to="/UseEffect" className='hover:text-gray-500 hover:border-gray-500 border border-black py-3 px-8 rounded-3xl'>
        UseEffect
      </Link>
      <Link to="/UseRef" className='hover:text-gray-500 hover:border-gray-500 border border-black py-3 px-8 rounded-3xl'>
        UseRef
      </Link>
      <Link to="/UseLayoutEffect" className='hover:text-gray-500 hover:border-gray-500 border border-black py-3 px-8 rounded-3xl'>
        UseLayoutEffect
      </Link>
      <Link to="/UseCallback" className=' hover:text-gray-500 hover:border-gray-500 border border-black py-3 px-8 rounded-3xl'>
        UseCallback
      </Link>
      <Link to="/UseMemo" className='hover:text-gray-500 hover:border-gray-500 border border-black py-3 px-8 rounded-3xl'>
        UseMemo
      </Link>
      <Link to="/UseReducer" className='hover:text-gray-500 hover:border-gray-500 border border-black py-3 px-8 rounded-3xl'>
        UseReducer
      </Link>
      <Link to="/UseContext" className='hover:text-gray-500 hover:border-gray-500 border border-black py-3 px-8 rounded-3xl'>
        UseContext
      </Link>
    </div>
  )
}

export default Home