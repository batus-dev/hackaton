/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        brand: 'var(--brand)',
        'brand-press': 'var(--brand-press)',
        warning: 'var(--warning)',
        border: 'var(--border)',
        success: 'var(--success)',
        error: 'var(--error)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
      },
      boxShadow: {
        '1': 'var(--shadow-1)',
        '2': 'var(--shadow-2)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
