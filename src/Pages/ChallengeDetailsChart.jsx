import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { day: "Day 1", plastic: 0, co2: 0 },
  { day: "Day 3", plastic: 1.5, co2: 0.8 },
  { day: "Day 6", plastic: 2.8, co2: 1.6 },
  { day: "Day 9", plastic: 4.2, co2: 2.4 },
  { day: "Day 12", plastic: 6.0, co2: 3.5 },
  { day: "Day 15", plastic: 7.8, co2: 4.5 },
  { day: "Day 18", plastic: 8.0, co2: 5.0 },
  { day: "Day 21", plastic: 7.5, co2: 4.8 },
  { day: "Day 24", plastic: 6.8, co2: 4.2 },
  { day: "Day 30", plastic: 5.5, co2: 3.0 },
];

const ChallengeDetailsChart = () => {
  return (
    <div className="bg-white  shadow-xl p-6 md:p-8 border border-emerald-100 bg-gradient-to-br from-green-50 via-emerald-100 to-green- overflow-hidden ">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl md:text-3xl font-bold text-green-800 ml-10">
          Challenge Details
        </h2>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="text-sm font-medium">In Progress Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium">Completed</span>
          </div>
        </div>
      </div>

      {/* Main Chart - Mixed Line + Bar */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="plasticColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="co2Color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.95)",
                border: "1px solid #10B981",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            />
            <Legend />

            {/* Area for Plastic Saved */}
            <Area
              type="monotone"
              dataKey="plastic"
              stroke="#10B981"
              fillOpacity={1}
              fill="url(#plasticColor)"
              name="Plastic Saved (g)"
            />

            {/* Line for CO2 Reduced */}
            <Line
              type="monotone"
              dataKey="co2"
              stroke="#14B8A6"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2 }}
              name="CO₂ Reduced (kg)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto px-4">
        {/* Days Active */}
        <div className="bg-emerald-50 p-6 rounded-2xl text-center border border-emerald-100 shadow-md hover:shadow-xl transition-shadow duration-500">
          <p className="text-sm text-green-700 font-semibold mb-2 uppercase tracking-wider">
            Days Active
          </p>
          <p className="text-4xl md:text-5xl font-extrabold text-emerald-800 drop-shadow-sm animate-pulse">
            12
          </p>
          <div className="mt-2 h-1 w-16 mx-auto bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 rounded-full"></div>
        </div>

        {/* Plastic Saved */}
        <div className="bg-emerald-50 p-6 rounded-2xl text-center border border-emerald-100 shadow-md hover:shadow-xl transition-shadow duration-500">
          <p className="text-sm text-green-700 font-semibold mb-2 uppercase tracking-wider">
            Plastic Saved
          </p>
          <p className="text-4xl md:text-5xl font-extrabold text-emerald-800 drop-shadow-sm animate-pulse">
            8g
          </p>
          <div className="mt-2 h-1 w-16 mx-auto bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 rounded-full"></div>
        </div>

        {/* CO₂ Reduced */}
        <div className="bg-emerald-50 p-6 rounded-2xl text-center border border-emerald-100 shadow-md hover:shadow-xl transition-shadow duration-500">
          <p className="text-sm text-green-700 font-semibold mb-2 uppercase tracking-wider">
            CO₂ Reduced
          </p>
          <p className="text-4xl md:text-5xl font-extrabold text-emerald-800 drop-shadow-sm animate-pulse">
            5kg
          </p>
          <div className="mt-2 h-1 w-16 mx-auto bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetailsChart;
