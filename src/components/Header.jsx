import { Moon, Sun } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#111827] text-white"
          : "bg-gradient-to-r from-[#F9FAFB] via-[#F3F4F6] to-white text-gray-900"
      } ${scrolled ? "shadow-lg backdrop-blur-md bg-opacity-95" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Title */}
        <h1
          className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            darkMode
              ? "text-white"
              : "bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]"
          }`}
        >
          Welcome to My Portfolio
        </h1>

        {/* Navigation + Buttons */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 mt-4 sm:mt-0">
          <nav>
            <ul className="flex space-x-6 text-lg">
              {["About", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`transition duration-300 ${
                        darkMode
                          ? "text-gray-300 hover:text-[#FF6B6B]"
                          : "text-gray-700 hover:text-[#FF6B6B]"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-6 p-2 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
