function Header() {
  return (
    <div className="flex justify-between ">
      <h1 className="uppercase text-4xl tracking-widest mb-8 text-white">
        Todo
      </h1>
      <img
        src="../assets/images/icon-moon.svg"
        alt=""
        className="w-[20px] h-[20px] "
      />
    </div>
  );
}

export default Header;
