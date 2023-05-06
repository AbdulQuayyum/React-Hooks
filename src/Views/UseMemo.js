import React, { useCallback, useMemo, useState } from 'react'
import { UseFetch } from '../Components/UseFetch'


const UseMemo = () => {
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
      <p>In React, useMemo is a hook that memoizes the result of a function based on its dependencies. This can be useful for optimizing performance, as it prevents unnecessary recalculations of the function result.

        When you use useMemo, you pass in a function and an array of dependencies. The useMemo hook returns a memoized version of the function result, which is only recalculated if one of the dependencies changes.

        One common use case of useMemo is to optimize performance when rendering a list of items. If the rendering of each item depends on a complex calculation, useMemo can be used to memoize the calculation and prevent unnecessary recalculations when the list is re-rendered.

        Overall, useMemo can be a useful tool for optimizing performance in React applications, by preventing unnecessary recalculations of function results.</p>
      <div>count: {count}</div>
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  )
}

export default UseMemo