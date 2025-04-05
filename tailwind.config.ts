import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      lg: '1.25rem',
      xl: '1.45rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
    },
    colors: {
      ...colors,
      primary: {
        'base':'#141414',
        'highlight':'#B19707',
        'dark-bg':'#121216',
        'text':'#2D2C2C',
        'gold':'#FFAB0F',
        700: '#FF6929',
        // 700: '#03174c',
        100: '#cdd1db',
      },
      secondary: {
        700: '#EF5A5A',
        300: '#FC7D7D',
        100: '#FFDADA',
      },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    spacing: {
      none: '0px',
      xs: '8px',
      mxs:'12px',
      sm: '16px',
      msm: '20px',
      lg: '24px',
      lg: '32px',
      xl: '48px',
      '2xl': '64px',
      '3xl': '72px',
      '4xl': '80px',
      '5xl': '88px',
      '6xl': '106px',
      wrapper: '10vw',
    },
    screens: {
      sm: '640px',
      lg: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
