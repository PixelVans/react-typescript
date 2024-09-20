import { useReducer } from "react";

const initialState = { count: 0 }
type CounterState = {
    count: number
}
type ActionState = {
    payload: number,
    type: string
}
function reducer(state:CounterState, action:ActionState){
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}



export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
          <div>
          Count: {state.count}
          <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
              Increment 10
          </button>
          <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
              Derement 10
          </button>
         </div>
  )
}

