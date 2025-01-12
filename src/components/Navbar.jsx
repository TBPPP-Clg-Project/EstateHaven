import React from 'react';
import { Building2, Building2Icon, Home, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <div className="flex items-center gap-2">
          <Building2 size={24} className="text-white" />
          <span className="text-white text-xl font-semibold">EstateHaven</span>
        </div>
        <ul className="hidden md:flex gap-7 text-white text-lg">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#Buy" className="cursor-pointer hover:text-gray-400">Buy</a>
          <a href="#Sell" className="cursor-pointer hover:text-gray-400">Sell</a>
          <a href="#Rent" className="cursor-pointer hover:text-gray-400">Rent</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#About Us" className="cursor-pointer hover:text-gray-400">About Us</a>
        </ul>
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign Up</button>
          <Search size={24} className="text-white cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;