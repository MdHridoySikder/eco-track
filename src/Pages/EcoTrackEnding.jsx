import React from "react";

const EcoTrackEnding = () => {
  return (
    <div className="relative     bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 overflow-hidden flex items-center justify-center px-6 py-10">
      {/* Floating circles */}
      <div className="absolute -top-16 -left-20 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-lime-200/15 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Ending Headline */}
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-6
                       bg-gradient-to-r from-emerald-600 via-green-500 to-lime-600
                       bg-clip-text text-transparent drop-shadow-2xl"
        >
          Join the EcoTrack Movement
        </h2>

        {/* Subheading */}
        <p className="text-green-800/90 text-lg md:text-xl leading-relaxed mb-10">
          Be part of a community that takes **real action for a greener
          planet**. Track your impact, join eco-challenges, and share
          sustainable tips with others.
          <span className="block mt-4 font-semibold text-emerald-700">
            Together, we make small actions lead to big change 🌍
          </span>
        </p>

        {/* Decorative Gradient Divider */}
        <div
          className="mx-auto mb-10 w-100 h-1 rounded-full
                        bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 shadow-lg"
        ></div>
      </div>
    </div>
  );
};

export default EcoTrackEnding;
