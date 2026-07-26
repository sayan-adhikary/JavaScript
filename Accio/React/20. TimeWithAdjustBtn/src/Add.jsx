import React, { useEffect, useState } from "react";

function add() {
  const [count, setCount] = useState(0);
  const [running, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCount(count++);
    }, 1000);
  }, [running]);

  return (
    <>
      <div>count:{count}</div>
      <button onClick={setIsRunning(!running)}>Start </button>
      <button>Reset </button>
      <button>Adjust </button>
    </>
  );
}

export default add;
