import { useState } from 'react';

export default function TodoInput() {
  const [textInput, setTextInput] = useState('');
  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };

  return (
    // TODO - add ability to add toditem
    <form className="mb-4">
      <input
        onChange={handleTextInput}
        type="text"
        value={textInput}
        placeholder="Create a new todo"
        className="text-lg bg-white border border-veryLightGrayishBlue text-gray-900  rounded-md focus:ring-0 focus:no-outline block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        shadow-lg shadow-slate-100 "
      />
    </form>
  );
}
