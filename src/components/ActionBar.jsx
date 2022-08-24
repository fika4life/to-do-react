// TODO - add function to clear completed

export default function ActionBar({ nrItems }) {
  return (
    <div className="flex justify-between py-4 px-6  items-center text-veryDarkGrayishBlue  bg-white border shadow-xl shadow-slate-200 rounded-b-md ">
      <p className="text-darkGrayishBlue text-sm ">{nrItems} items left</p>
      <button className="text-darkGrayishBlue text-sm">Clear completed</button>
    </div>
  );
}
