import MoonIcon from '../assets/images/icon-moon.svg';

function Header() {
  return (
    <div className="flex justify-between ">
      <h1 className="uppercase text-5xl tracking-widest mb-8 text-white">
        Todo
      </h1>
      <img src={MoonIcon} alt="" className="w-[30px] h-[30px] " />
    </div>
  );
}

export default Header;
