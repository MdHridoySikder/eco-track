import React from "react";
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt } from "react-icons/fa";

const EventsCords = ({ event }) => {
  const {
    title,
    description,
    date,
    location,
    organizer,
    maxParticipants,
    currentParticipants,
  } = event;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500 via-green-400 to-lime-300 p-[2px] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Inner Card */}
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl h-full">
        {/* Header */}
        <div className="p-4 border-b border-green-100 flex justify-between items-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold bg-green-900 text-white px-3 py-1 rounded-full">
            <FaCalendarAlt className="w-3 h-3" />
            {new Date(date).toLocaleDateString()}
          </span>

          <span className="text-xs text-green-700 font-semibold">Event</span>
        </div>

        {/* Body */}
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-extrabold text-green-900 leading-snug">
            {title}
          </h3>

          <p className="text-sm text-green-800 leading-relaxed">
            {description.length > 120
              ? description.slice(0, 120) + "..."
              : description}
          </p>

          {/* Info */}
          <div className="space-y-2 text-sm text-green-700">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaUsers className="text-green-600" />
              <span>
                {currentParticipants} / {maxParticipants} participants
              </span>
            </div>
          </div>

          {/* Progress */}
          <div className="w-full bg-green-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-600 to-lime-400 h-full"
              style={{
                width: `${(currentParticipants / maxParticipants) * 100}%`,
              }}
            />
          </div>

          {/* Footer */}
          <div className="pt-2 text-xs text-green-700">
            Organized by <span className="font-semibold">{organizer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCords;
