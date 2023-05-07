import React, { useContext } from 'react'
import { UserContext } from "../Utilities/UserContext"

const UseContext = () => {
  const message = useContext(UserContext)

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseContext </h4>
      {message.useContextMessage}
    </div>
  )
}

export default UseContext