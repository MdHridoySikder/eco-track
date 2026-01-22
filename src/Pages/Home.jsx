import React, { useEffect, useState } from "react";
import ChallengeCards from "./ChallengeCards";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import ErrorPage from "./ErrorPage";
import RecentTips from "./RecentTips";
import FourRecentTips from "./FourRecentTips";
import TipsCard from "./TipsCards";
import UpcomingEvents from "./UpcomingEvents";
import EventsCords from "./EventsCords";
import { MoveRight } from "lucide-react";
import Slider from "./Slider";

const Home = () => {
  const [homeChallenges, setHomeChallenges] = useState([]);
  const [recentTips, setRecentTips] = useState([]);
  const [events, setEvents] = useState([]);

  // Challenges
  useEffect(() => {
    fetch("http://localhost:3000/challenges/home")
      .then((res) => res.json())
      .then((data) => setHomeChallenges(data));
  }, []);

  // 👉 Recent Tips (only 4)
  useEffect(() => {
    fetch("http://localhost:3000/tips?limit=4")
      .then((res) => res.json())
      .then((data) => setRecentTips(data.slice(0, 4)));
  }, []);
  // Events fetch
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>
        <Slider></Slider>
      </div>

      <div className="bg-gradient-to-br from-green-100 via-white to-green-100 py-5 px-4">
        {/* Active Challenges 4cards */}
        <div className="mx-5">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 relative inline-block">
            Active Challenges
            {/* subtle underline / highlight effect */}
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 rounded-full opacity-50"></span>
          </h2>

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
              <MoveRight className="w-5 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        <div>
          {/* Recent Tips */}
          <div className="mx-5 mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 relative inline-block">
              Recent Tips
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 rounded-full opacity-50"></span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentTips.map((tip) => (
                <TipsCard key={tip._id} tip={tip} />
              ))}
            </div>
            <div className="text-center mb-5 mt-5">
              <Link
                to="/recentTips"
                className="mt-3 inline-flex  items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-green-800 border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300"
              >
                View All Tips
                <MoveRight className="w-5 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
        {/* :Upcoming Events section */}
        <div className="mx-5 mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 relative inline-block">
            Upcoming Events
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 rounded-full opacity-50"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.slice(0, 4).map((event) => (
              <EventsCords key={event._id} event={event} />
            ))}
          </div>
          <div className="text-center mb-5 mt-5">
            <Link
              to="/events"
              className="mt-3 inline-flex  items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-green-800 border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300"
            >
              View All Events
              <MoveRight className="w-5 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
