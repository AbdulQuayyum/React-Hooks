import React, { useRef } from 'react'

export const UseCountRenders = () => {
    const renders = useRef(0)
    console.log(`renders: ${renders.current++}`)
}
