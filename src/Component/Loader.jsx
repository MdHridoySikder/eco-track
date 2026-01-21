import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="w-20 h-20 border-4 border-green-300 border-t-green-600 rounded-full animate-spin mb-4"></div>

      <p className="text-green-700 font-bold text-lg animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
