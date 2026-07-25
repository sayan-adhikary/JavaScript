import { useState } from "react";
import Card from "./Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const isLoggedIn = true;
  const address = { city: "Pune" };

  const hasError = false;
  if (hasError) {
    return (
      <>
        <h1>502 Error</h1>
      </>
    );
  }

  const fruits = ["apple", "mango", "watermelon", "banana"];

  function handleClick(name, e) {
    console.log("e", e.target);
    console.log("Button Clicked by", name);
  }

  function printOnConsole(e) {
    console.log("Printing", e.target);
    setCount((previousCount) => previousCount + 1);
  }

  function handleInput(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>Typed text: {name}</h1>
      <h2>Button clicks: {count}</h2>

      <button
        onClick={(e) => handleClick("Azmat", e)}
      >
        Click Me to print
      </button>

      <input type="text" value={name} onChange={handleInput} />

      <button
        onClick={(e) => {
          handleClick("Azmat", e);
        }}
      >
        Click Me
      </button>

      <button
        onClick={(e) => {
          console.log("Butn 2nd clicked", e.target);
        }}
      >
        {" "}
        2nd Button{" "}
      </button>

      <button
        onClick={(e) => {
          printOnConsole(e);
        }}
      >
        3rd Button
      </button>

      <h1>Learning React Rendering</h1>
      {isLoggedIn ? (
        <Card name="Azmat" age={22} address={address} />
      ) : (
        <button>Login/SignUP</button>
      )}
      {name.length > 0 && (
        <p>
          You typed: {name}
        </p>
      )}

      <ol>
        {fruits.map((fruit, idx) => (
          <li key={idx}>{fruit}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
