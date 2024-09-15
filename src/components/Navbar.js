import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <header className="bg-gray-900 p-4 text-gray-300 fixed w-full top-0 left-0 z-50">
      <nav className="flex items-center justify-between container mx-auto">
        <h1 className="text-2xl font-bold">Law Aware</h1>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/learning" className="hover:text-gray-200">Learning</Link>
          <Link to="/awareness" className="hover:text-gray-200">Awareness</Link>
          <Link to="/userProfile" className="flex items-center hover:text-gray-200">
            <UserIcon className="h-6 w-6 text-gray-300" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
