import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" fixed z-10 flex p-4 container justify-between   ">
      <NavLink
        to="/"
        className="bg-cyan-500  rounded-md p-2 hover:bg-cyan-700 transition duration-500"
      >
        Home
      </NavLink>
      <NavLink
        to="/characters"
        className="bg-cyan-500 rounded-md p-2 hover:bg-cyan-700 transition duration-500"
      >
        Characters
      </NavLink>
      <NavLink
        to="episodes"
        className="bg-cyan-500 rounded-md p-2 hover:bg-cyan-700 transition duration-500"
      >
        Episodes
      </NavLink>
    </nav>
  );
};

export default Navbar;
