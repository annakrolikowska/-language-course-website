import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { text: 'Strona główna', url: '/' },
    { text: 'O mnie', url: '/o-mnie' },
    { text: 'Oferta', url: '/oferta' },
    { text: 'Kontakt', url: '/kontakt' },
  ];

  return (
    <nav className="bg-grey-0 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:flex md:items-center">
          <ul className={`md:flex space-x-4 ${isOpen ? '' : 'hidden'}`}>
            {navLinks.map((link, index) => (
              <li key={index} className="text-grey-100 hover:text-primary-100">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-grey-100"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;