import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-12">
      <p>&copy; {new Date().getFullYear()} Zenith Valuation. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
