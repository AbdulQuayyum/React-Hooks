import React from 'react'
import { UseCountRenders } from "../Components/Index"

export const Hello = React.memo(({ increment }) => {
    UseCountRenders()

    return (
        <button onClick={increment} className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>click me</button>
    )
})
