import React from 'react'
import { useRef } from 'react'

const Index = () => {
    const renders = useRef(0)

    console.log(`hello renders: ${renders.current++}`)

    return (
        <div>Index</div>
    )
}

export default Index