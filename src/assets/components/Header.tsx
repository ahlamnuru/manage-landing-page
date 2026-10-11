import { useState } from "react";
import Button from "./Button";
import { navLinks } from "../data/content";
import logo from "../images/logo.svg";
import iconHamburger from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg";

function Header() {
  // whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
      <img src={logo} alt="Manage" className="h-6" />

      {/* desktop menu */}
      <nav className="hidden gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="border-b-2 border-transparent py-1 text-sm text-blue-950 hover:border-orange-400"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="hidden md:block">
        <Button>Get Started</Button>
      </div>

      {/* mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      >
        <img src={menuOpen ? iconClose : iconHamburger} alt="" className="h-5" />
      </button>

      {/* mobile menu: dark overlay + white card with the links */}
      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 -z-10 bg-linear-to-b from-transparent to-gray-950/70 md:hidden"
          ></div>
          <nav className="absolute left-6 right-6 top-full flex flex-col gap-6 rounded-md bg-white py-8 text-center font-bold text-blue-950 md:hidden">
            {navLinks.map((link) => (
              <a key={link} href="#" className="hover:text-orange-400">
                {link}
              </a>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
