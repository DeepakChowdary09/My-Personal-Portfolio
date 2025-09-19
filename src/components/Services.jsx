import { Code, Link2, Smartphone } from "lucide-react";
import PropTypes from "prop-types";

const Services = ({ darkMode }) => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Building dynamic, responsive websites using React, Node.js, and MongoDB to create seamless user experiences.",
      icon: <Code className="w-12 h-12" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile applications using React Native, ensuring smooth performance on both iOS and Android.",
      icon: <Smartphone className="w-12 h-12" />,
    },
    {
      title: "API Integration",
      description:
        "Integrating third-party APIs and developing custom APIs to enhance functionality and provide robust data management.",
      icon: <Link2 className="w-12 h-12" />,
    },
  ];

  return (
    <section
      id="services"
      className={`py-20 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#111827] text-white"
          : "bg-gradient-to-r from-[#F9FAFB] via-[#F3F4F6] to-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-12 tracking-tight">
          My Services
        </h1>
        <p className="text-center text-lg mb-16 max-w-2xl mx-auto opacity-90">
          🚀 Offering end-to-end development solutions for modern web and mobile
          applications.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm ${
                darkMode ? "bg-white/5 text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 text-[#FF6B6B]">
                {service.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold mb-4 text-center">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-center mb-6 opacity-90">
                {service.description}
              </p>

              {/* Learn More Button */}
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block px-6 py-2 rounded-full font-medium transition-colors duration-300 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white hover:opacity-90"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Services;
