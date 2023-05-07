import React, { useContext, useEffect, useState } from 'react'
import { UseFetch, UseForm } from '../Components/Index'
import { UserContext } from "../Utilities/UserContext"

const UseEffect = () => {
  const message = useContext(UserContext)
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))
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

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseEffect </h4>
      {message.useEffectMessage}
      <div> {loading ? "loading..." : data} </div>
      <div>count: {count}</div>
      <h4>Click for random fact about numbers</h4>
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => setCount(c => c + 1)}>click me</button>

      <input placeholder='email@email.com' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='email' name='email' value={values.email} onChange={HandleChange} />
      <input placeholder='******' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black ' type='password' name='password' value={values.password} onChange={HandleChange} />
    </div>
  )
}

export default UseEffect