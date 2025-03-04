/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#12225a",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#974672",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        "picton-blue": {
          50: "#eef7ff",
          100: "#daedff",
          200: "#bde1ff",
          300: "#90ceff",
          400: "#5ab2ff",
          500: "#3592fc",
          600: "#1f73f1",
          700: "#175cde",
          800: "#194bb4",
          900: "#1a428e",
          950: "#152a56",
        },
        "sandy-brown": {
          50: "#fff6ed",
          100: "#ffebd4",
          200: "#ffd3a9",
          300: "#ffa75a",
          400: "#fe8939",
          500: "#fc6813",
          600: "#ed4d09",
          700: "#c53809",
          800: "#9c2d10",
          900: "#7e2710",
          950: "#441106",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
