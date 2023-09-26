import React, { useState, useEffect } from 'react';

function Navbar() {
  const navLinks = [
    { text: 'Strona główna', url: '/' },
    { text: 'O mnie', url: '#about' },
    { text: 'Oferta', url: '#offer' },
    { text: 'Kontakt', url: '#contact' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white border-gray-200 opacity-95 w-full z-20 ${
        isNavbarFixed ? 'fixed top-0' : ''
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 md:p-8 justify-end">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-grey-0 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full ${isMobileMenuOpen ? 'block' : 'hidden'} md:block justify-end`}
          id="navbar-default"
        >
          <ul className="font-medium  place-content-end flex flex-col text-center p-4 md:p-0 mt-4 border border-primary-25 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-primary-25 md:hover:bg-transparent md:border-0 md:hover:text-primary-100 md:p-0"
                  onClick={toggleMobileMenu}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;