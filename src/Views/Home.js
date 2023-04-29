import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full flex flex-col justify-center gap-y-4 items-center '>
      <Link to="/UseCallback" className=' hover:text-gray-500'>
        UseCallback
      </Link>
      <Link to="/UseContext" className='hover:text-gray-500'>
        UseContext
      </Link>
      <Link to="/UseEffect" className='hover:text-gray-500'>
        UseEffect
      </Link>
      <Link to="/UseLayoutEffect" className='hover:text-gray-500'>
        UseLayoutEffect
      </Link>
      <Link to="/UseMemo" className='hover:text-gray-500'>
        UseMemo
      </Link>
      <Link to="/UseReducer" className='hover:text-gray-500'>
        UseReducer
      </Link>
      <Link to="/UseRef" className='hover:text-gray-500'>
        UseRef
      </Link>
      <Link to="/UseState" className='hover:text-gray-500'>
        UseState
      </Link>
    </div>
  )
}

export default Home