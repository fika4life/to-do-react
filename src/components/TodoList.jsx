import ToDoItem from './ToDoItem';
function TodoList({ todoItems }) {
  return (
    <ul className="border border-b-0 rounded-md bg-white shadow-xl shadow-slate-200 divide-y divide-slate-200">
      {todoItems.map((item) => (
        <ToDoItem key={item.id} item={item}>
          {item.text}
        </ToDoItem>
      ))}
    </ul>
  );
}

export default TodoList;
