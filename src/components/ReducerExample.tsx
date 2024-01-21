import { useReducer, useState } from "react";

const initialState = {
  count: 0,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: currentState.count + 1,
      };
    case "decrement":
      return {
        count: currentState.count - 1,
      };

    default:
      return currentState;
  }
};

const ReducerExample = () => {
  // const [state, setState] = useState(inititiaState)
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>
    <h1>{state.count}</h1>
    <button onClick={() => dispatch({type: "increment"})}>Increment</button>
    <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
  </div>;
};

export default ReducerExample;

// aita onk powerfull ekta concept 