import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";

const Slider = () => {
  const slides = [
    {
      type: "event",
      title: "Community Clean-up Day",
      description:
        "Join neighbors to clean streets, parks, and public spaces for a healthier environment.",
      date: "2024-02-15T09:00:00Z",
      location: "Central Park",
      organizer: "cleanup@ecotrack.com",
      maxParticipants: 50,
      currentParticipants: 35,
      img: "https://images.pexels.com/photos/7656995/pexels-photo-7656995.jpeg",
    },
    {
      type: "tip",
      title: "How to compost at home",
      content:
        "Simple steps for home composting using kitchen waste like vegetable peels and food scraps.",
      category: "Waste Management",
      authorName: "Green User",
      createdAt: "2026-01-20T10:30:00Z",
      img: "https://images.pexels.com/photos/6627070/pexels-photo-6627070.jpeg",
    },
    {
      type: "challenge",
      title: "Plastic-Free July",
      description: "Avoid single-use plastic for one month",
      duration: 30,
      target: "Reduce plastic waste",
      startDate: "2026-01-01",
      endDate: "2026-02-02",
      img: "https://images.pexels.com/photos/7656994/pexels-photo-7656994.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timeoutRef.current);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden shadow-2xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative group">
            {/* Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Card Overlay */}
            <div className="absolute bottom-4 left-8 md:left-20 bg-white/20 backdrop-blur-md p-4 md:p-6 rounded-3xl max-w-xs shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-md md:text-lg font-bold text-green-900 mb-3">
                {slide.title}
              </h3>

              <p className="text-gray-700 text-sm md:text-base truncate">
                {slide.description || slide.content}
              </p>

              {/* Event / Tip / Challenge Details */}
              {slide.type === "event" && (
                <>
                  <p className="text-xs text-gray-800 mt-1">
                    Date:{" "}
                    <time dateTime={slide.date}>
                      {new Date(slide.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </p>
                  <p className="text-xs text-gray-800">
                    Location: {slide.location}
                  </p>
                  <p className="text-xs text-gray-800">
                    Participants: {slide.currentParticipants}/
                    {slide.maxParticipants}
                  </p>
                  <p className="text-xs text-gray-800">
                    Organizer: {slide.organizer}
                  </p>
                </>
              )}

              {slide.type === "tip" && (
                <>
                  <p className="text-xs text-gray-800 mt-1">
                    Category: {slide.category}
                  </p>
                  <p className="text-xs text-gray-800">
                    Author: {slide.authorName}
                  </p>
                  <p className="text-xs text-gray-800">
                    Published:{" "}
                    <time dateTime={slide.createdAt}>
                      {new Date(slide.createdAt).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </p>
                </>
              )}

              {slide.type === "challenge" && (
                <>
                  <p className="text-xs text-gray-600 mt-1">
                    Duration: {slide.duration} days
                  </p>
                  <p className="text-xs text-gray-600">
                    Target: {slide.target}
                  </p>
                  <p className="text-xs text-gray-600">
                    Start:{" "}
                    <time dateTime={slide.startDate}>
                      {new Date(slide.startDate).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </p>
                  <p className="text-xs text-gray-600">
                    End:{" "}
                    <time dateTime={slide.endDate}>
                      {new Date(slide.endDate).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </p>
                </>
              )}

              <Link
                to={
                  slide.type === "event"
                    ? "/events"
                    : slide.type === "tip"
                      ? "/recentTips"
                      : "/challenges"
                }
                className="mt-2 block w-full py-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center text-sm md:text-base"
              >
                {slide.type === "event"
                  ? "Join Event"
                  : slide.type === "tip"
                    ? "Read Tip"
                    : "Get Started"}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 w-full flex justify-between px-4 -translate-y-1/2">
        <button
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
          className="bg-green-600 hover:bg-green-400 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="bg-green-600 hover:bg-green-700 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
