import React, { useContext } from 'react'
import { UserContext, UserContext2 } from "../Utilities/UserContext"

const UseContext2 = () => {
    const message = useContext(UserContext)
    const { user, setUser } = useContext(UserContext2)

    return (
        <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
            <h4> UseContext2 </h4>
            {message.useContextMessage}
            <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
        </div>
    )
}

export default UseContext2