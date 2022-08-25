import MoonIcon from "../assets/images/icon-moon.svg";

function Header() {
  const handleClick = (e) => {
    let mode = e.target.classList[0];
    console.log(mode);
  };
  return (
    <div className="flex justify-between ">
      <h1 className="uppercase text-5xl tracking-widest mb-8  text-white">
        Todo
      </h1>
      <img
        src={MoonIcon}
        alt=""
        className="light w-[30px] h-[30px] cursor-pointer "
        onClick={handleClick}
      />
    </div>
  );
}

export default Header;
