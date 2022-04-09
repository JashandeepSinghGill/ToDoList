import React, { useState } from "react";

function TodoForm(props) {
  //state variable for input
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //function to handle change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //updating the props on the submission of the form
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
          <br />
          <br />
        </>
      )}
    </form>
  );
}

export default TodoForm;
