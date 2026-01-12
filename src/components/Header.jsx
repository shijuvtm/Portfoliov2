import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="p-2 bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-gray-800">
            Shiju A
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="md:hidden mt-3 space-y-2 p-3 bg-gray-50 rounded-lg">
            <a href="#home" className="block p-2 hover:bg-blue-50">Home</a>
            <a href="#about" className="block p-2 hover:bg-blue-50">About</a>
            <a href="#skills" className="block p-2 hover:bg-blue-50">Skills</a>
            <a href="#projects" className="block p-2 hover:bg-blue-50">Projects</a>
            <a href="#contact" className="block p-2 hover:bg-blue-50">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
