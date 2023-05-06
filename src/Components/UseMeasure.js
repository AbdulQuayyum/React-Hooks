import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'

export const UseMeasure = (ref, deps) => {
    const [rect, setRect] = useState({})

    useLayoutEffect(() => {
        setRect(ref.current.getBoundingClientRect())
    }, [deps])

    return rect
}
