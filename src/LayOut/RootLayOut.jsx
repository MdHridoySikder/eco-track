import React from "react";
import { Link, Outlet } from "react-router";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const RootLayOut = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar></Navbar>

      <main className="">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default RootLayOut;
