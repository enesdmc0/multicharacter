import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#444B5B",
        color2: "#878C94",
        color3: "#FF5934",
        color4: "#D9D9D9",
        color5: "#C4B28C",
        color6: "#CD5A57",
        color7: "",
        color8: "",
        color9: "",
        color10: "",

      }
    },
  },
  plugins: [],
};
export default config;
