import { useCallback, useContext, useState } from 'react'
import { Hello } from '../Utilities/Hello'
import { Square } from '../Components/Index'
import { UserContext } from "../Utilities/UserContext"

const UseCallback = () => {
  const message = useContext(UserContext)
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
      {message.useCallbackMessage}
      <Hello increment={increment} />
      <div>count: {count}</div>
      {randomNumbers.map(n => {
        return <Square increment={increment} n={n} key={n} />
      })}
    </div>
  )
}

export default UseCallback