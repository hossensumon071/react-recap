// import { useState } from "react"


const UseStateExample = () => {

    // const [counter, setCounter] = useState<number>(0)
    // const [counter, setCounter] = useState(0)

    // console.log("render")

    // const handleIncrement = () => {
    //     setCounter(counter + 1)
    //     setCounter(counter + 1)
    //     setCounter(counter + 1)

    //     // setCounter((prevState) => prevState + 1)

    //     // eikahne se immediate je state ache aita se pacche na 
    // }
    // // react er kache jokon state change korar jonno request kori react immideatly sei ta execute kore na. react aita ke scecdule kore rake .scudelue kore reke oi component theke jei koita update asar kotah sei gula ke eskahe kore then update kore and aita ke amra boli batch update. mane component er modde ekdhik state request hole se sei state gual ke ekjiagai kore batch kore update kroar try kore  and aita te tar optimization performance pore 


    // const handleAsyncIncrement = () => {
    //     setTimeout(() => {
    //         setCounter(counter + 1)
    //     }, 2000)
    // }

  return (
    <div>
        {/* <h2 className="text-2xl">{counter}</h2> */}
        {/* <button onClick={() => handleIncrement}>Increment</button> */}
        {/* <button onClick={() => setCounter((prevState) => (prevState + 1))}>Increment</button>
        <button onClick={() => setCounter(handleAsyncIncrement}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(0)}>Reset</button> */}
    </div>
  )
}

export default UseStateExample