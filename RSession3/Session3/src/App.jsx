import React, { useMemo, useReducer, useState } from 'react'
import Header from './Header/Header'
import Cards from './Cards/Cards'

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     default:
//       throw new Error();
//   }
// }

export default function App() {
    // const [state, dispatch] = useReducer(reducer, 0)
  return (
    // <>
    //   <div className="div">
    //   count: {state}
    //   </div>
    //   <button onClick={() => {dispatch({type:'increment'})}}>+</button>
    //   <button onClick={() => {dispatch({type:'decrement'})}}>-</button>
    // </>

    <div className='p-30'>
      <Header/>
      <Cards/>
    </div>
  )
}
