import { useState, useEffect } from "react";

function Todo() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = () => {
    if (!task) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
      },
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((item) => item.id !== id)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>

      <input
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />

      <button onClick={addTask}>
        Add
      </button>

      {tasks.map((item) => (
        <div key={item.id}>
          {item.text}

          <button
            onClick={() =>
              deleteTask(item.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;