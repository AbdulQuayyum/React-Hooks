import React, { useCallback, useMemo, useState, useContext } from 'react'
import { UseFetch } from '../Components/UseFetch'
import { UserContext } from "../Utilities/UserContext"

const UseMemo = () => {
  const message = useContext(UserContext)
  const [count, setCount] = useState(0)
  const { data } = UseFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")

  // if you are using usecallback without any dependencies you can make it a function outside
  const computeLongestWord = useCallback((newData) => {
    if (!newData) {
      return []
    }

    console.log("computing longest word")

    let longestWord = ""

    JSON.parse(newData).forEach(sentence =>
      sentence.split(" ").forEach(word => {
        if (word.length > longestWord.length) {
          longestWord = word
        }
      })
    )
    return longestWord
  }, [])

  const longestWord = useMemo(() => computeLongestWord(data), [data])

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseMemo </h4>
      {message.useMemoMessage}
      <div>count: {count}</div>
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  )
}

export default UseMemo