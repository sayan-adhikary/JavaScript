import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showAdjust, setShowAdjust] = useState(false);
  const [adjustValue, setAdjustValue] = useState("");

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  function handleStart() {
    setIsRunning((r) => !r);
  }

  function handleReset() {
    setIsRunning(false);
    setCount(0);
  }

  function handleAdjust() {
    setShowAdjust((s) => !s);
  }

  function applyAdjust(e) {
    e.preventDefault();
    const val = parseInt(adjustValue, 10);
    if (!Number.isNaN(val) && val >= 0) {
      setCount(val);
      setIsRunning(true);
      setShowAdjust(false);
      setAdjustValue("");
    } else {
      alert("Please enter a valid non-negative number");
    }
  }

  return (
    <>
      <div
        style={{ backgroundColor: "blue", fontSize: "16px", color: "white" }}
      >
        Stop watch: {count}
      </div>
      <button onClick={handleStart}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdjust}>{showAdjust ? "Cancel" : "Adjust"}</button>

      {showAdjust && (
        <form onSubmit={applyAdjust} style={{ marginTop: "8px" }}>
          <input
            type="number"
            min="0"
            value={adjustValue}
            onChange={(e) => setAdjustValue(e.target.value)}
            placeholder="Start time in seconds"
          />
          <button type="submit">Apply</button>
        </form>
      )}
    </>
  );
}

export default App;
