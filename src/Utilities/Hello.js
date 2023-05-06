import React from 'react'

export const Hello = ({increment}) => {
    return (
        <button onClick={increment} className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'>click me</button>
    )
}
