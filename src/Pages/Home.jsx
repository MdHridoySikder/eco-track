import React, { useEffect, useState } from "react";
import ChallengeCards from "./ChallengeCards";
import { Link } from "react-router";

const Home = () => {
  const [homeChallenges, setHomeChallenges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/challenges/home")
      .then((res) => res.json())
      .then((data) => setHomeChallenges(data))
      .catch((err) => console.error(err));
  }, []);

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
            className="inline-block px-6 py-2 border-2 border-green-700 text-green-700 font-semibold rounded-md hover:bg-green-50 transition"
          >
            View All Challenges
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
      </div>
    </div>
  );
};

export default Home;
