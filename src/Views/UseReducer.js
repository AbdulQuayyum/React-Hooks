import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default:
      return state
  }
}

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseReducer </h4>
      <p>In React, useReducer is a hook that provides an alternative to using useState for managing state in a component. useReducer is especially useful when state changes are complex or involve multiple sub-values, or when state transitions need to be handled in a more predictable and explicit way.

        When you use useReducer, you pass in a reducer function and an initial state value. The reducer function takes the current state and an action object as arguments, and returns a new state value based on the action.

        To update the state, you dispatch an action object to the reducer using a dispatch function returned by the useReducer hook. The dispatch function takes an action object as its argument and triggers a state update by calling the reducer function.

        One common use case of useReducer is for managing complex forms or other UI elements that require multiple sub-values to be updated simultaneously. useReducer can be used to handle these complex state transitions in a more explicit and predictable way than useState.

        Overall, useReducer can be a useful tool for managing complex state transitions in React applications, and provides an alternative to using useState for state management.</p>
      <div>count: {count}</div>
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  )
}

export default UseReducer 