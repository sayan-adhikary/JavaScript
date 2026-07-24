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

          <button onClick={() => deleteTodo(work.id)}>
            ✕
          </button>
        </li>
      ))}
    </ul>
  </div>
);