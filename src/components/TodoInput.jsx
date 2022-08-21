import { useState } from 'react';

export default function TodoInput({ addTodo }) {
  const [textInput, setTextInput] = useState('');

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      text: textInput
    };
    addTodo(newTodo);

    setTextInput('');
  };

  return (
    <form className="mb-4 relative" onSubmit={handleSubmit}>
      <input
        id="gradient-checkbox"
        type="checkbox"
        className="mr-2 rounded-full  active:ring-0 active:outline-none focus:ring-0 focus:outline-none  scale-125 border-veryLightGrayishBlue relative top-10 left-4 "
        disabled
      />
      <input
        onChange={handleTextInput}
        type="text"
        value={textInput}
        placeholder="Create a new todo"
        className="text-lg bg-white border border-veryLightGrayishBlue 
        placeholder-darkGrayishBlue rounded-md  text-veryDarkGrayishBlue focus:no-outline block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:no-outline pl-12 
        "
      />
    </form>
  );
}
