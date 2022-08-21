// TODO - style checkboxes
// TODO - add styles to crossed out items
// TODO - add x button on hover
// TODO - add ability to delete items

import { Fragment } from 'react';
import CrossIcon from '../assets/images/icon-cross.svg';
function ToDoItem({ item }) {
  return (
    <Fragment>
      <li className="py-4 px-4 flex items-center text-veryDarkGrayishBlue text-lg relative group hover:cursor-pointer ">
        <input
          id="gradient-checkbox"
          type="checkbox"
          className="mr-4 rounded-full  active:ring-0 active:outline-none focus:ring-0 focus:outline-none  scale-125 border-veryLightGrayishBlue  hover:cursor-pointer"
        />
        {item.text}
        <img
          src={CrossIcon}
          alt=""
          className="w-[18px] h-[18px] absolute right-8  hidden group-hover:inline-block  "
        />
      </li>
    </Fragment>
  );
}

export default ToDoItem;
