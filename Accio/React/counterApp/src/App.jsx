import { useState } from 'react'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incrising() {
    setCount(count + 1);
  }

  function dicrising() {
    setCount(count - 1000000);
  }

  function reset(){
    setCount(0)
  }

  return (
    <>
      <h1>{count}</h1>
      <input type="text" />
      <button onClick={incrising}>inc</button>
      <button onClick={dicrising}>dic</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App
