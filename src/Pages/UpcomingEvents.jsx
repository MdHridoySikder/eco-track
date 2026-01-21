import React from "react";
import { useLoaderData } from "react-router";
import EventsCords from "./EventsCords";

const UpcomingEvents = () => {
  const events = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-green-900 mb-6">UpcomingEvents</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventsCords key={event._id} event={event}></EventsCords>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
