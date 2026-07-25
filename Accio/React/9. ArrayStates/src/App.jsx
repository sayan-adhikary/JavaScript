import { useState } from "react";

function App() {
  const [arr, setArr] = useState([]);
  const [sum, setSum] = useState(0);
  const [marks, setMarks] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    arr.push(marks);
    setArr([...arr]);
    setSum(sum + marks);
    setMarks("");
  }
  // setArr((currentArr) => [...currentArr, marks]);
  // setSum((currentSum) => currentSum + marks);

  return (
    <>
      <h1>Learning to handle arrays in React</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Marks"
          value={marks}
          type="number"
          onChange={(e) => setMarks(Number(e.target.value))}
        />
        <button>Add Marks</button>
      </form>

      <ul>
        {arr.map((score, index) => {
          return <li key={index}>{score}</li>;
        })}
      </ul>
      <h2>Sum : {sum}</h2>
    </>
  );
}

export default App;
