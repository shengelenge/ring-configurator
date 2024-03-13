import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#ffffff",
      grey: "#2c3238",
      "light-grey": "#5B5B66",
    },
    fontSize: {
      "headline-1": [
        "32px",
        {
          fontWeight: "400",
          lineHeight: "1.4",
          letterSpacing: "0.09px",
        },
      ],
      "headline-2": [
        "18px",
        {
          fontWeight: "400",
          lineHeight: "1.4",
        },
      ],
      product: [
        "16px",
        {
          lineHeight: "1.6",
          letterSpacing: "0.2px",
        },
      ],
      "main-price": [
        "23px",
        {
          fontWeight: "600",
          lineHeight: "1.4",
          letterSpacing: "1px",
        },
      ],
      price: [
        "14px",
        {
          fontWeight: "400",
          lineHeight: "22px",
          letterSpacing: "1px",
        },
      ],
    },
  },
  plugins: [],
};
export default config;
