import React from "react";

const Challenges = () => {
  return (
    <div
      className="bg-gradient-to-br from-green-100 
    via-white to-green-100"
    >
      {/* Headeer and (p) */}
      <div className=" items-center text-center ">
        <h2 className="text-3xl font-extrabold text-green-800 mt-3">
          Active Challenges
        </h2>

        <p className="text-gray-700 mx-25 mb-8">
          EcoTrack’s Active Challenges are designed to inspire meaningful action
          through simple, everyday habits. Each ongoing challenge focuses on
          reducing carbon emissions, cutting down plastic waste, and promoting
          sustainable living. Choose a challenge that fits your lifestyle, track
          your impact in real time, and join a growing community working
          together to build a cleaner, greener future.
        </p>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Card 1 */}
        <div className="relative bg-gradient-to-br from-green-400 to-emerald-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img
            src="/logo1.png"
            alt="Reduce Plastic Waste"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg text-green-900 mb-1">
              Reduce Plastic Waste
            </h3>
            <p className="text-sm text-green-700 mb-2">Plastic</p>
            <p className="text-green-800 font-semibold text-sm">
              Save 5kg plastic/week
            </p>
            {/* Future metric badge */}
            <span className="inline-block mt-2 px-2 py-1 bg-green-800 text-white text-xs rounded-full">
              12 participants
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
