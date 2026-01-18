import React from "react";

const WhyGoGreen = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 
    via-emerald-50 to-green-100 p-6"
    >
      <section className=" py-20 animate-sectionUp">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
            Why Go Green?
          </h2>
          <p className="text-green-800 text-lg md:text-xl mb-14">
            Making sustainable choices benefits you, your community, and the
            planet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-green-100 rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-green-400">
                <img
                  src="/ReduceWaste.png"
                  alt="Reduce Waste"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">
                Reduce Waste
              </h3>
              <p className="text-green-700 text-sm">
                Minimize your environmental footprint by reducing plastic,
                paper, and energy waste.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-100 rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-green-400">
                <img
                  src="/ConserveResources.png"
                  alt="Conserve Resources"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">
                Conserve Resources
              </h3>
              <p className="text-green-700 text-sm">
                Save water, energy, and natural resources for a more sustainable
                future.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-green-100 rounded-xl shadow-md p-6 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-green-400">
                <img
                  src="/ProtectthePlanet.png"
                  alt="Protect the Planet"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">
                Protect the Planet
              </h3>
              <p className="text-green-700 text-sm">
                Reduce pollution, support biodiversity, and help combat climate
                change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyGoGreen;
