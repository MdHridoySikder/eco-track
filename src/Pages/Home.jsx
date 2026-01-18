import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <div>
        <h1>hello</h1>
      </div>
      {/*  Active Challenges */}
      <div className="mx-5">
        <h2 className="text-3xl font-extrabold text-green-800 m-5">
          Active Challenges
        </h2>
        <div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Card 1 */}
            <div className="relative bg-gradient-to-br from-green-400 to-emerald-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="/logo1.png"
                alt="Reduce Plastic Waste"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-green-900 mb-1">
                  Reduce Plastic Waste
                </h3>
                <p className="text-sm text-green-700 mb-2">Plastic</p>
                <p className="text-green-800 font-semibold text-sm">
                  Save 5kg plastic/week
                </p>
                {/* Future metric badge */}
                <span className="inline-block mt-2 px-2 py-1 bg-green-800 text-white text-xs rounded-full">
                  12 participants
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
