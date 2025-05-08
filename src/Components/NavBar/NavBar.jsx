import React from "react";
import { Link, NavLink } from "react-router";

export const NavBar = () => {
  const links = <>
      <ul className="mb-4 w-full md:flex md:ml-4">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><NavLink to='/stories'>Stories</NavLink></li>
        <li><NavLink to='/Contact'>Contact</NavLink></li>
      </ul>
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
              links
            }
          </ul>
        </div>
          <Link to='/'>
            <div className="flex items-center hover:cursor-pointer">
              <img className="w-10"
              src="https://i.ibb.co.com/1Y0r0wSD/Gemini-Generated-Image-gqo66ugqo66ugqo6-removebg-preview.png" alt="" />
              <p className="ml-2 text-xl font-bold">arj<span className="text-red-600">BookHouse</span></p>
            </div>
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};
