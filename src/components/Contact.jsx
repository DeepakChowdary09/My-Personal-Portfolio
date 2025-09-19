import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Log to localhost console
    console.log("Form Data:", formData);

    // ✅ Toast confirmation
    toast.success(" Thank you for reaching out! I’ll get back to you soon 🥂");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className={`py-20 px-6 transition-colors duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
          : "bg-gradient-to-br from-[#e0eafc] via-[#cfdef3] to-[#e0eafc]"
      }`}
    >
      <div className="container mx-auto max-w-3xl">
        {/* Heading */}
        <h2
          className={`text-5xl font-extrabold mb-6 text-center drop-shadow-lg ${
            darkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400"
              : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          }`}
        >
          Let’s Connect
        </h2>
        <p
          className={`text-center mb-12 text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Have a project in mind, or just want to say hi? Drop a message and
          I’ll get back to you soon 🚀
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`p-8 rounded-2xl shadow-2xl space-y-6 backdrop-blur-md ${
            darkMode
              ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700"
              : "bg-gradient-to-br from-white/80 to-gray-100/80 border border-gray-300"
          }`}
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className={`block mb-2 text-lg font-semibold ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full p-4 rounded-xl focus:outline-none border transition-all duration-300 ${
                darkMode
                  ? "border-gray-700 bg-gray-900 text-gray-200 focus:ring-2 focus:ring-purple-500"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              }`}
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className={`block mb-2 text-lg font-semibold ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-4 rounded-xl focus:outline-none border transition-all duration-300 ${
                darkMode
                  ? "border-gray-700 bg-gray-900 text-gray-200 focus:ring-2 focus:ring-pink-500"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-500"
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className={`block mb-2 text-lg font-semibold ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full p-4 h-36 rounded-xl focus:outline-none border transition-all duration-300 ${
                darkMode
                  ? "border-gray-700 bg-gray-900 text-gray-200 focus:ring-2 focus:ring-blue-500"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-pink-500"
              }`}
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`px-8 py-3 text-lg font-bold rounded-xl shadow-xl transform transition duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:shadow-purple-500/50"
                  : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-pink-400/50"
              }`}
            >
              🚀 Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
