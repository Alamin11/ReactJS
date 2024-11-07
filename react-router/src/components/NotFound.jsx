import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center ">
      <h2 className="text-2xl text-red-500 mb-4">404 | Page not found</h2>
      <button
        onClick={() => navigate("/")}
        className="text-lg bg-teal-500 rounded-lg px-6 py-2"
      >
        Go back to home
      </button>
    </div>
  );
};

export default NotFound;
