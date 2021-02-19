import logo from "./logo.svg";
import "./App.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  function add(newTodo) {
    dispatch({ type: "ADD", todo: newTodo });
  }

  function remove(id) {
    dispatch({ type: "REMOVE", id });
  }
  return (
    <div>
      <NewTodoForm addTodo={add} />
      <TodoList todos={todos} removeTodo={remove} />
    </div>
  );
}

export default App;
