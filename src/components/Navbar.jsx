import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-white bg-black  py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Navi Mumbai Run Club</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-gray-300">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
