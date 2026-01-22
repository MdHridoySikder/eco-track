import { Link } from "lucide";

import React from "react";
import { FaEdit } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const Update = () => {
  const data = useLoaderData();

  const [formData, setFormData] = React.useState({
    title: "",
    category: "",
    description: "",
    duration: "",
    target: "",
    participants: "",
    impactMetric: "",
    imageUrl: "",
  });

  // Loader data ashlei state update
  React.useEffect(() => {
    if (data) {
      setFormData({
        title: data.title || "",
        category: data.category || "",
        description: data.description || "",
        duration: data.duration || "",
        target: data.target || "",
        participants: data.participants || "",
        impactMetric: data.impactMetric || "",
        imageUrl: data.imageUrl || "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://eco-track-server-alpha.vercel.app/challenges/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        duration: Number(formData.duration),
        participants: Number(formData.participants),
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log("Challenge updated:", resData);
        toast.success("Challenge updated successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update challenge");
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-green-900 mb-8 relative text-center">
        Update Challenge
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
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
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
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
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
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
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
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
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
            value={formData.target}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
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
            value={formData.participants}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
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
            value={formData.impactMetric}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-semibold text-green-900 mb-1">
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        <div className="flex justify-between mt-6">
          {/* Go Back */}
          <button
            type="button"
            onClick={() => (window.location.href = `/Home`)}
            className="px-5 py-2 text-sm font-semibold text-green-800 border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
          >
            Go Back
          </button>

          {/* Submit / Update */}
          <button
            type="submit"
            className="px-5 py-2 text-sm font-semibold text-green-800 border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
          >
            Update
            <FaEdit className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
