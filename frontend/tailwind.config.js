/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Flow Brand Colors
        'flow-primary': 'var(--flow-primary)',
        'flow-primary-dark': 'var(--flow-primary-dark)',
        'flow-primary-light': 'var(--flow-primary-light)',
        'flow-secondary': 'var(--flow-secondary)',
        'flow-accent': 'var(--flow-accent)',
        
        // Background Colors
        'bg-base': 'var(--bg-base)',
        'bg-surface': 'var(--bg-surface)',
        'bg-surface-2': 'var(--bg-surface-2)',
        'bg-surface-hover': 'var(--bg-surface-hover)',
        
        // Text Colors
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-dim': 'var(--text-dim)',
        'text-muted': 'var(--text-muted)',
        
        // Brand Colors
        brand: 'var(--flow-primary)',
        'brand-hover': 'var(--flow-primary-dark)',
        'brand-light': 'var(--brand-light)',
        'brand-border': 'var(--brand-border)',
        
        // Border Colors
        'border-color': 'var(--border-color)',
        'border-light': 'var(--border-light)',
        
        // Legacy colors for compatibility
        bg: 'var(--bg-base)',
        surface: 'var(--bg-surface)',
        'surface-2': 'var(--bg-surface-2)',
        text: 'var(--text-primary)',
        'text-dim': 'var(--text-dim)',
        'brand-press': 'var(--flow-primary-dark)',
        warning: '#F5C451',
        border: 'var(--border-color)',
        success: '#22C55E',
        error: '#EF4444',
        
        // Shadcn/ui colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px'
      },
      boxShadow: {
        'flow-sm': '0 2px 8px rgba(0,0,0,.15)',
        'flow-md': '0 4px 16px rgba(0,0,0,.25)',
        'flow-lg': '0 8px 32px rgba(0,0,0,.35)',
        'flow-xl': '0 16px 48px rgba(0,0,0,.45)',
        'flow-brand': '0 4px 16px rgba(33, 219, 170, 0.25)',
        'flow-glow': '0 0 20px rgba(33, 219, 170, 0.1)',
        // Legacy shadows
        '1': '0 2px 8px rgba(0,0,0,.15)',
        '2': '0 8px 32px rgba(0,0,0,.35)',
      },
      fontFamily: {
        sans: ['"Roboto"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Consolas', '"Liberation Mono"', 'Menlo', 'monospace'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
      },
      maxWidth: {
        'container': '1280px',
      },
      animation: {
        'flow-fade-in': 'flow-fade-in 0.5s ease-out forwards',
        'flow-slide-in': 'flow-slide-in 0.4s ease-out forwards',
        'flow-pulse': 'flow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow-glow': 'flow-glow 3s ease-in-out infinite',
        'loading-shimmer': 'loading-shimmer 1.5s ease-in-out infinite',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
      backdropBlur: {
        'flow': '20px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
