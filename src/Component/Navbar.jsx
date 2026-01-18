import { UserPlus } from "lucide";
import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-green-600"
      : "text-gray-700 hover:text-green-500 transition-colors";

  return (
    <div className="navbar  shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="navbar-start flex items-center gap-1">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/logo.png"
              alt="EcoTrack Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logo Text */}
          <NavLink to="/" className="text-2xl font-bold text-green-700">
            EcoTrack
          </NavLink>
        </div>
        {/* center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px- gap-3">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/challenges" className={linkClass}>
                Challenges
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-activities" className={linkClass}>
                My Activities
              </NavLink>
            </li>
          </ul>
        </div>

        {/*Login Button */}
        <div className="navbar-end hidden lg:flex">
          <NavLink
            to="/login"
            className="btn btn-sm btn-success text-white hover:bg-green-700 transition-colors"
          >
            <FaUserPlus /> Login
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/home" className={linkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/challenges" className={linkClass}>
                  Challenges
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-activities" className={linkClass}>
                  My Activities
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="btn btn-sm btn-success text-white w-full mt-2 flex items-center gap-2"
                >
                  <FaUserPlus /> Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
