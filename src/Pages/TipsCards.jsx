import React from "react";
import { ThumbsUp } from "lucide-react";
import { FaLeaf } from "react-icons/fa";

const TipsCard = ({ tip }) => {
  const { title, content, category, authorName, upvotes, createdAt } = tip;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500 via-green-400 to-lime-300 p-[2px] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Inner Card */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden h-full">
        {/* Header */}
        <div className="p-4 border-b border-green-100 flex items-center justify-between">
          {/* Category */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold bg-green-900 text-white px-3 py-1 rounded-full shadow">
            <FaLeaf className="w-3 h-3" />
            {category}
          </span>

          {/* Date */}
          <span className="text-xs text-green-700">
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-extrabold text-green-900 leading-snug">
            {title}
          </h3>

          <p className="text-sm text-green-800 leading-relaxed">
            {content.length > 110 ? content.slice(0, 110) + "..." : content}
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-green-300 to-transparent"></div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2">
            {/* Author */}
            <p className="text-xs text-green-700">
              By <span className="font-semibold">{authorName}</span>
            </p>

            {/* Upvotes */}
            <div className="flex items-center gap-1 text-green-800 font-bold">
              <ThumbsUp className="w-4 h-4" />
              {upvotes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
