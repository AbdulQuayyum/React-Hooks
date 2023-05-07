import React, { useContext } from 'react'
import { UserContext, UserContext2 } from "../Utilities/UserContext"
import { Login } from "../Utilities/Login"

const UseContext = () => {
  const message = useContext(UserContext)
  const { user, setUser } = useContext(UserContext2)

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseContext </h4>
      {message.useContextMessage}
      <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {/* <input placeholder='Abdul-Quayyum' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='text' name='text' value={user} /> */}
        {
          user ? (
            <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'
              onClick={() => { setUser(null) }}>
              Logut
            </button>
          ) : (
            <button
              className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'
              onClick={async () => {
                const user = await Login()
                setUser(user)
              }}>
              Login
            </button>
          )
        }
      </div>
    </div>
  )
}

export default UseContext