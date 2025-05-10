import React from "react";
import "./style.css";
import { Link } from "react-router";
export const Error = () => {
  return (
    <div className="flex justify-center items-center">
      <div id="img" className="flex flex-col items-center justify-end h-screen bg-gray-100 p-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600">
          Sorry, the page you are looking for might have been removed, had its
          name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="px-6 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};
