import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "577px", // min-width
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "#f8f8f8",
        secbackground: "#cbc5be",
        trdbackground: "#3e3e3e",
        // foreground: "var(--foreground)",
        primary: "#222222", //text
        yelyow: "#ffc638",
        secondary: "#dedede", //white text
        input: "#c1bbb4",
        border: '#a0a0a0'
      },
      // fontFamily: {
      //   sans: ["var(--font-geist-sans)"],
      //   mono: ["var(--font-geist-mono)"],
      // },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
