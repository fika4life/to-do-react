function TodoList({ todoItems }) {
  //TODO - refactor to include todoitem component
  return (
    <div>
      {todoItems.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  );
}

export default TodoList;
