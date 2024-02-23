import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-8 py-4 flex justify-between items-center border-b-2 fixed w-full top-0 bg-white z-10">
      {/* logo */}
      <div>
        <h1 className="lg:text-2xl text-xl font-bold text-slate-950 font-montserrat">
          TN Treasures
        </h1>
      </div>
      <nav className="sm:flex gap-10 font-montserrat font-semibold items-center text-slate-950  hidden">
        {/* <NavLink className=" text-lg" to="/">
          Home
        </NavLink> */}
        <NavLink className="  text-lg" to="/">
          Destinations
        </NavLink>
        <NavLink className=" text-lg" to="/contribute">
          Contribute
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
