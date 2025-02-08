'use client';  // Add this for client-side interactivity

import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import Link from 'next/link';  // Use Next.js Link

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Location', href: '/location' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-2">
            <Logo />
            <div className={`h-8 w-px ${isScrolled ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block flex-1">
            <ul className="flex justify-center items-center space-x-12">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-base font-medium tracking-wide transition-all duration-200 border-b-2 border-transparent hover:border-blue-500 ${
                      isScrolled 
                        ? 'text-gray-100 hover:text-white' 
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className={`
              px-6 py-2.5 rounded-lg font-medium transition-all duration-200
              ${isScrolled 
                ? 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm' 
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
              }
            `}>
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className={`space-y-1.5 ${isScrolled ? 'text-white' : 'text-gray-800'}`}>
              <span className="block w-6 h-0.5 bg-current transition-all"></span>
              <span className="block w-6 h-0.5 bg-current transition-all"></span>
              <span className="block w-6 h-0.5 bg-current transition-all"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
          <ul className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-4 py-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-colors duration-200 font-medium">
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}; 