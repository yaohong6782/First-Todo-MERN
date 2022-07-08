import React, { useState, useEffect } from "react";
import axios from "axios";
import Items from "../Items/Items";

import "./Todo.css";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");

  const addUpdate = (_id) => {
    if (isUpdating === "") {
      //   axios
      //     .post("http://localhost:5000/api/todo/save-todo", {text})
      //     .then((res) => console.log(res), setText(""))
      //     .catch((err) => console.log(err));

      // }
      fetch("http://localhost:5000/api/todo/save-todo", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ text: text }), // SCHEMA CORRELATION
      })
        .then((res) => res.json())
        .then((data) => setTodo(data), setText(""))
        .catch((err) => console.log(err));
    }
  };

  const deleteToDo = (_id) => {
    fetch("http://localhost:5000/api/todo/delete-todo", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ text: text }),
    })
      .then((res) => res.json())
      .then((data) => setTodo(data=""), setText(""))
      .catch((err) => console.log(err));
  };

  const updateToDo = (_id, text) => {};

  useEffect(() => {
    fetch("http://localhost:5000/api/todo/get-todo")
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => console.log(err));
  }, [todo]);

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="top">
        <input
          type="text"
          placeholder="Write your To-do"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="add" onClick={addUpdate}>
          Add
        </div>
      </div>

      <div className="list">
        {!todo?.length ? (
          <h1>Empty </h1>
        ) : (
          todo.map((item) => (
            <Items
              key={item._id}
              text={item.text}
              remove={() => deleteToDo(item._id)}
              update={() => updateToDo(item._id, item.text)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
