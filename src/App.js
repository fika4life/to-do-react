import './App.css';
import todoList from './data/data';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ActionBar from './components/ActionBar';
import Header from './components/Header';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoItems, setTodoItems] = useState(todoList);

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();

    setTodoItems([newTodo, ...todoItems]);
    console.log(todoItems);
  };

  // TODO - add image background
  return (
    <div
      className="App bg-[url('../assets/images/bg-desktop-light.jpg
    ')] no-repeat bg-cover "
    >
      <div className="container max-w-lg mx-auto mt-12">
        <Header></Header>
        <TodoInput addTodo={addTodo} />
        <TodoList todoItems={todoItems} />
        <ActionBar className="relative" />
        <p className="max-w-sm mx-auto text-center mt-10 text-darkGrayishBlue text-sm">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}

export default App;
