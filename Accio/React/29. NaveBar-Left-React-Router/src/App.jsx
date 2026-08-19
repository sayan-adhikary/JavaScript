import { useState } from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        fuck my ass {count}
      </button>
      <Home></Home>
      <Login></Login>
      <Profile></Profile>
    </>
  );
}

export default App;
