import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1); // 0+1
    console.log("1", count);
    setCount(count + 1); // 0+1
    console.log("2", count);
    setCount(count + 1); // 0+1
    console.log("3", count);

    setCount((prev) => {
      // prev => latest state
      return prev + 1;
    });
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
    </>
  );
}

export default App;
