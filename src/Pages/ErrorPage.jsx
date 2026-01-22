import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/7042926/pexels-photo-7042926.jpeg?auto=compress&cs=tinysrgb&w=1600')`,

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 text-center max-w-lg px-6 py-10 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl">
        {/* 404 Number */}
        <div className="relative mb-6">
          <h1 className="text-8xl md:text-[10rem] font-extrabold text-emerald-600/30 drop-shadow-lg">
            404
          </h1>
        </div>

        {/* Main Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/Home"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <FaHome className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      <div className="absolute top-10 left-10 w-24 h-24 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default ErrorPage;
