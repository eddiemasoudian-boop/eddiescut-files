import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          olive: "#4a5d4e",
          charcoal: "#0f172a",
          offwhite: "#f8fafc",
        },
      },
      minHeight: {
        'touch': '48px',
      },
      minWidth: {
        'touch': '48px',
      }
    },
  },
  plugins: [],
};
export default config;