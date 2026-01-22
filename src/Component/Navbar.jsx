import { LogOut } from "lucide";
import React, { useContext } from "react";
import { FaPlus, FaUserPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { CopyPlus, HousePlus, Signpost } from "lucide-react";
import { toast } from "react-toastify";
import { LiaSignOutAltSolid } from "react-icons/lia";

const Navbar = () => {
  const { user, signOutfunc, setUser, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="navbar-loading">Loading...</div>;
  }

  const handleSignOut = () => {
    signOutfunc()
      .then(() => {
        setUser(null);
        toast.success("Sign out successful");
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
        <div className="navbar-start flex items-center gap-3">
          {/* Logo */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-green-700 shadow-lg  transition-transform duration-300">
            <img
              src="/logo.png"
              alt="EcoTrack Logo"
              className="w-full h-full object-cover"
            />

            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-tr from-lime-300 to-emerald-400 rounded-full animate-bounce-slow shadow-md"></div>
          </div>

          <NavLink
            to="/"
            className="text-2xl font-extrabold bg-clip-text text-transparent 
               bg-gradient-to-r from-green-600 via-lime-400 to-emerald-500
               transition-transform duration-300 drop-shadow-lg"
          >
            EcoTrack
          </NavLink>
        </div>

        {/* center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px- gap-3">
            <div className="border-2 border-gray-100">
              <li>
                <NavLink to="/" className={linkClass}>
                  <HousePlus className="w-4 h-4" />
                  Home
                </NavLink>
              </li>
            </div>
            <div className="border-2 border-gray-100">
              <li>
                <NavLink to="/challenges" className={linkClass}>
                  <Signpost className="w-4 h-4" />
                  Challenges
                </NavLink>
              </li>
            </div>

            {user ? (
              <div className="border-2 border-gray-100">
                <li>
                  <NavLink to="/add-activities" className={linkClass}>
                    <CopyPlus className="w-4 h-4" />
                    Add Challenges
                  </NavLink>
                </li>
              </div>
            ) : null}
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
                  <img src={user.photoURL || "/logo.png"} alt="user" />
                </div>
              </label>

              {/* Profile Dropdown*/}
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
                  <Link to="/my-activities" className={linkClass}>
                    <CopyPlus className="w-4 h-4" />
                    My Activities
                  </Link>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center justify-center gap-1 px-4 py-1 border-2 border-green-700 text-green-700 font-semibold rounded-sm transition-colors duration-300"
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
                `group flex items-center gap-1 px-4 py-1 border-2 border-green-700 text-green-700 font-semibold rounded-sm transition-colors duration-300
     ${isActive ? "bg-green-700 text-white" : "hover:bg-green-50"}`
              }
            >
              Login
              <FaPlus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
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
              {user ? (
                <li>
                  <NavLink to="/my-activities" className={linkClass}>
                    Add Challenges
                  </NavLink>
                </li>
              ) : null}

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
                        <img src={user.photoURL || "/logo.png"} alt="user" />
                      </div>
                    </label>

                    {/*Profile Dropdown */}
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
                        <Link to="/my-activities" className={linkClass}>
                          <CopyPlus className="w-4 h-4" />
                          My Activities
                        </Link>
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
