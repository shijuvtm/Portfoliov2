import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
   
      <header className="p-2 bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-gray-800">Shiju A</a>

            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-800 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
              <a href="#skills" className="text-gray-800 hover:text-blue-600">Skills</a>
              <a href="#education" className="text-gray-800 hover:text-blue-600">Education</a>
              <a href="#projects" className="text-gray-800 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
            </nav>

            <button className="md:hidden focus:outline-none text-gray-800"
  onClick={() => setOpen(!open)} >
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {open ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
</button>
          </div>

          
          {open && (
            <nav className="md:hidden mt-3 space-y-2 p-3">
              <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
              <a href="#skills" className="block text-gray-700 hover:text-blue-600">Skills</a>
              <a href="#education" className="block text-gray-700 hover:text-blue-600">Education</a>
              <a href="#projects" className="block text-gray-700 hover:text-blue-600">Projects</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          )}
        </div>
      </header>
    
  );
};

export default Header;
