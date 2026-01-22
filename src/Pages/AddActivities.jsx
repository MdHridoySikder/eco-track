import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MoveLeft } from "lucide-react";

const AddActivities = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      duration: Number(e.target.duration.value),
      target: e.target.target.value,
      participants: Number(e.target.participants.value),
      impactMetric: e.target.impactMetric.value,
      imageUrl: e.target.imageUrl.value,
      startDate: new Date().toISOString(),
      createdBy: user.email,
    };

    fetch("http://localhost:3000/challenges", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Challenge created:", data);
        toast.success("Challenge created successfully! ");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to create challenge ");
      });
  };

  return (
    <div className="bg-gradient-to-br from-green-100 via-white to-green-100 py-12 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-900 mb-8 relative text-center">
          Create New Challenge
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 rounded-full opacity-50"></span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-5 border border-green-100"
        >
          {/* Title */}
          <div>
            <label className="block font-semibold text-green-900 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Plastic Free Week"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold text-green-900 mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Environment"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-green-900 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Avoid plastic for 7 days"
            ></textarea>
          </div>

          {/* Duration */}
          <div>
            <label className="block font-semibold text-green-900 mb-1">
              Duration (days)
            </label>
            <input
              type="number"
              name="duration"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="7"
            />
          </div>

          {/* Target */}
          <div>
            <label className="block font-semibold text-green-900 mb-1">
              Target
            </label>
            <input
              type="text"
              name="target"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="Reduce carbon footprint"
            />
          </div>

          {/* Participants */}
          <div>
            <label className="block font-semibold text-green-900 mb-1">
              Participants
            </label>
            <input
              type="number"
              name="participants"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="0"
            />
          </div>

          {/* Impact Metric */}
          <div>
            <label className="block font-semibold text-green-900 mb-1">
              Impact Metric
            </label>
            <input
              type="text"
              name="impactMetric"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="kg CO2 reduced"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-semibold text-green-900 mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              placeholder="https://image-url.com"
            />
          </div>
          {/* Buttons  */}
          <div className="flex justify-between mt-4">
            {/* Go to Home */}
            <button
              type="button"
              onClick={() => (window.location.href = "/home")}
              className="px-5 py-2 text-sm font-semibold text-green-800 border-2 border-green-800 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              <MoveLeft className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              Go Home
            </button>

            {/* Submit */}
            <button
              type="submit"
              className="px-6 py-2 text-sm font-semibold text-green-800 border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              Submit
              <FaEdit className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </form>

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default AddActivities;
