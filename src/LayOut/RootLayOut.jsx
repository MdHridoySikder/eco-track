import React from "react";
import { Outlet } from "react-router";

const RootLayOut = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayOut;
