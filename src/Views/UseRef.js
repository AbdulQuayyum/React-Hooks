import React, { useState, useRef } from 'react'
import { UseForm } from '../Components/Index'
import Index from '../Utilities/Index'

const UseRef = () => {
  const [values, HandleChange] = UseForm({ email: '', password: '' })
  const [showHello, setShowHello] = useState(true)

  const InputRef = useRef()

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseRef </h4>
      <p>In React, the useRef hook is used to create a mutable reference that persists across component renders. It allows you to access and modify a DOM node or any other value that may change over time.

        When you use the useRef hook, you get a mutable object that has a current property. This current property can be set to any value, and the value persists across component renders. You can also read the current property to get the current value.

        One common use case of useRef is to access a DOM element. You can create a ref using useRef, and then assign it to the ref prop of a JSX element. This allows you to access the DOM node in your component code, and modify it as needed.

        Another use case of useRef is to store a value that needs to persist across component renders, but that should not trigger a re-render when it changes. For example, you could use useRef to store a counter value that increments over time, without triggering a re-render of the component.

        Overall, useRef can be a useful tool for managing mutable values in functional components, and accessing and modifying DOM nodes.</p>
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => { setShowHello(!showHello) }}>click to toggle</button>
      {showHello && <Index />}
      <input ref={InputRef} placeholder='email@email.com' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='email' name='email' value={values.email} onChange={HandleChange} />
      <input placeholder='******' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black ' type='password' name='password' value={values.password} onChange={HandleChange} />
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => { console.log(InputRef.current) }}>click me</button>
    </div>
  )
}

export default UseRef