import React, { useEffect, useState } from 'react'
import { UseFetch, UseForm } from '../Components/Index'

const UseEffect = () => {
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
      <p>In React, the useEffect hook is used to manage side effects in functional components. Side effects refer to any code that interacts with the outside world, such as fetching data from an API or updating the DOM. The useEffect hook allows you to specify a function that runs after the component renders, and optionally after subsequent updates. This function can handle any necessary side effects, such as fetching data or subscribing to events.

        The useEffect hook takes two arguments: the first is the function to be executed after the component renders, and the second is an optional array of dependencies. If the dependency array is not specified, the effect function runs after every component render. If the dependency array is specified, the effect function only runs when the values in the dependency array change. This can be used to optimize performance by preventing unnecessary re-renders.

        When the component unmounts, the useEffect hook can optionally return a cleanup function to perform any necessary cleanup, such as unsubscribing from events or canceling API requests. The cleanup function is executed before the component unmounts and before any subsequent effects are run.</p>
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