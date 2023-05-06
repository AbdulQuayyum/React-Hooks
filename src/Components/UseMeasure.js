import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'

export const UseMeasure = (deps) => {
    const [rect, setRect] = useState({})
    const myRef = useRef()

    useLayoutEffect(() => {
        setRect(myRef.current.getBoundingClientRect())
    }, deps)

    return [rect, myRef]
}
