import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click - scroll to top
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  // Navigation links configuration
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="group flex items-center gap-4 transition-all duration-300 hover:opacity-80"
          >
            <div className="relative">
              {/* Animated background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
              
              {/* Logo container */}
              <div className="relative w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-105">
                <span className="text-xl font-serif font-bold text-gray-900 tracking-tight">
                  M
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-light text-white tracking-wide group-hover:text-amber-400 transition-colors duration-300">
                Magpie
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 group-hover:text-amber-400/70 transition-colors duration-300 -mt-0.5">
                Fine Dining
              </span>
            </div>
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleNavClick}
                className={`relative px-5 py-2 text-sm font-light tracking-wide transition-all duration-300 ${
                  pathname === link.to
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                
                {/* Active indicator */}
                {pathname === link.to && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-amber-400 rounded-full"></span>
                )}
                
                {/* Hover underline */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-400/50 rounded-full transition-all duration-300 ${
                  pathname !== link.to && "group-hover:w-4"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* Call Button - Desktop */}
            <a
              href="tel:01224500030"
              className="hidden md:flex items-center gap-2 text-sm font-light text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Call us at 01224500030"
            >
              <span>01200000000</span>
              <span className="w-px h-4 bg-white/20"></span>
              <span className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Call
              </span>
            </a>

            {/* Reserve Button - Desktop */}
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105"
            >
              Reserve
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-11 h-11 rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5">
                <span
                  className={`block w-5 h-px bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-px bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-px bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-white/10 mt-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleNavClick}
                  className={`px-4 py-3 rounded-xl text-base font-light tracking-wide transition-all duration-300 ${
                    pathname === link.to
                      ? "bg-white/5 text-amber-400"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:01224500030"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-xl text-sm transition-all duration-300"
                aria-label="Call us at 01224500030"
              >
                <span>01200000000</span>
              </a>
              
              <Link
                to="/contact"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 px-4 rounded-xl text-sm transition-all duration-300"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;