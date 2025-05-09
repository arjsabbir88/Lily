import React from 'react'

export const ReviewCard3 = () => {
  return (
    <div className="bg-yellow-50 rounded-2xl p-6 shadow-md border border-gray-200 max-w-md mx-10">
      <div className="mb-4 flex items-center flex-col">
        <img
          src="https://i.ibb.co.com/1fmkr7sb/pexels-andrewperformance1-697509.jpg"
          alt="Client"
          className="w-20 h-20 rounded-full object-cover mr-4"
        />
        <h2 className="text-xl text-green-500 font-bold">Ethan Carter</h2>
        <h2 className="text-lg font-semibold text-green-700">Client Review</h2>
      </div>
      <p className="text-gray-600 mb-4">
      I’ve been loving my arjBookHouse subscription! Every month, I get a thrilling mix of genres—mystery, sci-fi, and even poetry. The curated selection keeps me on my toes, and the quality of the books is top-notch. Can’t wait for next month’s surprise!
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
