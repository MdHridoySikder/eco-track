import React from "react";
import TipsCard from "./TipsCards";
import { Link, useLoaderData } from "react-router";
import { MoveLeft } from "lucide-react";

const RecentTips = () => {
  const tips = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-green-100 via-white to-green-100 py-12 px-4">
      <div className="text-center mb-12 px-4 md:px-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 relative inline-block">
          Recent Tips
          {/* subtle underline / highlight effect */}
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 rounded-full opacity-50"></span>
        </h2>

        <p className="text-gray-900 dark:text-gray-900 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
          EcoTrack’s{" "}
          <span className="font-semibold text-green-700">Recent Tips</span>{" "}
          provide practical, easy-to-follow guidance to help you make
          <span className="text-emerald-600 font-medium">
            {" "}
            eco-friendly choices
          </span>
          ,
          <span className="text-green-700 font-medium">
            {" "}
            reduce everyday waste
          </span>
          , and
          <span className="text-lime-500 font-medium">
            {" "}
            live more sustainably
          </span>
          . Discover small actions that create a big impact, learn from the
          community, and take simple steps toward a healthier planet—one tip at
          a time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <TipsCard key={tip._id} tip={tip}></TipsCard>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link
          to="/Home"
          className="mt-3 inline-flex  items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-green-800 border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300"
        >
          <MoveLeft className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default RecentTips;
