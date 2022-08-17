import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ActionBar from "./components/ActionBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App ">
      <div className="container max-w-lg mx-auto mt-12">
        <Header></Header>
        <TodoInput />
        <TodoList />
        <ActionBar />
      </div>
    </div>
  );
}

export default App;
