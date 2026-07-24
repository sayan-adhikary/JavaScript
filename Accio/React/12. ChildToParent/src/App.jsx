import { useState } from 'react'
import Child from './Child.jsx'

function App() {

  const [msg, setMsg] = useState("");

  function recieveMessage(childMessage){
    // operation associated with parent component
    setMsg(childMessage); 
  }

  return (
    <>
    <Child fn = {recieveMessage}/>
    <h2>{msg}</h2>
    </>
  )
}

export default App
