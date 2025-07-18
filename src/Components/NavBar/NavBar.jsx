import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

export const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const links = (
    <>
      <ul className="mb-4 w-full md:flex md:ml-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={user?'/profile':'/auth/login'}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/stories">Stories</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </>
  );


  const handleLogout = () => {
    console.log("clicked");
    logOut()
      .then(() => {
        toast("signOut SuccessFully");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const btn = <>
    {user ? (
          <button onClick={handleLogout} to="/auth/login" className="btn">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn">
            LogIn
          </Link>
        )}
  </>

  const icon = <>
        <div className="flex items-center hover:cursor-pointer">
            <img
              className="w-10"
              src="https://i.ibb.co.com/1Y0r0wSD/Gemini-Generated-Image-gqo66ugqo66ugqo6-removebg-preview.png"
              alt=""
            />
            <p className="ml-2 text-xl font-bold hidden md:flex">
              arj<span className="text-red-600">BookHouse</span>
            </p>
          </div>
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
            {links}
            <div className="flex md:hidden">
              {
                btn
              }
            </div>
          </ul>
        </div>
        <Link to="/">
          <div className="hidden md:flex">
            {
            icon
          }
          </div>
        </Link>
        {user && user.name}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
            <div className="avatar avatar-online mx-3">
            <div className="w-10 rounded-full hover:cursor-pointer">
              <img src={`${user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/128/1177/1177568.png"}`} title={user.displayName}/>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="hidden md:flex">
          {
          btn
        }
        </div>
        <div className="flex md:hidden">
          {
            icon
          }
        </div>
      </div>
    </div>
  );
};
