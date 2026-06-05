/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#E0A11B",
          "gold-light": "#F6D77A",
          emerald: "#2F8F83",
          midnight: "#24160A",
          slate: "#FFF5D9",
          mist: "#FFFDF5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-premium":
          "linear-gradient(135deg, rgba(224,161,27,0.24) 0%, rgba(255,245,217,0.82) 48%, rgba(255,255,255,0.55) 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.82) 0%, rgba(255,244,212,0.55) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        glass: "0 20px 45px rgba(171, 117, 17, 0.12)",
        premium: "0 30px 70px -24px rgba(138, 97, 23, 0.35)",
        glow: "0 0 70px rgba(224, 161, 27, 0.22)",
      },
    },
  },
  plugins: [],
};
