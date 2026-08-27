import React from 'react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleDecrease() {
    if (count - step < 0) {
      setCount(0);
    } else {
      setCount(count - step);
    }
  }

  return (
    <>
      <div
        style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}
      >
        <h1>Counter Dashboard</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount((prev) => prev + step)}>
          increase
        </button>
        <button onClick={handleDecrease} disabled={count < 0}>
          decrease
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
    </>
  );
}

export default App;
