import React from "react";

const Todo = ({ removeTodo, todo, id }) => {
  const remove = () => removeTodo(id);

  return (
    <div className="Todo" id={id}>
      <li>{todo}</li>
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Todo;
