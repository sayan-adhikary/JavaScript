import { useState } from 'react'
import ChildA from './ChildA.jsx'
import ChildB from './ChildB.jsx'
import Button from './Button.jsx'
import Input from './Input.jsx'
import Display from './Display.jsx'

function App() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState("");

  function print(){
    console.log("Hello World");
  }

  return (
    <>
    {/* <ChildA val = {count} fn = {print}></ChildA> */}
    {/* <ChildB val = {count} fn = {print}></ChildB> */}
    {/* <Button fn = {setCount}></Button> */}

    {/* <Input></Input> or <Input /> */}
    
    <Input val = {name} fn = {setName}/>
    <Display val = {name} />


    </>
  )
}

export default App
