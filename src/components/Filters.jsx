import React from 'react';

function Filters() {
  return (
    <ul className="flex justify-around mt-4  sm:mt-0  sm:max-w-xs mx-auto text-sm py-3 px-20 items-center text-darkGrayishBlue sm:bg-transparent  bg-white border shadow-xl sm:shadow-none sm:-left-4 sm:border-0 sm:relative sm:-top-12 shadow-slate-200 rounded-md sm:px-16 ">
      <li className="font-bold hover:text-brightBlue cursor-pointer">All</li>
      <li className="font-bold hover:text-brightBlue cursor-pointer">Active</li>
      <li className="font-bold hover:text-brightBlue cursor-pointer">
        Completed
      </li>
    </ul>
  );
}

export default Filters;
