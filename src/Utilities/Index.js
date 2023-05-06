import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { UseFetch, UseMeasure } from '../Components/Index'

const Index = () => {
    // const renders = useRef(0)

    // console.log(`hello renders: ${renders.current++}`)
    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))

    const demoUrl = `http://numbersapi.com/${count}/trivia`

    const { data, loading } = UseFetch(demoUrl)

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count])
    


    const [rect, DivRef] = UseMeasure([data])

    return (
        <div>
            <div ref={DivRef}> {!data ? "loading..." : data} </div>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
            <div>count: {count}</div>
            <h4>Click for random fact about numbers</h4>
            <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => setCount(c => c + 1)}>click me</button>
        </div>
    )
}

export default Index