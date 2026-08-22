import { React, useRef, useState } from "react";

function App() {
  const value = useRef(null);
  const [input, setInput] = useState(0);

  function handleClick(){
    value++;
    setInput++
  }

  return (
    <>
      <div>Page</div>
      <input type="text" />
      <div>{value}</div>
      <div>{input}</div>
      <button onClick={handleClick}>focus</button>
    </>
  );
}

export default App;
