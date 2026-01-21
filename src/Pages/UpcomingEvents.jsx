import React from "react";
import { useLoaderData } from "react-router";
import EventsCords from "./EventsCords";

const UpcomingEvents = () => {
  const events = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-12 px-4 md:px-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 relative inline-block">
          Upcoming Events
          {/* subtle underline / highlight effect */}
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 rounded-full opacity-50"></span>
        </h2>

        <p className="text-gray-900 dark:text-gray-900 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
          EcoTrack’s
          <span className="font-semibold text-green-700">
            Upcoming Events
          </span>{" "}
          showcase local and global sustainability initiatives that you can
          join. Participate in activities focused on
          <span className="text-emerald-600 font-medium">
            environmental cleanup
          </span>
          ,<span className="text-green-700 font-medium"> tree planting</span>,
          and
          <span className="text-lime-500 font-medium">
            community-driven eco-projects
          </span>
          . Stay connected, make an impact, and be part of a greener future with
          every event you attend.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventsCords key={event._id} event={event}></EventsCords>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
