import { useState, useEffect } from "react";
// import Chat from "./Chat.jsx";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count changed: ${count}`);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default App;
