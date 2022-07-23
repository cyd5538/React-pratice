import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState([]);
  const SERVER_URL = "http://localhost:4000/api/todo";
  const fetchData = async () => {
    const response = await axios.get(SERVER_URL)
    setTodoList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, {text, done})
    fetchData();
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList?.map((todo) => (
        <div key={todo.id} style={{ display: "flex", gap: "2rem" }}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "Y" : "N"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
