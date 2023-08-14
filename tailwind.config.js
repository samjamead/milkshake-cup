/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        perano: {
          50: "#f1f6fd",
          100: "#dfecfa",
          200: "#c6ddf7",
          300: "#a5ccf3",
          400: "#70aaea",
          500: "#4e8be3",
          600: "#396fd7",
          700: "#305bc5",
          800: "#2d4ba0",
          900: "#29417f",
          950: "#1d294e",
        },
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
};
