/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        honeydew: "#E4F3E3",
        argentinianBlue: "#5CA9E9",
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
      backgroundImage: {
        "honeydew-argentinian":
          "linear-gradient(135deg, #E4F3E3 0%, #5CA9E9 100%)",
        "argentinian-honeydew":
          "linear-gradient(135deg, #5CA9E9 0%, #E4F3E3 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #E4F3E3 0%, #5CA9E9 50%, #E4F3E3 100%)",
        "section-divider":
          "linear-gradient(90deg, transparent 0%, #5CA9E9 50%, transparent 100%)",
        "button-hover": "linear-gradient(135deg, #5CA9E9 0%, #E4F3E3 100%)",
        "gradient-primary": "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #d946ef 0%, #f59e0b 100%)",
        "gradient-accent": "linear-gradient(135deg, #f59e0b 0%, #0ea5e9 100%)",
        "gradient-dark": "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        "gradient-light": "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  darkMode: "class", // Enable dark mode with 'class'
  plugins: [],
};
