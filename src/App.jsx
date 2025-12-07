import { useState } from "react";
import './App.css'


function App(){
  const [count, setCount] = useState(0)

  function incrementCount(){
    setCount(count => {
      return count + 1
    })
  }

  function decrementCount(){
    setCount(count => {
      if(count == 0) return 0
      return count - 1
    })
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  )
}

export default App