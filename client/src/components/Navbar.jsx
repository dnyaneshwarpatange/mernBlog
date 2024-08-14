import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx"; // Ensure the path is correct
import "../index.css"; // Ensure Tailwind CSS is included

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div className="navbar h-[10vh] w-[100vw] bg-black flex justify-between items-center p-8">
      <div className="navleft">
        <Link to="/" className="text-teal-500 font-semibold hover:text-teal-300">
          Home
        </Link>
      </div>
      <div className="navright flex gap-8">
        {!isLoggedIn ? (
          <>
            <Link to="/api/v1/login" className="text-teal-500 font-semibold hover:text-teal-300">
              Sign In
            </Link>
            <Link to="/api/v1/register" className="text-teal-500 font-semibold hover:text-teal-300">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/api/v1/create" className="text-teal-500 font-semibold hover:text-teal-300">
              Create Posts
            </Link>
            <button
              onClick={logout}
              className="text-teal-500 font-semibold hover:text-teal-300"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
