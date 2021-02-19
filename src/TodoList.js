import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo }) => {
  if (todos.length > 0) {
    return (
      <div className="TodosList">
        <ul>
          {todos.map((t) => (
            <Todo
              removeTodo={() => removeTodo(t.id)}
              key={t.id}
              todo={t.item}
            />
          ))}
        </ul>
      </div>
    );
  }
  return <div></div>;
};

export default TodoList;
