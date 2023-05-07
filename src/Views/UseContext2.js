import React, { useContext } from 'react'
import { UserContext, UserContext2 } from "../Utilities/UserContext"

const UseContext2 = () => {
    const message = useContext(UserContext)
    const { value, setValue } = useContext(UserContext2)

    return (
        <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
            <h4> UseContext2 </h4>
            {message.useContextMessage}
            <div className='flex flex-col items-center justify-center w-full gap-y-4 '>

                {value}
                <input placeholder='blah blah blah' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='text' name='text' value={value} onChange={e => setValue(e.target.value)} />
            </div>
        </div>
    )
}

export default UseContext2