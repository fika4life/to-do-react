// TODO - style checkboxes
// TODO - add styles to crossed out items
// TODO - add x button on hover
// TODO - add ability to delete items
function ToDoItem({ item }) {
  return (
    <li className="py-4 px-4 flex items-center text-veryDarkGrayishBlue text-lg ">
      <input
        id="gradient-checkbox"
        type="checkbox"
        className="mr-2 rounded-full  active:ring-0 active:outline-none focus:ring-0 focus:outline-none  scale-125 border-veryLightGrayishBlue "
      />
      {item.text}
    </li>
  );
}

export default ToDoItem;
