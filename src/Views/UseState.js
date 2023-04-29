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
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 })

  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <h4>
        UseState
      </h4>
      <button
        onClick={() =>
          setCount(currentState => ({
            count1: currentState.count1 + 1,
            count2: currentState.count2
          }))}>
        +
      </button>
      <div>count: {count1}</div>
      <div>count: {count2}2</div>
    </div>
  )
}

export default UseState