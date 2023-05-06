import React, { useEffect, useState, useRef } from 'react'
import { UseForm } from '../Components/Index'

const UseRef = () => {
  const [values, HandleChange] = UseForm({ email: '', password: '' })

  const InputRef = useRef()

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseRef </h4>

      <input placeholder='email@email.com' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='email' name='email' value={values.email} onChange={HandleChange} />
      <input placeholder='******' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black ' type='password' name='password' value={values.password} onChange={HandleChange} />
    </div>
  )
}

export default UseRef