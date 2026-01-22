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
import ChallengeDetailsChart from "./ChallengeDetailsChart";
import WhyGoGreen from "./WhyGoGreen";
import HowItWorks from "./HowItWorks";
import EcoTrackEnding from "./EcoTrackEnding";

const Home = () => {
  const [homeChallenges, setHomeChallenges] = useState([]);
  const [recentTips, setRecentTips] = useState([]);
  const [events, setEvents] = useState([]);

  // Challenges
  useEffect(() => {
    fetch("https://eco-track-server-alpha.vercel.app/challenges/home")
      .then((res) => res.json())
      .then((data) => setHomeChallenges(data));
  }, []);

  // 👉 Recent Tips (only 4)
  useEffect(() => {
    fetch("https://eco-track-server-alpha.vercel.app/tips?limit=4")
      .then((res) => res.json())
      .then((data) => setRecentTips(data.slice(0, 4)));
  }, []);
  // Events fetch
  useEffect(() => {
    fetch("https://eco-track-server-alpha.vercel.app/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      {/* Hero */}
      <div className="relative pt-5 bg-gradient-to-br from-green-300 via-emerald-100 to-green- overflow-hidden flex items-center justify-center px-6">
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-3xl">
          {/* Headline */}
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight
                 bg-gradient-to-r from-emerald-600 via-green-500 to-lime-600
                 bg-clip-text text-transparent drop-shadow-2xl"
          >
            EcoTrack
          </h1>

          {/* Decorative underline */}
          <div
            className="mx-auto w-32 h-1 rounded-full
                 bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400
                 shadow-lg"
          ></div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700/90 leading-relaxed max-w-xl mx-auto mt-1">
            A smart community platform for sustainable living —
            <span className="block font-semibold text-emerald-700/90">
              Join eco-challenges, track your impact, and discover everyday
              green habits.
            </span>
            <span className="block font-medium text-green-600/80 italic pb-5">
              Small actions. Real impact. Lasting change.
            </span>
          </p>
        </div>
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
      {/*----------------- Rechart */}
      <div>
        <ChallengeDetailsChart></ChallengeDetailsChart>
      </div>
      {/* Why Go Green */}
      <div>
        <WhyGoGreen></WhyGoGreen>
      </div>

      {/* --------------HowItWork */}
      <div>
        <HowItWorks></HowItWorks>
      </div>

      <div>
        <EcoTrackEnding></EcoTrackEnding>
      </div>
    </div>
  );
};

export default Home;
