/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: '#43093A',
          2: '#5C0F50',
        },
        magenta: '#A4187C',
        pink: {
          brand: '#D81B82',
        },
        rose: '#E96BAE',
        blush: {
          DEFAULT: '#FBF0F6',
          2: '#F6E4EF',
        },
        paper: '#FEFCFD',
        ink: '#271320',
        muted: '#7C6675',
        line: '#EBDDE6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(48px,7vw,104px)',
        h1: 'clamp(40px,5.2vw,76px)',
        h2: 'clamp(32px,3.6vw,52px)',
        h3: 'clamp(23px,2vw,30px)',
        lead: 'clamp(19px,1.5vw,24px)',
        body: 'clamp(16px,1.1vw,18px)',
        eyebrow: '13px',
      },
      borderRadius: {
        card: '14px',
        'card-lg': '26px',
      },
      boxShadow: {
        'sm-brand': '0 2px 14px rgba(67,9,58,.06)',
        brand: '0 18px 50px -22px rgba(67,9,58,.30)',
        'lg-brand': '0 40px 90px -40px rgba(67,9,58,.40)',
        'btn-pink': '0 14px 30px -12px rgba(216,27,130,.6)',
        'btn-pink-hover': '0 20px 40px -14px rgba(216,27,130,.7)',
        logo: '0 8px 20px -8px rgba(164,24,124,.6)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.22,.61,.36,1)',
      },
      maxWidth: {
        container: '1240px',
        narrow: '920px',
      },
    },
  },
  plugins: [],
}
