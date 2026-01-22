import React, { useContext, useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { Globe2, Leaf, Wind } from "lucide-react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { signInWithEmailAndPasswordfunc, signInWithPopupfunc, user } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);

    signInWithEmailAndPasswordfunc(email, password)
      .then(() => {
        toast.success("Login successful ");
        navigate(from, { replace: true });
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleGoogle = () => {
    setLoading(true);
    signInWithPopupfunc()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        toast.success("Login successful with Google");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0b1f17] flex items-center justify-center px-4">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-emerald-600/30 to-lime-400/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-green-500/30 to-teal-400/20 rounded-full blur-[120px]" />

      <Leaf className="absolute top-20 left-16 w-6 h-6 text-emerald-400/40 hidden md:block animate-pulse" />
      <Globe2 className="absolute bottom-24 right-20 w-8 h-8 text-lime-400/40 hidden md:block animate-spin-slow" />
      <Wind className="absolute top-1/2 left-10 w-8 h-8 text-teal-300/30 hidden md:block animate-pulse" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm">
        <div className="rounded-[32px] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.5)] p-6">
          {/* Logo */}
          <div className="flex justify-center text-center items-center gap-1">
            <div className="w-15 h-15 rounded-full overflow-hidden border-2 border-green-700">
              <img src="/logo1.png" alt="EcoTrack Logo" />
            </div>
          </div>

          <h1 className="text-center text-2xl font-extrabold text-white">
            Login to EcoTrack
          </h1>
          <p className="text-center text-emerald-200 mt-1 mb-6 text-sm">
            A greener way to track tomorrow
          </p>

          <form className="space-y-4" onSubmit={handleSignin}>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              className="w-full px-4 py-2.5 rounded-full bg-black/30 text-white outline-none border border-emerald-400/30 focus:ring-2 focus:ring-lime-400"
            />

            {/* Password with Eye Icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                autoComplete="password"
                name="password"
                required
                className="w-full px-4 py-2.5 rounded-full bg-black/30 text-white outline-none border border-emerald-400/30 focus:ring-2 focus:ring-lime-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-green-300 hover:text-lime-400"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="flex justify-between text-sm text-emerald-200">
              <Link className="hover:underline text-lime-300">
                Forgot Password?
              </Link>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`btn w-full rounded-full text-base font-bold
                ${
                  loading
                    ? "btn-disabled bg-emerald-400"
                    : "bg-gradient-to-r from-lime-300 via-emerald-400 to-green-500 text-green-950 hover:scale-105"
                }
                shadow-[0_15px_45px_rgba(50,200,120,0.5)] transition-all duration-300`}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Logging in...
                  </>
                ) : (
                  "Enter Eco System"
                )}
              </button>
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogle}
              className="btn w-full rounded-full bg-gradient-to-r from-lime-300 via-emerald-400 to-green-500 text-green-950 hover:scale-105 "
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </form>

          <p className="text-center text-emerald-200 mt-5 text-sm">
            New here?{" "}
            <Link
              to="/Register"
              className="font-bold text-lime-300 hover:underline"
            >
              Grow an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
