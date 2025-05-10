import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router";
import { Loading } from "../../Components/Loading/Loading";

export const Profile = () => {
  const {user,loading} = useContext(AuthContext)

  if(loading){
    return <Loading></Loading>
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto space-y-6 md:space-y-0 md:space-x-10">
        {/* Left Side: Image */}
        <div className="w-48 h-48 md:w-64 md:h-64">
          <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <span className="text-gray-500 w-full h-full">
              <img className="w-full h-full rounded-full" src={user.photoURL} alt="" />
            </span>
          </div>
        </div>

        {/* Right Side: Text and Buttons */}
        <div className="text-center md:text-left">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold">{user.displayName}</h1>
          <p className="mb-2">{user.email}</p>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl text-gray-600 mb-4">
            A Bit About Me
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-6 max-w-md">
            I'm passionate. Click here to add your own text and edit me. I'm a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition hover:cursor-pointer">
              Resume
            </button>
            <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-400 text-white font-semibold hover:bg-red-500 transition hover:cursor-pointer">
              Projects
            </button>
            <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan-400 text-white font-semibold hover:bg-cyan-500 transition hover:cursor-pointer">
              Contact
            </button>
          </div>
          <div>
            <Link to='/edit-profile' className="btn bg-green-600 my-5 hover:cursor-pointer">Edit details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
