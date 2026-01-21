import React from "react";
import { ThumbsUp, Leaf } from "lucide-react";

const TipsCard = ({ tip }) => {
  const { title, content, category, authorName, upvotes, createdAt } = tip;
  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Category */}
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
        <Leaf className="w-3 h-3" />
        {category}
      </span>

      {/* Title */}
      <h3 className="text-lg font-bold text-green-900 mt-3">{title}</h3>

      {/* Content */}
      <p className="text-green-800 text-sm mt-2">{content}</p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-xs text-green-700">
            By <span className="font-semibold">{authorName}</span>
          </p>
          <p className="text-xs text-green-600">
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center gap-1 text-green-700 font-semibold">
          <ThumbsUp className="w-4 h-4" />
          {upvotes}
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
