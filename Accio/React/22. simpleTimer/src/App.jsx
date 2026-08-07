import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });

  function handleStart() {
    setCount((prev) => prev + 1);
  }

  function handleReset() {}

  function handleAdjust() {}

  return (
    <>
      <h1>Timer:{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdjust}>Adjust</button>
    </>
  );
}

export default App;
