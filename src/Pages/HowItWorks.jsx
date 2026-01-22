import React from "react";
import { FaLeaf, FaChartBar, FaUsers } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      title: "Join a Challenge",
      desc: "Browse eco-friendly challenges and join the ones that match your lifestyle and goals.",
      icon: <FaLeaf className="w-12 h-12 text-green-600" />,
      gradient: "from-green-400 via-emerald-400 to-lime-400",
    },
    {
      title: "Track Progress",
      desc: "Update your progress regularly and see how your actions create measurable environmental impact.",
      icon: <FaChartBar className="w-12 h-12 text-green-600" />,
      gradient: "from-emerald-400 via-green-400 to-green-300",
    },
    {
      title: "Share Tips",
      desc: "Share practical eco tips with the community and help others live sustainably.",
      icon: <FaUsers className="w-12 h-12 text-lime-500" />,
      gradient: "from-lime-400 via-emerald-400 to-green-300",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 overflow-hidden flex items-center justify-center px-6 py-20">
      {/* Floating background circles */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-lime-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>

      <section className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-emerald-800 mb-4
                       bg-gradient-to-r from-green-600 via-emerald-500 to-lime-600
                       bg-clip-text text-transparent drop-shadow-lg"
        >
          How EcoTrack Works
        </h2>
        <p className="text-green-800/90 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Follow these simple steps to make a measurable impact in the
          community.
          <span className="block mt-2 font-semibold text-emerald-700">
            Small actions. Real impact. Lasting change.
          </span>
        </p>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-emerald-50 rounded-3xl shadow-lg p-6 flex flex-col items-center
                         border border-emerald-100 hover:shadow-2xl hover:scale-105 transition-all duration-500"
            >
              {/* Floating Icon Badge */}
              <div
                className={`absolute -top-5 -right-5 p-3 rounded-full bg-gradient-to-tr ${step.gradient} shadow-lg`}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3
                className="font-extrabold text-green-800 text-lg md:text-xl mb-2
                             bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500
                             bg-clip-text text-transparent drop-shadow-sm"
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-green-700 text-sm md:text-base text-center leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
