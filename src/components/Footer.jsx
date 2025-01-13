import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-400">
              EstateHeaven is your premier destination for high-end real estate. 
              We specialize in luxury properties across the globe.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@estateHaven.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Beverly Hills, CA 90210</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#properties" className="hover:text-white transition-colors">Properties</a></li>
              <li><a href="#agents" className="hover:text-white transition-colors">Our Agents</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-7 mb-0 pt-5 border-t border-cyan-900">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 EstateHaven. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;