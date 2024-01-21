import {Dispatch} from "react";

type TCounter = {
    counter: number,
    setCounter: Dispatch<React.SetStateAction<number>>
}

const TypeExample = ({counter, setCounter} : TCounter) => {
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>click</button>
    </div>
  )
}

export default TypeExample