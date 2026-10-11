export default function Footer() {
  return (
    <footer className="bg-very-dark-blue py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-12">
        
        {/* Left Column: Social Icons & Logo */}
        <div className="flex flex-col-reverse md:flex-col items-center md:items-start justify-between space-y-12 md:space-y-16">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-75 transition-opacity">
              <img src="/images/icon-facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-75 transition-opacity">
              <img src="/images/icon-youtube.svg" alt="YouTube" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75 transition-opacity">
              <img src="/images/icon-twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:opacity-75 transition-opacity">
              <img src="/images/icon-pinterest.svg" alt="Pinterest" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
              <img src="/images/icon-instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>

          {/* White Logo */}
          <div>
            <img src="/images/logo-white.svg" alt="Manage Logo" className="h-6" />
          </div>
        </div>

        {/* Middle Columns: Navigation Links */}
        <div className="flex justify-around w-full md:w-1/3 text-sm space-x-8">
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-bright-red transition-colors">Home</a>
            <a href="#" className="hover:text-bright-red transition-colors">Pricing</a>
            <a href="#" className="hover:text-bright-red transition-colors">Products</a>
            <a href="#" className="hover:text-bright-red transition-colors">About Us</a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-bright-red transition-colors">Careers</a>
            <a href="#" className="hover:text-bright-red transition-colors">Community</a>
            <a href="#" className="hover:text-bright-red transition-colors">Privacy Policy</a>
          </div>
        </div>

        {/* Right Column: Copyright Info */}
        <div className="flex flex-col items-center md:items-end justify-between space-y-8 md:space-y-16 w-full md:w-auto">
          <div className="text-dark-grayish-blue text-sm">
            Copyright 2026. All Rights Reserved
          </div>
        </div>

      </div>
    </footer>
  );
}