// import React, { useReducer } from 'react'

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1
//     case "decrement":
//       return state - 1
//     default:
//       return state
//   }
// }

// const UseReducer = () => {
//   const [count, dispatch] = useReducer(reducer, 0)

//   return (
//     <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
//       <h4> UseReducer </h4>
//       <p>In React, useReducer is a hook that provides an alternative to using useState for managing state in a component. useReducer is especially useful when state changes are complex or involve multiple sub-values, or when state transitions need to be handled in a more predictable and explicit way.

//         When you use useReducer, you pass in a reducer function and an initial state value. The reducer function takes the current state and an action object as arguments, and returns a new state value based on the action.

//         To update the state, you dispatch an action object to the reducer using a dispatch function returned by the useReducer hook. The dispatch function takes an action object as its argument and triggers a state update by calling the reducer function.

//         One common use case of useReducer is for managing complex forms or other UI elements that require multiple sub-values to be updated simultaneously. useReducer can be used to handle these complex state transitions in a more explicit and predictable way than useState.

//         Overall, useReducer can be a useful tool for managing complex state transitions in React applications, and provides an alternative to using useState for state management.</p>
//       <div>count: {count}</div>
//       <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => dispatch({ type: "increment" })}>increment</button>
//       <button className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl' onClick={() => dispatch({ type: "decrement" })}>decrement</button>
//     </div>
//   )
// }

// export default UseReducer 


import React, { useReducer, useState } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1
      }
    case "toggle-todo":
      return {
        todos: state.todos.map((t, index) => index === action.index ? { ...t, completed: !t.completed } : t),
        todoCount: state.todoCount
      }
    default:
      return state
  }
}

const UseReducer = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, { todos: [], todoCount: 0 })
  const [text, setText] = useState()

  return (
    <div className='flex flex-col items-center justify-center w-full gap-y-4 '>
      <h4> UseReducer </h4>
      <p>In React, useReducer is a hook that provides an alternative to using useState for managing state in a component. useReducer is especially useful when state changes are complex or involve multiple sub-values, or when state transitions need to be handled in a more predictable and explicit way.

        When you use useReducer, you pass in a reducer function and an initial state value. The reducer function takes the current state and an action object as arguments, and returns a new state value based on the action.

        To update the state, you dispatch an action object to the reducer using a dispatch function returned by the useReducer hook. The dispatch function takes an action object as its argument and triggers a state update by calling the reducer function.

        One common use case of useReducer is for managing complex forms or other UI elements that require multiple sub-values to be updated simultaneously. useReducer can be used to handle these complex state transitions in a more explicit and predictable way than useState.

        Overall, useReducer can be a useful tool for managing complex state transitions in React applications, and provides an alternative to using useState for state management.</p>
      <form
        className='flex flex-col items-center justify-center w-full gap-y-4'
        onSubmit={e => {
          e.preventDefault()
          dispatch({ type: "add-todo", text })
          setText("")
        }}>
        <input placeholder='blah blah blah' className='block py-3 pl-10 pr-12 text-sm font-medium bg-white border border-gray-200 rounded-md shadow-lg font-nunito focus:border-black focus:outline-none focus:ring-0 dark:bg-transparent dark:border-black' type='text' name='text' value={text} onChange={e => setText(e.target.value)} />
        <button
          className='px-8 py-3 border border-black hover:text-gray-500 hover:border-gray-500 rounded-3xl'
          onClick={e => {
            e.preventDefault()
            dispatch({ type: "add-todo", text })
            setText("")
          }}>
          submit
        </button>
      </form>
      <div>Number of todos: {todoCount}</div>
      {/* <pre> {JSON.stringify(todos, null, 2)} </pre> */}
      {todos.map((t, index) => (
        <div
          key={t.text}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
          onClick={() => dispatch({ type: "toggle-todo", index })}  >
          {t.text}
        </div>
      ))}
    </div>
  )
}

export default UseReducer 