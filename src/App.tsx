import { useState } from "react"
// import UseStateExample from "./components/useStateExample"
import TypeExample from "./components/TypeExample"

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <TypeExample counter={counter} setCounter={setCounter}/>
    </div>
  )
}

export default App