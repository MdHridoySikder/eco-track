import React from "react";
import { FaLeaf, FaChartBar, FaUsers } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 
    via-emerald-50 to-green-100 p-6"
    >
      <section className=" py-20 animate-sectionUp">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
            How EcoTrack Works
          </h2>
          <p className="text-green-800 text-lg md:text-xl mb-14">
            Follow these three simple steps to make a measurable impact in the
            community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Step 1 */}
            <div className="bg-green-100 rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-card">
              <div className="w-32 h-32 flex items-center justify-center mb-3 border-4 border-green-400 rounded-full bg-green-50">
                <FaLeaf className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800 mb-1 text-lg">
                Join a Challenge
              </h3>
              <p className="text-green-700 text-xs md:text-sm text-center mb-3">
                Browse eco-friendly challenges and join the ones that match your
                lifestyle and goals.
              </p>
              <button className="px-5 py-2 bg-green-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300">
                Explore Challenges
              </button>
            </div>

            {/* Step 2 */}
            <div className="bg-green-100 rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-card delay-200">
              <div className="w-32 h-32 flex items-center justify-center mb-3 border-4 border-green-400 rounded-full bg-green-50">
                <FaChartBar className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800 mb-1 text-lg">
                Track Progress
              </h3>
              <p className="text-green-700 text-xs md:text-sm text-center mb-3">
                Update your progress regularly and see how your actions create
                measurable environmental impact.
              </p>
              <button className="px-5 py-2 bg-green-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300">
                Track Now
              </button>
            </div>

            {/* Step 3 */}
            <div className="bg-green-100 rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-card delay-400">
              <div className="w-32 h-32 flex items-center justify-center mb-3 border-4 border-green-400 rounded-full bg-green-50">
                <FaUsers className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800 mb-1 text-lg">
                Share Tips
              </h3>
              <p className="text-green-700 text-xs md:text-sm text-center mb-3">
                Share practical eco tips with the community and help others live
                sustainably.
              </p>
              <button className="px-5 py-2 bg-green-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300">
                Share Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
