import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import LazyImage from "./LazyImage";
import logoImg from "../assets/logo.webp";
import { menuItems } from "../constant";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
        isScrolled ? "py-2" : "py-4"
      } dark:bg-slate-900`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="w-1/3 md:w-1/12">
            <LazyImage src={logoImg} alt="logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className="group relative px-3 py-2 text-sm font-medium text-gray-700 dark:text-slate-100 hover:text-violet-600 dark:hover:text-slate-100 transition-colors duration-300"
                >
                  {item.name}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 transform origin-left transition-transform duration-300 ${
                      location.pathname === item.url
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-violet-600 hover:bg-gray-100/50 focus:outline-none transition-colors">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                size={24}
                rounded
                easing="ease-in"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto max-h-screen overflow-y-auto"
            : "opacity-0 pointer-events-none max-h-0 overflow-y-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.url}
              className={`block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-50 transition-colors duration-300 ${
                location.pathname === item.url
                  ? "text-violet-600 bg-violet-50"
                  : ""
              }`}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
