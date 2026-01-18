import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { Leaf, Globe2, Wind, LeafIcon } from "lucide-react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { createUserWithEmailAndPasswordfunc } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);

    createUserWithEmailAndPasswordfunc?.(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name,
          photoURL: photourl,
        });
        toast.success("Register done ");
      })

      .catch((error) => {
        toast.error(`Signup failed: ${error.message}`);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0b1f17] flex items-center justify-center px-4">
      {/* Floating blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-emerald-600/30 to-lime-400/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-green-500/30 to-teal-400/20 rounded-full blur-[120px]" />

      <Leaf className="absolute top-20 left-16 w-6 h-6 text-emerald-400/40 hidden md:block animate-pulse" />
      <Globe2 className="absolute bottom-24 right-20 w-8 h-8 text-lime-400/40 hidden md:block animate-spin-slow" />
      <Wind className="absolute top-1/2 left-10 w-8 h-8 text-teal-300/30 hidden md:block animate-pulse" />

      <div className="relative z-10 w-full max-w-sm">
        <div className="rounded-[28px] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.5)] p-6">
          <div className="flex justify-center mb-5">
            {/* Logo */}
            <div className="flex justify-center text-center  items-center gap-1">
              <div className="w-15 h-15 rounded-full overflow-hidden border-2 border-green-700">
                <img src="/logo1.png" alt="EcoTrack Logo" />
              </div>
            </div>
          </div>

          <h1 className="text-center text-2xl font-extrabold text-white">
            Join EcoTrack
          </h1>
          <p className="text-center text-emerald-200 mt-1 mb-6 text-sm">
            Join EcoTrack & grow a greener future
          </p>

          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              required
              className="w-full px-4 py-2.5 rounded-full bg-black/30 text-white outline-none border border-emerald-400/30 focus:ring-2 focus:ring-lime-400"
            />
            <input
              type="url"
              placeholder="Photo Url"
              name="photourl"
              required
              className="w-full px-4 py-2.5 rounded-full bg-black/30 text-white outline-none border border-emerald-400/30 focus:ring-2 focus:ring-lime-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              autoComplete="username"
              required
              className="w-full px-4 py-2.5 rounded-full bg-black/30 text-white outline-none border border-emerald-400/30 focus:ring-2 focus:ring-lime-400"
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              name="password"
              required
              className="w-full px-4 py-2.5 rounded-full bg-black/30 text-white outline-none border border-emerald-400 focus:ring-2 focus:ring-lime-400"
            />

            <button
              type="submit"
              disabled={loading}
              className={`btn w-full rounded-full text-base font-bold ${
                loading
                  ? "btn-disabled bg-emerald-400"
                  : "bg-gradient-to-r from-lime-300 via-emerald-400 to-green-500 text-green-950 hover:scale-105"
              } shadow-[0_15px_45px_rgba(50,200,120,0.5)] transition-all duration-300`}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Creating...
                </>
              ) : (
                "Create Eco Account"
              )}
            </button>
          </form>

          <p className="text-center text-emerald-200 mt-5 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-lime-300 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
