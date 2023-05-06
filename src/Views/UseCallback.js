import { useState } from 'react'
import Hello from '../Utilities/Hello'

const UseCallback = () => {
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseCallback </h4>
      <p>
        useCallback is a React hook that memoizes a function so that it only changes when its dependencies change. This can be useful for optimizing performance by preventing unnecessary re-renders of components that depend on the function. You pass in the function and an array of dependencies, and the hook returns a memoized version of the function that can be passed as a prop to child components without causing unnecessary re-renders.</p>
      <Hello increment={() => setCount(c => c + 1)} />
      <div>count: {count}</div>
    </div>
  )
}

export default UseCallback