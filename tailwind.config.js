/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Montserrat", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#0A66C2",
        secondary: "#6C63FF",
        accent: "#FF6B6B",
        background: "#FFFFFF",
        text: "#111827",
        honeydew: "#E4F3E3",
        argentinianBlue: "#5CA9E9",
        oldPrimary: {
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
        oldSecondary: {
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
        oldAccent: {
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
        "gradient-primary": "linear-gradient(135deg, #0A66C2 0%, #6C63FF 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #6C63FF 0%, #FF6B6B 100%)",
        "gradient-accent": "linear-gradient(135deg, #FF6B6B 0%, #0A66C2 100%)",
        "gradient-light": "linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%)",
        "gradient-dark": "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
        "honeydew-argentinian":
          "linear-gradient(135deg, #E4F3E3 0%, #5CA9E9 100%)",
        "argentinian-honeydew":
          "linear-gradient(135deg, #5CA9E9 0%, #E4F3E3 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #E4F3E3 0%, #5CA9E9 50%, #E4F3E3 100%)",
        "section-divider":
          "linear-gradient(90deg, transparent 0%, #5CA9E9 50%, transparent 100%)",
        "button-hover": "linear-gradient(135deg, #5CA9E9 0%, #E4F3E3 100%)",
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
