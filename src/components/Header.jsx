import React from 'react'
import Navbar from './navbar'

export const Header = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center w-full text-center relative"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Header Content */}
      <div className="absolute top-1/2 transform -translate-y-1/2 px-4 w-full">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Explore homes that <br /> fit your dreams
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
            Projects
          </button>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
