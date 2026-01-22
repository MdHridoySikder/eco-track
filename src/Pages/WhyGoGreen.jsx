import React from "react";
import { FaLeaf, FaWater, FaGlobe } from "react-icons/fa";

const WhyGoGreen = () => {
  const cards = [
    {
      title: "Reduce Waste",
      img: "/ReduceWaste.png",
      desc: "Minimize your environmental footprint by reducing plastic, paper, and energy waste.",

      gradient: "from-green-400 via-emerald-400 to-lime-400",
    },
    {
      title: "Conserve Resources",
      img: "/ConserveResources.png",
      desc: "Save water, energy, and natural resources for a more sustainable future.",

      gradient: "from-emerald-400 via-green-400 to-green-300",
    },
    {
      title: "Protect the Planet",
      img: "/ProtectthePlanet.png",
      desc: "Reduce pollution, support biodiversity, and help combat climate change.",

      gradient: "from-lime-400 via-emerald-400 to-green-300",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 overflow-hidden flex items-center justify-center px-6 py-20">
      {/* background */}
      <div className="absolute -top-20 -left-16 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-lime-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>

      <section className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-emerald-800 mb-4
                     bg-gradient-to-r from-green-600 via-emerald-500 to-lime-600
                     bg-clip-text text-transparent drop-shadow-lg"
        >
          Why Go Green?
        </h2>
        <p className="text-green-800/90 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Making sustainable choices benefits you, your community, and the
          planet.
          <span className="block mt-2 font-semibold text-emerald-700">
            Small actions. Real impact. Lasting change.
          </span>
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-emerald-50 rounded-3xl shadow-lg p-6 flex flex-col items-center
                         border border-emerald-100 hover:shadow-2xl hover:scale-105 transition-transform duration-500"
            >
              {/* Image */}
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-green-400 shadow-md ">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3
                className="font-extrabold text-green-800 text-lg md:text-xl mb-2
                           bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500
                           bg-clip-text text-transparent drop-shadow-sm"
              >
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-green-700 text-sm md:text-base text-center leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyGoGreen;
