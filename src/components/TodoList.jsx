function TodoList({ todoItems }) {
  //TODO - refactor to include todoitem component
  return (
    <div>
      <ul className="shadow-lg shadow-slate-100">
        {todoItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
