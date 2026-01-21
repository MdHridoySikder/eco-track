import React, { useEffect, useState } from "react";
import ChallengeCards from "./ChallengeCards";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import ErrorPage from "./ErrorPage";
import RecentTips from "./RecentTips";

const Home = () => {
  const [homeChallenges, setHomeChallenges] = useState([]);

  fetch("http://localhost:3000/challenges/home")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch challenges");
      }
      return res.json();
    })
    .then((data) => setHomeChallenges(data))
    .catch((err) => console.error(err.message));

  return (
    <div>
      {/* Active Challenges 4cards */}
      <div className="mx-5">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 relative inline-block">
          Active Challenges
          {/* subtle underline / highlight effect */}
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 rounded-full opacity-50"></span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {homeChallenges.map((challenge) => (
            <ChallengeCards key={challenge._id} challenges={challenge} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-10">
          <Link
            to="/challenges"
            className="mt-3 inline-flex  items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-green-800 border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300"
          >
            View All Challenges
            <FaPlus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      {/*  Recent Tips */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 relative inline-block ml-5">
          Recent Tips
          {/* subtle underline / highlight effect */}
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 rounded-full opacity-50"></span>
        </h2>

        {/* Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {homeChallenges.map((challenge) => (
            <ChallengeCards key={challenge._id} challenges={challenge} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Home;
