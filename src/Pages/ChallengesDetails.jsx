import { Link, useLoaderData, useNavigate } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const ChallengesDetails = () => {
  const challenge = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const {
    _id,
    title,
    category,
    description,
    duration,
    target,
    participants,
    impactMetric,
    imageUrl,
  } = challenge;

  const handleDelete = () => {
    if (!user) {
      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "You must login first to delete a challenge.",
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/challenges/${_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your challenge has been deleted.",
              icon: "success",
            }).then(() => {
              navigate("/challenges");
            });
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete challenge.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="relative min-h-screen ">
      <div className=" max-w-3xl mx-auto mt-10 mb-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: "url('/details.png')",
          }}
        ></div>
        <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500 via-green-400 to-lime-300 p-[2px] shadow-xl">
          <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden">
            {/* Image */}
            <div className="relative">
              <img
                src={imageUrl || "/logo1.png"}
                alt={title}
                className="w-full h-64 object-cover"
              />

              <span className="absolute top-4 right-4 px-4 py-1 text-sm font-semibold bg-green-900 text-white rounded-full shadow-md">
                {category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-extrabold text-green-900">
                {title}
              </h2>

              <p className="text-green-800 font-medium">{description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm text-green-700">
                <p>
                  <span className="font-bold">Duration:</span> {duration} days
                </p>
                <p>
                  <span className="font-bold">Target:</span> {target}
                </p>
                <p>
                  <span className="font-bold">Participants:</span>{" "}
                  {participants}
                </p>
                <p>
                  <span className="font-bold">Impact:</span> {impactMetric}
                </p>
              </div>

              <div className="text-xs text-green-600">
                {new Date().toDateString()}
              </div>

              {/* update & delete Buttons */}
              <div className="flex gap-4 pt-4">
                <Link
                  to={`/Update/${challenge._id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-green-800 border-2 border-green-700 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 group"
                >
                  Update
                  <FaEdit className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
                </Link>

                <button
                  onClick={handleDelete}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-red-700 border-2 border-red-600 rounded-full hover:bg-red-600 hover:text-white transition"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesDetails;
