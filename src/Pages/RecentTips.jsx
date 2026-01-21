import React from "react";
import TipsCard from "./TipsCards";
import { useLoaderData } from "react-router";

const RecentTips = () => {
  const tips = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-green-900 mb-6">Recent Tips</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <TipsCard key={tip._id} tip={tip}></TipsCard>
        ))}
      </div>
    </div>
  );
};

export default RecentTips;
