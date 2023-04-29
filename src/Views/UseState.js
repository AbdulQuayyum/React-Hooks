// import React, { useState } from 'react'

// const UseState = () => {
//   const [count, setCount] = useState(10)

//   return (
//     <div className='w-full flex justify-center items-center flex-col'>
//       <h4>
//         UseState
//       </h4>
//       <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
//       <div>count: {count}</div>
//     </div>
//   )
// }

// export default UseState

import React, { useState } from 'react'

const UseState = () => {
  const [count1, setCount1] = useState(10)
  const [count2, setCount2] = useState(20)

  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <h4>
        UseState
      </h4>
      <button
        onClick={() => {
          setCount1(c => c + 1)
          setCount2(c => c + 1)
        }}>
        +
      </button>
      <div>count: {count1}</div>
      <div>count: {count2}</div>
    </div>
  )
}

export default UseState