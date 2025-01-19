import React from 'react';
// import { Search } from 'lucide-react';

const Middle = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
          {/* Main Content */}
          <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Find Your<br />
                  Perfect Home<br />
                  Instantly.
                  </h1>
                  <p className="text-teal-600 text-base md:text-lg">
                    From budget-friendly to luxurious, 
                    find the residence of your dreams without breaking a sweat.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div className="text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-bold">9K<span className="text-orange-500 ml-1">+</span></p>
                    <p className="text-xs md:text-sm text-gray-400">Premium<br />Product</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-bold">2K<span className="text-orange-500 ml-1">+</span></p>
                    <p className="text-xs md:text-sm text-gray-400">Happy<br />Customer</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-bold">28K<span className="text-orange-500 ml-1">+</span></p>
                    <p className="text-xs md:text-sm text-gray-400">Awards<br />Winning</p>
                  </div>
                </div>
              </div>
    
              {/* Image Section */}
              <div className="relative mt-8 md:mt-0">
                <div className="relative aspect-square">
                    <div className="absolute inset-0 rounded-t-full border-2 border-gray-700">
                        <div className="absolute inset-0 rounded-t-full overflow-hidden m-2">
                            <img
                                src="/project_img_5.jpg"
                                alt="Modern architecture"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </main>
        </div>
      );
    };

export default Middle;