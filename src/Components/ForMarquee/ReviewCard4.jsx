import React from 'react'

export const ReviewCard4 = () => {
  return (
    <div className="bg-yellow-50 rounded-2xl p-6 shadow-md border border-gray-200 max-w-md mx-10 shadow-xl hover:shadow-xl/30">
      <div className="mb-4 flex items-center flex-col">
        <img
          src="https://i.ibb.co.com/3ydPnz2g/pexels-tony-james-andersson-249384-1674752.jpg"
          alt="Client"
          className="w-20 h-20 rounded-full object-cover mr-4"
        />
        <h2 className="text-xl text-green-500 font-bold">Clara Emerson</h2>
        <h2 className="text-lg font-semibold text-green-700">Client Review</h2>
      </div>
      <p className="text-gray-600 mb-4">
      After six months with arjBookHouse, I can confidently say it’s worth every penny. The diverse collection—romance, biographies, and classics—has enriched my library. The subscription model feels like a literary adventure, and I’m hooked for the long haul!
      </p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.847 1.416 8.265L12 18.74l-7.415 3.9 1.416-8.265-6.001-5.847 8.332-1.21z" />
          </svg>
        ))}
      </div>
    </div>
  )
}
