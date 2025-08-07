import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/about-bg.jpg)' }}>
      <h1 className='text-4xl font-bold text-blue-600'>Hotel Booking</h1>
      <p className='text-lg text-white'>Find the best hotels at the best prices.</p>

    <form className="mt-8 bg-white bg-opacity-80 rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4 w-full max-w-2xl">
        <input
            type="text"
            name="location"
            placeholder="Location"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
        />
        <input
            type="date"
            name="date"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
        />
        <input
            type="number"
            name="guests"
            min={1}
            placeholder="Guests"
            className="w-24 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
        />
        <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
            Search
        </button>
    </form>
    </div>
  )
}

export default page
