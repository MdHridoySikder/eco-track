import { Mail, PhoneIncoming } from "lucide";
import React from "react";
import { BiPhoneIncoming } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LiaLocationArrowSolid } from "react-icons/lia";
import { MdAddReaction, MdEmail } from "react-icons/md";
import { PiAddressBookThin } from "react-icons/pi";
import { RiMvAiLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    // bg-gradient-to-r from-green-100 via-green-500 to-green-800
    <footer className=" bg-black text-gray-300 py-8">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Logo + Description */}

        <div>
          <div className=" flex items-center gap-1">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/logo.png"
                alt="EcoTrack Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Logo Text */}
            <Link to="/" className="text-2xl font-bold text-green-700">
              EcoTrack
            </Link>
          </div>
          <div></div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-emerald-500 mb-5">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-emerald-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/challenges"
                className="hover:text-emerald-400 transition"
              >
                Challenges
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-activities"
                className="hover:text-emerald-400 transition"
              >
                My Activities
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-start md:items-center">
          <h4 className="text-lg font-bold text-emerald-500 mb-8">Follow Us</h4>

          <div className="flex gap-6 text-2xl">
            <a
              href="#"
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all transform hover:scale-110 shadow-md"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all transform hover:scale-110 shadow-md"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all transform hover:scale-110 shadow-md"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold text-emerald-500 mb-5">
            Contact Info
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-3">
              <MdEmail /> ecotrack@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <BiPhoneIncoming /> +880 1234-567890
            </li>
            <li className="flex items-center gap-3">
              <PiAddressBookThin /> Chattogram, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800  mt-12 pt-4 text-center text-sm text-gray-500">
        © 2025 EcoTrack | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
