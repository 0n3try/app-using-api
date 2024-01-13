import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-transparent flex justify-between">
      <NavLink
        to="/"
        className="bg-cyan-500 rounded-md p-2 hover:bg-cyan-700 transition"
      >
        Home
      </NavLink>
      <NavLink
        to="/characters"
        className="bg-cyan-500 rounded-md p-2 hover:bg-cyan-700 transition"
      >
        Characters
      </NavLink>
      <NavLink
        to="episodes"
        className="bg-cyan-500 rounded-md p-2 hover:bg-cyan-700 transition"
      >
        Episodes
      </NavLink>
    </nav>
  );
};

export default Navbar;
