import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{task: "Sample Task", id:uuidv4()}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, {task: newTodo, id: uuidv4}]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
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
          return <li key={todo.id}>{todo.task}</li>;
        })}
      </ul>
    </div>
  );
}
