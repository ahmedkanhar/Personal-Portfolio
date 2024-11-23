"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for page navigation

const Header = () => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

  // Router for navigation
  const router = useRouter();

  // Pages that can be searched and navigated to
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  // Filter pages based on the search query
  const filteredPages = pages.filter(page =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle input change for the search bar
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click and navigate to the first matching page
  const handleSearchClick = () => {
    if (filteredPages.length > 0) {
      router.push(filteredPages[0].path); 
    }
  };

  return (
    <header className="bg-red-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo or Brand */}
        <div className="text-2xl font-semibold">
          <Link href="/" className="hover:text-gray-300">Ahmed.</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'X' : '☰'}
        </button>

        {/* Navigation Links in the Center */}
        <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:space-x-8 space-y-4 lg:space-y-0`}>
          <ul className="flex flex-col lg:flex-row justify-center space-x-8">
            <li>
              <Link href="/" className="text-lg hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/education" className="text-lg hover:text-gray-300">Education</Link>
            </li>
            <li>
              <Link href="/about" className="text-lg hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/projects" className="text-lg hover:text-gray-300">Projects</Link>
            </li>
            <li>
              <Link href="/skills" className="text-lg hover:text-gray-300">Skills</Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar and Button on the Right */}
        <div className="flex items-center space-x-2">
          <label htmlFor="search" className="text-sm">Search</label>
          <div className="relative">
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={handleSearchChange} 
              className="px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
            <button
              type="button"
              className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-gray-900 text-white rounded-r-md hover:bg-blue-700"
              onClick={handleSearchClick} 
            >
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Displaying filtered pages */}
      {searchQuery && filteredPages.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg text-gray-300">Found Pages:</h3>
          <ul className="list-disc pl-5">
            {filteredPages.map((page, index) => (
              <li key={index} className="text-gray-400">
                <Link href={page.path} className="hover:text-blue-500">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
