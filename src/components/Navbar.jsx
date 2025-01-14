import { useState } from 'react';
import { Building2, Bell, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  return (
    <nav className="absolute top-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          <div className="flex-shrink-0 flex items-center">
            <Building2 size={20} className="text-white" />
            <h1 className="text-xl font-bold text-cyan-600">EstateHeaven</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#properties" className="text-black-950 hover:text-gray-900 px-2 py-1 text-sm rounded-md transition-all ">
              Properties
            </a>
            <a href="#buy" className="text-black-950 hover:text-gray-900 px-2 py-1 text-sm rounded-md transition-all ">
              Buy
            </a>
            <a href="#sell" className="text-black-950 hover:text-gray-900 px-2 py-1 text-sm rounded-md transition-all ">
              Sell
            </a>
            <a href="#rent" className="text-black-950 hover:text-gray-900 px-2 py-1 text-sm rounded-md transition-all">
              Rent
            </a>
            <a href="#agents" className="text-black-950 hover:text-gray-900 px-2 py-1 text-sm rounded-md transition-all ">
              Agents
            </a>
            <a href="#contact" className="text-black-950 hover:text-gray-900 px-2 py-1 text-sm rounded-md transition-all">
              Contact
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <Bell className="h-4 w-4 text-cyan-600" />
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100"
              >
                <User className="h-4 w-4 text-cyan-600" />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1">
                  <a href="#profile" className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </a>
                  <a href="#settings" className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                  <button className="flex items-center w-full px-3 py-1 text-sm text-red-600 hover:bg-gray-100">
                    <LogOut className="h-3 w-3 mr-2" />
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