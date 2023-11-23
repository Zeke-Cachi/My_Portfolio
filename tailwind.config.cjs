/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      mainbg: "#333333",
      primary: "#fa8500",
      secondary: "#545454",
      white: "#fff",
      black: "#000",
    },
    extend: {
      rotate: {
        Y: "rotateY(180deg)",
      },
      backgroundImage: {
        stackLeft: "linear-gradient(to left, transparent, #333333 25%)",
        stackRight: "linear-gradient(to right, transparent, #333333 25%)",
        calculator: 'url("/projects/check-splitter-2.png")',
        database: 'url("/projects/movie-database.png")',
        musicStore: 'url("/projects/music-store.png")',
        portfolio: 'url("/projects/portfolio.png")',
        weather: 'url("/projects/weather-app.png")',
        generic_ecommerce: 'url("/projects/ecommerce.jpg")',
      },
      width: {
        calc: "calc(11rem * 12)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        showUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        stretch: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        aboutStretch: {
          "0%": { width: "0%" },
          "100%": { width: "98%" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(2rem)" },
          "100%": { opacity: "1", transform: "translateX(0rem)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "90%": { opacity: ".7", transform: "translateY(.5rem)" },
          "100%": { opacity: "1", transform: "translateY(0rem)" },
        },
        buttonShow: {
          "0%": { opacity: "0" },
          "80%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        stackSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        pulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        click: {
          "0%": { color: "mainbg" },
          "100%": { color: "secondary" },
        },
      },
      animation: {
        appear: "showUp 500ms ease-in-out",
        line: "stretch 250ms ease-in-out",
        aboutLine: "aboutStretch 1s ease-in-out",
        contactLine: "stretch 1.5s ease-in-out",
        headerBottom: "stretch 1s ease-in-out",
        slideFromRight: "slideIn 1.5s ease-in",
        h1Slide: "slideUp 500ms ease-in",
        pSlide: "slideUp 1s ease-in",
        formName: "buttonShow 1s ease-in",
        formLastname: "buttonShow 1.2s ease-in",
        formPhone: "buttonShow 1.4s ease-in",
        formEmail: "buttonShow 1.6s ease-in",
        formCommentary: "buttonShow 1.8s ease-in",
        formButton: "buttonShow 2s ease-in",
        button: "buttonShow 1.5s ease-in",
        stack: "stackSlide 30s infinite linear",
        pulsing: "pulse 2s infinite",
        clickHere: "click 5s ease-in",
      },
      boxShadow: {
        solidOrange: "0 0 0 2px #fa8500",
        solidWhite: "0 0 0 2px #fff",
        solidSecondary: "0 0 0 5px #545454",
      },
    },
  },
  plugins: [],
};
