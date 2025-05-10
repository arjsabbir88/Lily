import React from 'react'

export const Contact = () => {
  const handleSubmit=()=>{
    console.log("clicked")
  }
  return (
     <>
      <div className="relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1920x1080?text=Office+Background')`,
          opacity: 0.1,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10 px-4">
        {/* Title and Subtitle */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Contact us
        </h1>
        <p className="text-sm md:text-base text-gray-200 mb-10 text-center max-w-2xl">
          Over ten men worked on this project to bring all those data and work together to ensure the success of the project. Office phone number below.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Phone Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <svg
              className="w-8 h-8 text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p className="text-gray-800 font-medium">
              +8801757532012 <br /> +8801234567890
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <svg
              className="w-8 h-8 text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="text-gray-800 font-medium">
              contact@gmail.com <br /> test@gmail.com
            </p>
          </div>

          {/* Address Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <svg
              className="w-8 h-8 text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.243l-4.243-4.243m0 0l-4.243 4.243m4.243-4.243l4.243-4.243m-4.243 4.243l-4.243-4.243M21 12A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-800 font-medium">
              Indira Road, Farmgate, Dhaka, <br /> Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Send us a message
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Your Name */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Your name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Address */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Company Name */}
        <div className="col-span-1">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Company name
          </label>
          <input
            type="text"
            name="company"
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            placeholder=""
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-green-500 p-3 rounded-lg hover:bg-green-600 transition duration-200 hover:cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
     </>
  )
}
