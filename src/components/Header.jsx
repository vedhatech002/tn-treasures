import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sm:px-8 px-4 py-4 flex justify-between items-center border-b-2 fixed w-full top-0 bg-white z-10">
      {/* logo */}
      <div>
        <h1 className="lg:text-2xl sm:text-xl text-lg  font-bold text-slate-950 font-montserrat">
          TN Treasures
        </h1>
      </div>
      <nav className="flex md:gap-10 !gap-4 font-montserrat font-semibold items-center text-slate-950  ">
        {/* <NavLink className=" text-lg" to="/">
          Home
        </NavLink> */}
        <NavLink className="  md:text-lg text-sm" to="/">
          Destinations
        </NavLink>
        <NavLink className=" md:text-lg text-sm" to="/contribute">
          Contribute
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
