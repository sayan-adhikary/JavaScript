import { useState } from "react";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // Set Number
  const handleSet = () => {
    if (input === "") return;
    setCount(Number(input));
  };

  // Increment
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  // Decrement
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  // Reset
  const handleReset = () => {
    setCount(input);
  };

  // Check Factor of 3
  const handleFactorOf3 = () => {
    if (count === 0) {
      alert("0 is divisible by 3.");
    } else if (count % 3 === 0) {
      alert(`${count} is a factor/multiple of 3.`);
    } else {
      alert(`${count} is NOT a factor/multiple of 3.`);
    }
  };

  return (
    <>
      <div>
        <h1>Counter App</h1>

        <h2>{count}</h2>

        <input
          type="number"
          placeholder="Enter a number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <br />
        <br />

        <button onClick={handleSet}>Set Number</button>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dic</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleFactorOf3}>Factor of 3</button>
      </div>
    </>
  );
}

export default App;
