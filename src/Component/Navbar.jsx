import { UserPlus } from "lucide";
import React, { useContext } from "react";
import { FaPlus, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, signOutfunc, setUser, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="navbar-loading">Loading...</div>;
  }

  const handleSignOut = () => {
    signOutfunc()
      .then(() => {
        setUser(null);
        alert("Sign out successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-green-600"
      : "text-gray-700 hover:text-green-500 transition-colors";

  return (
    <div className="navbar  shadow-md sticky top-0 z-50">
      <div
        className="bg-gradient-to-br from-green-100 
    via-white to-green-100 container mx-auto px-4 flex items-center justify-between"
      >
        {/* Left: Logo */}
        <div className="navbar-start flex items-center gap-1">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-700">
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
        {/* Right */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              {/* Avatar */}
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL || "https://i.ibb.co/2kR7N9K/user.png"}
                    alt="user"
                  />
                </div>
              </label>

              {/* Dropdown */}
              <ul
                tabIndex={0}
                className="mt-3 p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="pointer-events-none">
                  <p className="font-semibold">
                    {user.displayName || "No Name"}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button onClick={handleSignOut} className="text-red-500">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                `flex items-center gap-1 px-4 py-1 border-2 border-green-700 text-green-700 font-semibold rounded-sm transition-colors duration-300
        ${isActive ? "bg-green-700 text-white" : "hover:bg-green-50"}`
              }
            >
              Login
              <FaPlus className="w-4 h-4" />
            </NavLink>
          )}
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

              {/* Right */}
              <div className="navbar-end">
                {user ? (
                  <div className="dropdown dropdown-end">
                    {/* Avatar */}
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          src={
                            user.photoURL || "https://i.ibb.co/2kR7N9K/user.png"
                          }
                          alt="user"
                        />
                      </div>
                    </label>

                    {/* Dropdown */}
                    <ul
                      tabIndex={0}
                      className="mt-3 p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li className="pointer-events-none">
                        <p className="font-semibold">
                          {user.displayName || "No Name"}
                        </p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </li>
                      <div className="divider my-1"></div>
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="text-red-500"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    to="/Login"
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-4 py-1 border-2 border-green-700 text-green-700 font-semibold rounded-sm transition-colors duration-300
        ${isActive ? "bg-green-700 text-white" : "hover:bg-green-50"}`
                    }
                  >
                    Login
                    <FaPlus className="w-4 h-4" />
                  </NavLink>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
