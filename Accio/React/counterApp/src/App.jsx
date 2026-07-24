import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function set() {
    setCount(Number(input));
  }

  function increasing() {
    setCount(count + 1);
  }

  function decreasing() {
    setCount(count - 1);
  }

  function reset() {
    setCount(input);
  }

  return (
    <>
      <h1>{count}</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={set}>Set</button>
      <button onClick={increasing}>Increment</button>
      <button onClick={decreasing}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
