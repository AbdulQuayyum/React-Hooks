import React, { useEffect } from 'react'
import { UseFetch, UseForm } from '../Components/Index'

const UseEffect = () => {
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

  const demoUrl = 'http://numbersapi.com/43/trivia'

  const { data, loading } = UseFetch(demoUrl)

  return (
    <div className='w-full flex flex-col justify-center gap-y-4 items-center '>
      <h4> UseEffect </h4>
      <div> {loading ? "loading..." : data} </div>

      <input placeholder='email@email.com' className='block rounded-md border border-gray-200 bg-white py-3 pl-10 pr-12 text-sm shadow-lg font-nunito font-medium focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='email' name='email' value={values.email} onChange={HandleChange} />
      <input placeholder='******' className='block rounded-md border border-gray-200 bg-white py-3 pl-10 pr-12 text-sm shadow-lg font-nunito font-medium focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black ' type='password' name='password' value={values.password} onChange={HandleChange} />
    </div>
  )
}

export default UseEffect