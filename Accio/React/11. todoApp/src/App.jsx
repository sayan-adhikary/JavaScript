import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    // s.trim()
    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    // let newTodo = [...todo];
    // newTodo.push(newTask);
    // setTodo(newTodo);

    setTodo([...todo, newTask]);

    console.log("todo", todo);
    setTask("");
  }

  function toggleTodo(id) {
    // todolist
    // for loop => complete => true/false
    const newTodo = todo.map((work) => {
      if (work.id === id) {
        return { ...work, completed: !work.completed };
      }
      return work;
    });

    setTodo(newTodo);
  }

  function deleteTodo(id) {
    const newTodo = todo.filter((work) => {
      return work.id !== id;
    });

    setTodo(newTodo);
  }

  return (
    <div className="container">
      <h1>📝 Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todo.map((work) => (
          <li key={work.id}>
            <span
              className={work.completed ? "completed" : ""}
              onClick={() => toggleTodo(work.id)}
            >
              {work.text}
            </span>

            <button onClick={() => deleteTodo(work.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
