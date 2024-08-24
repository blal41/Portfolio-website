import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the menu button

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center'>
        {/* Logo or Title */}
        <div className='text-2xl font-bold'>Portfolio</div>
        
        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button onClick={handleToggle} aria-label='Toggle Menu' className='ml-auto'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Menu Items */}
        <div className={`absolute top-14  items-center  md:top-2 right-0  w-full md:w-auto bg-black md:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex md:items-center md:justify-end z-20`}>
          <div className='flex flex-col md:flex-row md:space-x-6 w-full md:w-auto'>
            <a href="#home" className='py-2 px-4 hover:text-gray-400' onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className='py-2 px-4 hover:text-gray-400' onClick={() => setIsOpen(false)}>About Me</a>
            <a href="#service" className='py-2 px-4 hover:text-gray-400' onClick={() => setIsOpen(false)}>My Skills</a>
            <a href="#project" className='py-2 px-4 hover:text-gray-400' onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className='py-2 px-4 hover:text-gray-400' onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
