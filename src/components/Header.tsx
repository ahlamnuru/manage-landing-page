import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
      <img src="/images/logo.svg" alt="Manage Logo" className="h-6" />

      <nav className="hidden md:flex space-x-8 text-sm font-medium text-dark-blue">
        <a href="#pricing" className="hover:text-dark-grayish-blue transition-colors">Pricing</a>
        <a href="#product" className="hover:text-dark-grayish-blue transition-colors">Product</a>
        <a href="#about" className="hover:text-dark-grayish-blue transition-colors">About Us</a>
        <a href="#careers" className="hover:text-dark-grayish-blue transition-colors">Careers</a>
        <a href="#community" className="hover:text-dark-grayish-blue transition-colors">Community</a>
      </nav>

      <button className="hidden md:block bg-bright-red text-white px-7 py-3 rounded-full font-medium shadow-lg shadow-bright-red/30 hover:opacity-80 transition-opacity">
        Get Started
      </button>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
        <img src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} alt="Toggle Menu" />
      </button>

      {isOpen && (
        <div className="absolute top-24 left-6 right-6 bg-white rounded-md shadow-2xl py-10 flex flex-col items-center space-y-6 md:hidden font-bold text-dark-blue z-50">
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#product" onClick={() => setIsOpen(false)}>Product</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#careers" onClick={() => setIsOpen(false)}>Careers</a>
          <a href="#community" onClick={() => setIsOpen(false)}>Community</a>
        </div>
      )}
    </header>
  );
}