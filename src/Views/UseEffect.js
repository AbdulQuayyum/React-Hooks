import React, { useEffect, useState } from 'react'
import { UseFetch, UseForm } from '../Components/Index'

const UseEffect = () => {
  const [count, setCount] = useState(0)
  const [values, HandleChange] = UseForm({ email: '', password: '' })

  // useEffect(() => {
  //   console.log("rendering")

  //   return () => {
  //     console.log("unmounting")
  //   }
  // }, [values.password])

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e)
  //   }
  //   window.addEventListener("mousemove", onMouseMove)

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove)
  //   }
  // }, [])

  const demoUrl = `http://numbersapi.com/${count}/trivia`

  const { data, loading } = UseFetch(demoUrl)

  return (
    <div className='w-full flex flex-col justify-center gap-y-4 items-center '>
      <h4> UseEffect </h4>
      <div> {loading ? "loading..." : data} </div>
      <div>count: {count}</div>
      <h4>Click for random fact about numbers</h4>
      <button className='hover:text-gray-500 hover:border-gray-500 border border-black py-3 px-8 rounded-3xl' onClick={() => setCount(c => c + 1)}>click me</button>

      <input placeholder='email@email.com' className='block rounded-md border border-gray-200 bg-white py-3 pl-10 pr-12 text-sm shadow-lg font-nunito font-medium focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='email' name='email' value={values.email} onChange={HandleChange} />
      <input placeholder='******' className='block rounded-md border border-gray-200 bg-white py-3 pl-10 pr-12 text-sm shadow-lg font-nunito font-medium focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black ' type='password' name='password' value={values.password} onChange={HandleChange} />
    </div>
  )
}

export default UseEffect