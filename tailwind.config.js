/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#2563EB',
        accent: '#F59E0B',
        background: '#F8FAFC',
        bodyText: '#0F172A',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 32px -12px rgba(15, 23, 42, 0.2)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        cinematicZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'cinematic-zoom': 'cinematicZoom 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
