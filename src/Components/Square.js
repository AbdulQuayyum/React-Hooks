import React from 'react'
import { UseCountRenders } from "./Index"

export const Square = React.memo(({ n, onClick }) => {
    UseCountRenders()

    return (
        // <button onClick={increment} className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>click me</button>
        <button onClick={onClick} className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>{n}</button>
    )
})
