// import React, { useState } from 'react'

// const UseState = () => {
//   const [count, setCount] = useState(10)

//   return (
//     <div className='flex flex-col items-center justify-center w-full'>
//       <h4>
//         UseState
//       </h4>
//       <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
//       <div>count: {count}</div>
//     </div>
//   )
// }

// export default UseState

// import React, { useState } from 'react'

// const UseState = () => {
//   const [count1, setCount1] = useState(10)
//   const [count2, setCount2] = useState(20)

//   return (
//     <div className='flex flex-col items-center justify-center w-full'>
//       <h4>
//         UseState
//       </h4>
//       <button
//         onClick={() => {
//           setCount1(c => c + 1)
//           setCount2(c => c + 1)
//         }}>
//         +
//       </button>
//       <div>count: {count1}</div>
//       <div>count: {count2}</div>
//     </div>
//   )
// }

// export default UseState

import React from 'react'
import { UseForm } from '../Components/Index'

const UseState = () => {
  const [values, HandleChange] = UseForm({ email: '', password: '' })

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseState </h4>
      <p>
        In React, the useState hook is used to add state to functional components. It allows you to declare a state variable and a function that updates that variable, which can be used to dynamically render content based on changes in the state. The useState hook takes an initial state value as an argument and returns an array containing the current state value and a function that can update the state. The state can be updated by calling the function returned by useState with a new value. When the state is updated, React automatically re-renders the component with the new state value, updating the UI as necessary.</p>
      <input placeholder='email@email.com' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='email' name='email' value={values.email} onChange={HandleChange} />
      <input placeholder='******' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black ' type='password' name='password' value={values.password} onChange={HandleChange} />
    </div>
  )
}

export default UseState