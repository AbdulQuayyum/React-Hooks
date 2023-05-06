import { useCallback, useState } from 'react'
import { Hello } from '../Utilities/Hello'
import { Square } from '../Components/Index'

const UseCallback = () => {
  const [count, setCount] = useState(0)
  const randomNumbers = [1, 2, 3, 4, 5]

  // const increment = useCallback(() => {
  //   setCount(c => c + 1)
  // }, [setCount])

  const increment = useCallback((n) => {
    setCount(c => c + n)
  }, [setCount])

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseCallback </h4>
      <p>
        useCallback is a React hook that memoizes a function so that it only changes when its dependencies change. This can be useful for optimizing performance by preventing unnecessary re-renders of components that depend on the function. You pass in the function and an array of dependencies, and the hook returns a memoized version of the function that can be passed as a prop to child components without causing unnecessary re-renders.</p>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {randomNumbers.map(n => {
        return <Square onClick={() => increment(n)} n={n} key={n}/>
      })}
    </div>
  )
}

export default UseCallback