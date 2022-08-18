import './App.css';
import todoList from './data/data';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ActionBar from './components/ActionBar';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState(todoList);

  return (
    <div className="App ">
      <div className="container max-w-lg mx-auto mt-12">
        <Header></Header>
        <TodoInput />
        <TodoList todoItems={todoItems} />
        <ActionBar />
      </div>
    </div>
  );
}

export default App;
