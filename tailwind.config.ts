import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        background: "#0f0f0f",
        foreground: "var(--foreground)",
      },
      backgroundOpacity: {
        15: "0.15",
      },
    },
  },
  plugins: [],
} satisfies Config;
