import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const RootLayOut = () => {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("firstLoadDone");
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("firstLoadDone", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="flex-grow relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-gray-900/70 z-50">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-30 h-30 rounded-full overflow-hidden border-2 border-green-700 animate-spin-slow shadow-lg">
                  <img
                    src="/logo.png"
                    alt="EcoTrack Logo"
                    className="w-full h-full object-cover animate-ping"
                  />
                </div>
              </div>
              <p className="text-green-800 dark:text-green-300 font-bold text-4xl animate-pulse">
                Loading EcoTrack...
              </p>
            </div>
          </div>
        )}

        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayOut;
