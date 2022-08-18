import ToDoItem from "./ToDoItem";
function TodoList({ todoItems }) {
  //TODO - refactor to include todoitem component
  return (
    <div>
      {todoItems.map((item) => (
        <ToDoItem key={item.id} item={item}></ToDoItem>
      ))}
    </div>
  );
}

export default TodoList;
