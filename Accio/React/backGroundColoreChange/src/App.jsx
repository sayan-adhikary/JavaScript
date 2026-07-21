import { useState } from "react";

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function red() {}

  function green() {}

  function yellow() {}

  return (
    <>
      <button onClick={red}>Red </button>
      <button onClick={green}>green</button>
      <button onClick={yellow}>yellow</button>
    </>
  );
}

export default App;
