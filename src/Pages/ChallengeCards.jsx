import React from "react";
import { FaPlus, FaLeaf } from "react-icons/fa";
import { Link } from "react-router";

const ChallengeCards = ({ challenges }) => {
  const { title, category, impactMetric, imageUrl, participants } = challenges;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500 via-green-400 to-lime-300 p-[2px] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Inner Card */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden">
        {/* Image */}
        <div className="relative">
          <img
            src={imageUrl || "/logo1.png"}
            alt={title}
            className="w-full h-44 object-cover"
          />

          {/* Category Badge */}
          <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-green-900 text-white rounded-full shadow-md">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-extrabold text-green-900 leading-snug">
            {title}
          </h3>

          {/* Impact Metric */}
          <p className="text-sm font-semibold text-emerald-700"></p>

          {/* Progress (future ready) */}
          <div className="w-full bg-green-100 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-lime-400 h-full w-1/3" />
          </div>

          {/* Stats */}
          <div className="flex justify-between items-center text-xs text-green-700 pt-1">
            <span>{participants || 0} participants</span>
            <span>Ongoing</span>
          </div>

          {/* CTA Button */}
          <Link
            to=""
            className="mt-3 inline-flex w-full items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-green-800 border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300"
          >
            Challenge Details
            <FaPlus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCards;
