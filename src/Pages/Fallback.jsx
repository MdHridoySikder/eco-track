import React from "react";

const Fallback = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-emerald-100 to-green-200">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-600 animate-spin-slow shadow-xl">
          <img
            src="/logo.png"
            alt="EcoTrack Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <h2 className="text-3xl font-extrabold text-green-800 animate-pulse">
          Loading EcoTrack...
        </h2>

        <p className="text-green-700 text-sm opacity-80">
          Preparing a greener experience 🌍
        </p>
      </div>
    </div>
  );
};

export default Fallback;
