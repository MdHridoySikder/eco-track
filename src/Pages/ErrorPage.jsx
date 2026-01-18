import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 
    via-emerald-50 to-green-100 p-6"
    >
      <div className="text-center max-w-lg">
        {/* 404 Number with Leaf */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-extrabold text-emerald-600/20 drop-shadow-lg">
            404
          </h1>

          {/* Big Leaf Overlay */}
        </div>
        {/* Main Message */}
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Oops! The page you're looking for does not exist.
        </p>
        {/* Back to Home Button */}
        <Link
          to="/Home"
          className="flex justify-center items-center gap-2 px-4 py-2 border-2 border-green-700 text-green-700 font-semibold rounded-sm hover:bg-green-50 transition-colors duration-300 "
        >
          Back to home
          <FaPlus className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
