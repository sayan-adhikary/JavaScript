import { useState } from "react";
import Card from "./Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  const [name2, setname] = useState("");

  const isLoggedIn = true;
  const obj = {};

  let error = 0;
  if (error) {
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
    setCount(count + 1);
  }

  let name = "";

  function handleInput(e) {
    name = e.target.value;
    setname(e.target.value);
  }

  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={(e) => {
          handleClick("Azmat", e);
        }}
      >
        Click Me to print
      </button>

      <input type="text" onChange={handleInput} />

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
        <Card name="Azmat" age={22} add={45} />
      ) : (
        <button>Login/SignUP</button>
      )}
      {obj && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          ea!
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
