import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import NotFound from "../components/NotFound";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
