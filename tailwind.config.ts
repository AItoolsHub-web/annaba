import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mediterranean: '#0B5E8E',
        sand: '#E8D7B8'
      }
    }
  },
  plugins: []
} satisfies Config;
