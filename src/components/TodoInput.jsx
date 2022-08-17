export default function TodoInput() {
  return (
    <form className="mb-4">
      <input
        type="text"
        value=""
        placeholder="Create a new todo"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </form>
  );
}
