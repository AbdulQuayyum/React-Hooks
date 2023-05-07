import React, { useContext } from 'react'
import { UserContext } from "../Utilities/UserContext"

const UseContext2 = () => {
    const message = useContext(UserContext)

    return (
        <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
            <h4> UseContext2 </h4>
            {message}
        </div>
    )
}

export default UseContext2