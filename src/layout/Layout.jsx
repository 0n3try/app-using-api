import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="container pd-4 bg-gray-950 min-h-screen text-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
