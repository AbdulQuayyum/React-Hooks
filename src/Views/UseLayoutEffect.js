import React, { useState, useRef} from 'react'
import { UseForm, UseMeasure } from '../Components/Index'
import Index from '../Utilities/Index'

const UseLayoutEffect = () => {
  const [values, HandleChange] = UseForm({ email: '', password: '' })
  const [showHello, setShowHello] = useState(true)

  const InputRef = useRef()

  const [rect, InputRef2] = UseMeasure([])

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseLayoutEffect </h4>
      <p>
        In React, useLayoutEffect is a hook that is similar to useEffect, but it runs synchronously after all DOM mutations have been made. This means that any changes made to the DOM inside useLayoutEffect will be visible to the user before the browser has a chance to paint the screen. This can be useful for creating smooth transitions and animations.

        The useLayoutEffect hook takes two arguments: a function that runs after the component renders and an optional array of dependencies. The function inside useLayoutEffect is executed immediately after the browser has finished painting, so any changes made to the DOM inside this function will be visible to the user without delay.

        It's important to note that useLayoutEffect can potentially cause performance issues if the function inside it is computationally expensive. This is because the browser will not paint the screen until the function inside useLayoutEffect has finished executing.

        Overall, useLayoutEffect can be a useful tool for creating smooth animations and transitions, but it should be used carefully and only when necessary to avoid performance issues.</p>
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => { setShowHello(!showHello) }}>click to toggle</button>
      {showHello && <Index />}
      <input ref={InputRef} placeholder='email@email.com' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='email' name='email' value={values.email} onChange={HandleChange} />
      <input ref={InputRef2} placeholder='******' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black ' type='password' name='password' value={values.password} onChange={HandleChange} />
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => { console.log(InputRef.current) }}>click me</button>
    </div>
  )
}

export default UseLayoutEffect