import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        line1Open: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '30%': {
            transform: 'translateY(4px) rotate(0deg)',
          },
          '100%': {
            transform: 'translateY(4px) rotate(-45deg)',
          },
        },
        line2Open: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '30%': {
            transform: 'translateY(-4px) rotate(0deg)',
          },
          '100%': {
            transform: 'translateY(-4px) rotate(45deg)',
          },
        },
        line1Close: {
          '0%': {
            transform: 'translateY(4px) rotate(-45deg)',
          },
          '40%': {
            transform: 'translateY(4px) rotate(0deg)',
          },
          '100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
        },
        line2Close: {
          '0%': {
            transform: 'translateY(-4px) rotate(45deg)',
          },
          '40%': {
            transform: 'translateY(-4px) rotate(0deg)',
          },
          '100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
        },
      },
      animation: {
        line1Open: 'line1Open 0.5s forwards',
        line2Open: 'line2Open 0.5s forwards',
        line1Close: 'line1Close 0.5s forwards',
        line2Close: 'line2Close 0.5s forwards',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
