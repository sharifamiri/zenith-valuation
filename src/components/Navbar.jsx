import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/val_logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef();
  const dropdownTimer = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinkClass = (path, startsWith = false) => {
    const match = startsWith
      ? location.pathname.startsWith(path)
      : location.pathname === path;
    return `relative block py-2 md:py-0 text-[17px] md:text-[18px] font-medium px-2 md:px-3 
      before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-0 before:bg-blue-600 
      hover:before:w-full hover:before:transition-all hover:before:duration-300 ${match ? 'text-blue-600 before:w-full' : 'text-gray-700'}`;
  };

  return (
    <nav className="bg-white/80 backdrop-blur shadow sticky top-0 z-50 px-6 py-6" ref={navRef}>
      <div className="w-full flex items-center justify-start gap-10 px-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Zenith Valuation Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Main Navigation Links */}
        <div className="hidden md:flex md:flex-row md:space-x-8 ml-6 items-center">
          <Link to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass('/about')}>About</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(dropdownTimer.current);
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              dropdownTimer.current = setTimeout(() => {
                setDropdownOpen(false);
              }, 200);
            }}
          >
            <div className="flex items-center space-x-1 cursor-pointer">
              <Link to="/services" className={navLinkClass('/services', true)}>Services</Link>
              <span className="text-gray-500">▾</span>
            </div>

            {dropdownOpen && (
              <div
                className="absolute bg-white border border-gray-300 shadow-xl rounded-lg mt-2 w-80 py-2 z-50"
                onMouseEnter={() => clearTimeout(dropdownTimer.current)}
                onMouseLeave={() => {
                  dropdownTimer.current = setTimeout(() => {
                    setDropdownOpen(false);
                  }, 200);
                }}
              >
                <Link to="/services/business-valuation" onClick={() => { setMenuOpen(false); setDropdownOpen(false); }} className="block px-6 py-3 text-gray-800 hover:bg-gray-100">Business Valuation & Appraisal</Link>
                <Link to="/services/strategic-growth" onClick={() => { setMenuOpen(false); setDropdownOpen(false); }} className="block px-6 py-3 text-gray-800 hover:bg-gray-100">Strategic Planning & Growth</Link>
                <Link to="/services/litigation-support" onClick={() => { setMenuOpen(false); setDropdownOpen(false); }} className="block px-6 py-3 text-gray-800 hover:bg-gray-100">Litigation Support</Link>
                <Link to="/services/tax-compliance" onClick={() => { setMenuOpen(false); setDropdownOpen(false); }} className="block px-6 py-3 text-gray-800 hover:bg-gray-100">Tax & Planning Compliance</Link>
                <Link to="/services/other" onClick={() => { setMenuOpen(false); setDropdownOpen(false); }} className="block px-6 py-3 text-gray-800 hover:bg-gray-100">Other Services</Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass('/contact')}>Contact</Link>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white shadow">
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-100">About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-100">Services</Link>
          <Link to="/services/business-valuation" onClick={() => setMenuOpen(false)} className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100">Business Valuation & Appraisal</Link>
          <Link to="/services/strategic-growth" onClick={() => setMenuOpen(false)} className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100">Strategic Planning & Growth</Link>
          <Link to="/services/litigation-support" onClick={() => setMenuOpen(false)} className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100">Litigation Support</Link>
          <Link to="/services/tax-compliance" onClick={() => setMenuOpen(false)} className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100">Tax & Planning Compliance</Link>
          <Link to="/services/other" onClick={() => setMenuOpen(false)} className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100">Other Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
