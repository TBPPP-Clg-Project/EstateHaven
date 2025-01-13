import { useState } from 'react';
import {  Building2,Bell, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full bg-transparent shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Building2 size={24} className="text-white" />
            <h1 className="text-2xl font-bold text-cyan-600">EstateHeaven</h1>
          </div>

          <div className="hidden md:flex items-center space-x-7">
            <a href="#properties" className="text-black-950 hover:text-gray-900 px-3 py-2 rounded-md transition-all hover:bg-gray-100">
              Properties
            </a>
            <a href="#buy" className="text-black-950 hover:text-gray-900 px-3 py-2 rounded-md transition-all hover:bg-gray-100">
              Buy
            </a>
            <a href="#sell" className="text-black-950 hover:text-gray-900 px-3 py-2 rounded-md transition-all hover:bg-gray-100">
              Sell
            </a>
            <a href="#rent" className="text-black-950 hover:text-gray-900 px-3 py-2 rounded-md transition-all hover:bg-gray-100">
              Rent
            </a>
            <a href="#agents" className="text-black-950 hover:text-gray-900 px-3 py-2 rounded-md transition-all hover:bg-gray-100">
              Agents
            </a>
            <a href="#contact" className="text-black-950 hover:text-gray-900 px-3 py-2 rounded-md transition-all hover:bg-gray-100">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-cyan-600" />
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
              >
                <User className="h-5 w-5 text-cyan-600" />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </a>
                  <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;