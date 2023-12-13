import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["Sample Task"]);
  let [newTodo, setNewTodos] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodos("");
  };

  let updateTodoValue = (event) => {
    setNewTodos(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
