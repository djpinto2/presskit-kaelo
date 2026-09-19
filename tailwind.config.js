/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        blood: 'var(--blood)',
        ash: 'var(--ash)',
        coal: 'var(--coal)',
        line: 'var(--line)',
      },
    },
  },
  plugins: [],
};
