import React from "react";
import { Link, useLoaderData } from "react-router";
import ChallengeCards from "./ChallengeCards";

const Challenges = () => {
  const data = useLoaderData();

  return (
    <div className="bg-gradient-to-br from-green-100 via-white to-green-100 py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12 px-4 md:px-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 relative inline-block">
          Active Challenges
          {/* subtle underline / highlight effect */}
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 rounded-full opacity-50"></span>
        </h2>

        <p className="text-gray-900 dark:text-gray-900 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
          EcoTrack’s{" "}
          <span className="font-semibold text-green-700">
            Active Challenges
          </span>{" "}
          are designed to inspire meaningful action through simple, everyday
          habits. Each ongoing challenge focuses on
          <span className="text-emerald-600 font-medium">
            {" "}
            reducing carbon emissions
          </span>
          ,
          <span className="text-green-700 font-medium">
            {" "}
            cutting down plastic waste
          </span>
          , and
          <span className="text-lime-500 font-medium">
            {" "}
            promoting sustainable living
          </span>
          . Choose a challenge that fits your lifestyle, track your impact in
          real time, and join a growing community working together to build a
          cleaner, greener future.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((challenges) => (
          <ChallengeCards key={challenges._id} challenges={challenges} />
        ))}
      </div>
    </div>
  );
};

export default Challenges;
