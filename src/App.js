import "./App.css";
import todoList from "./data/data";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ActionBar from "./components/ActionBar";
import Header from "./components/Header";
import Filters from "./components/Filters";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// TODO - add dark styles
// TODO - add toggle capability

function App() {
  const [todoItems, setTodoItems] = useState(todoList);

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();

    setTodoItems([newTodo, ...todoItems]);
    console.log(todoItems);
  };

  const deleteTodo = (id) => {
    const remainingTodos = todoItems.filter((item) => item.id !== id);

    setTodoItems(remainingTodos);
  };

  const uncompletedItems = todoItems.filter((item) => item.completed !== true);

  return (
    <div className="App ">
      <div className="bg-hero-image no-repeat bg-cover  w-screen h-72 absolute top-0 left-0 -z-50"></div>
      <div className="container sm:max-w-lg max-w-sm mx-auto mt-16">
        <Header></Header>
        <TodoInput addTodo={addTodo} />
        <TodoList todoItems={todoItems} handleDelete={deleteTodo} />
        <ActionBar nrItems={uncompletedItems.length} />
        <Filters></Filters>
        <p className="max-w-sm mx-auto text-center mt-12 sm:mt-4  text-darkGrayishBlue text-sm">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}

export default App;
