import { Link, useLocation } from 'react-router';
import { Leaf } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Leaf className="text-green-600" size={32} />
            <span className="text-2xl font-semibold text-green-600">FlowerPlant</span>
          </Link>
          
          <ul className="flex gap-8">
            <li>
              <Link
                to="/"
                className={`text-lg ${
                  isActive('/') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/my-plants"
                className={`text-lg ${
                  isActive('/my-plants') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700'
                }`}
              >
                My Plants
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-lg ${
                  isActive('/about') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700'
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}