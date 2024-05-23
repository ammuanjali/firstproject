
import React from 'react';

function Header() {
  return (
    <header className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="index.html"><img src="img/logo.png" alt="Brand" /></a>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="ml-auto"><a href="/" className="text-gray-700 hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-blue-500">About Us</a></li>
            {/* Add more menu items here */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
