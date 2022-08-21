import ToDoItem from './ToDoItem';
function TodoList({ todoItems, handleDelete }) {
  return (
    <ul className="border border-b-0 rounded-t-md bg-white divide-y divide-slate-200">
      {todoItems.length !== 0 ? (
        todoItems.map((item) => (
          <ToDoItem key={item.id} item={item} handleDelete={handleDelete} />
        ))
      ) : (
        <li className="py-4 px-4 flex items-center text-amber-800 text-lg text-center">
          No items to show. Add items above.
        </li>
      )}
    </ul>
  );
}

export default TodoList;
