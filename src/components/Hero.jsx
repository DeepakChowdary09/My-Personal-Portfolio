import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Hero = ({ darkMode }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Full-Stack Developer",
    "React Expert",
    "UI/UX Designer",
    "Problem Solver",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#111827]"
          : "bg-gradient-to-br from-[#FFF5F5] via-[#FDF2F2] to-white"
      }`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Name */}
          <h1
            className={`text-6xl md:text-8xl font-bold mb-6 font-['Montserrat'] tracking-tight ${
              darkMode
                ? "text-white drop-shadow-[0_0_12px_rgba(255,107,107,0.4)]"
                : "bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]"
            }`}
          >
            Deepak Nekkanti
          </h1>

          {/* Typing Effect */}
          <div className="text-2xl md:text-3xl mb-8 font-['Inter']">
            <span className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              I&apos;m a{" "}
            </span>
            <span
              className={`font-bold border-b-2 ${
                darkMode
                  ? "text-[#FF6B6B] border-[#FF6B6B]"
                  : "text-[#FF6B6B] border-[#FF6B6B]"
              }`}
            >
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-md hover:scale-105 ${
                darkMode
                  ? "bg-[#FF6B6B] text-white hover:shadow-[#FF6B6B]/50"
                  : "bg-[#FF6B6B] text-white hover:shadow-[#FF6B6B]/70"
              }`}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "border-gray-400 text-gray-300 hover:bg-gray-800 hover:border-gray-300"
                  : "border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white"
              }`}
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            {[
              {
                name: "GitHub",
                icon: "🐙",
                url: "https://github.com/DeepakChowdary09",
              },
              {
                name: "LinkedIn",
                icon: "💼",
                url: "https://www.linkedin.com/in/deepaknekkanti",
              },
              {
                name: "Twitter",
                icon: "🐦",
                url: "https://x.com/DeepaK_09N?s=09",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-4xl transition-transform duration-300 hover:scale-125 ${
                  darkMode
                    ? "text-gray-400 hover:text-[#FF6B6B]"
                    : "text-gray-600 hover:text-[#FF6B6B]"
                }`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Hero;
