module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7C3AED",
          dark: "#5B21B6",
          accent: "#06B6D4"
        },
        ui: {
          900: "#0b0f14",
          800: "#0f1720",
          700: "#111827"
        }
      },
      fontFamily: {
        heading: ["Inter", "system-ui", "Arial"],
        body: ["Noto Naskh Arabic", "Inter", "system-ui"]
      }
    }
  },
  plugins: []
};
