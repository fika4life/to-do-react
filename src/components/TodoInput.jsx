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
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </form>
  );
}
