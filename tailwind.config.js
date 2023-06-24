/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "rgb(var(--color-brand) / <alpha-value>)",
        body: "#ffffff",
        dark: "#ffffff",
        "light-dark": "#171e2e",
        "sidebar-body": "#F8FAFC",
      },
      spacing: {
        13: "3.375rem",
      },
      margin: {
        "1/2": "50%",
      },
      padding: {
        full: "100%",
      },
      width: {
        "calc-320": "calc(100% - 320px)",
        "calc-358": "calc(100% - 358px)",
      },
      fontSize: {
        "13px": ["13px", "18px"],
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        main: "0px 6px 18px rgba(0, 0, 0, 0.04)",
        light: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        large: "0px 8px 16px rgba(17, 24, 39, 0.1)",
        card: "0px 2px 6px rgba(0, 0, 0, 0.06)",
        transaction: "0px 8px 16px rgba(17, 24, 39, 0.06)",
        expand: "0px 0px 50px rgba(17, 24, 39, 0.2)",
        button:
          "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        main: "0px 4px 8px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        blink: "blink 1.4s infinite both;",
        "move-up": "moveUp 500ms infinite alternate",
        "scale-up": "scaleUp 500ms infinite alternate",
        "drip-expand": "expand 500ms ease-in forwards",
        "drip-expand-large": "expand-large 600ms ease-in forwards",
        "move-up-small": "moveUpSmall 500ms infinite alternate",
      },
      fontFamily: {
        archive: "Archive",
        open: "Open Sans",
        razed: "Razed",
      },
    },
    dropShadow: {
      gold: "12px 12px 70px rgba(250, 234, 16, 0.7)",
      gold2: "1px 1px 4px #faea10",
      gold3: "1px 1px 10px #faea10",
      yellow: "1px 1px 4px #111",
      news: " 0px -4px 16px rgb(171 84 244 )",
    },
    animation: {
      text: "text 5s ease infinite",
      marquee: "marquee 25s linear infinite",
      marquee2: "marquee2 25s linear infinite",
      marque3: "marque3 25s linear infinite",
      marque4: "marque4 25s linear infinite",
    },
    keyframes: {
      text: {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
      marque3: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(100%)" },
      },
      marque4: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0%)" },
      },
      blink: {
        "0%": { opacity: 0.2 },
        "20%": { opacity: 1 },
        "100%": { opacity: 0.2 },
      },
      expand: {
        "0%": {
          opacity: 0,
          transform: "scale(1)",
        },
        "30%": {
          opacity: 1,
        },
        "80%": {
          opacity: 0.5,
        },
        "100%": {
          transform: "scale(30)",
          opacity: 0,
        },
      },
      "expand-large": {
        "0%": {
          opacity: 0,
          transform: "scale(1)",
        },
        "30%": {
          opacity: 1,
        },
        "80%": {
          opacity: 0.5,
        },
        "100%": {
          transform: "scale(96)",
          opacity: 0,
        },
      },
      moveUp: {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(-20px)" },
      },
      moveUpSmall: {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(-10px)" },
      },
      scaleUp: {
        "0%": { transform: "scale(0)" },
        "100%": { transform: "scale(1)" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
