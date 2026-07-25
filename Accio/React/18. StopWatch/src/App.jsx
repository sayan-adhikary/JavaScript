import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setCount((previousCount) => previousCount + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setCount(0);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <>
      <div>
        <h3>Time:{count}</h3>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </>
  );
}

export default App;