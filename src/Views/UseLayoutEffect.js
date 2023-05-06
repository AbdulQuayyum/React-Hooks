import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { UseForm } from '../Components/Index'
import Index from '../Utilities/Index'

const UseLayoutEffect = () => {
  const [values, HandleChange] = UseForm({ email: '', password: '' })
  const [showHello, setShowHello] = useState(true)

  const InputRef = useRef()

  useLayoutEffect(() => {
    console.log(InputRef.current.getBoundingClientRect())
  }, [])

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseLayoutEffect </h4>
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => { setShowHello(!showHello) }}>click to toggle</button>
      {showHello && <Index />}
      <input ref={InputRef} placeholder='email@email.com' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='email' name='email' value={values.email} onChange={HandleChange} />
      <input placeholder='******' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black ' type='password' name='password' value={values.password} onChange={HandleChange} />
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => { console.log(InputRef.current) }}>click me</button>
    </div>
  )
}

export default UseLayoutEffect