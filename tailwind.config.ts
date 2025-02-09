import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontSize: {
        h1: ['48px', '1.4'],
        h2: ['40px', '1.4'],
        h3: ['32px', '1.4'],
        h4: ['24px', '1.4'],
        h5: ['20px', '1.4'],
        h6: ['18px', '1.4'],
        body: ['16px', '1.4'],
        small: ['14px', '1.4'],
        tiny: ['12px', '1.4'],
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
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
        scroll: 'scroll 35s linear infinite',
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
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
