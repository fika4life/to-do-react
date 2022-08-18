import ToDoItem from './ToDoItem';
function TodoList({ todoItems }) {
  return (
    <ul className="border border-b-0 rounded-md bg-white shadow-lg shadow-slate-100 divide-y divide-slate-200">
      {todoItems.map((item) => (
        <ToDoItem key={item.id} item={item}>
          {item.text}
        </ToDoItem>
      ))}
    </ul>
  );
}

export default TodoList;
