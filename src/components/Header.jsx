import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-teal-300 via-purple-300 to-blue-200 text-gray-900"
      } ${scrolled ? "shadow-xl backdrop-blur-md bg-opacity-90" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center sm:flex-row sm:justify-between">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-center sm:text-left">
          Welcome to My Portfolio
        </h1>

        {/* Nav + Buttons */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-6 mt-4 sm:mt-0">
          <nav>
            <ul className="flex space-x-6 text-lg">
              {["About", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:text-white transition duration-300 ease-in-out"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Buttons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <button
              onClick={toggleDarkMode}
              className="bg-gray-800 text-white px-2 hover:bg-gray-700"
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
