import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Dark Mode Base
        'midnight': '#0a0a0f',
        'charcoal': '#1a1a2e',
        'deep-blue': '#16213e',
        'slate': '#2d3748',
        
        // Vibrant Accent Colors
        'amethyst': '#8b5cf6',
        'cerulean': '#3b82f6',
        'electric': '#06b6d4',
        'neon-pink': '#ec4899',
        'gold': '#f59e0b',
        
        // Soft Gradients
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2',
        'nebula-start': '#4c1d95',
        'nebula-end': '#7c3aed',
        
        // Legacy colors for compatibility
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#1a1a2e',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'accent-teal': '#7DD3C0',
        'accent-hover': '#6BC4B0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'nebula': 'nebula 8s ease-in-out infinite',
        'starlight': 'starlight 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        nebula: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        starlight: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'nebula': 'linear-gradient(45deg, #4c1d95, #7c3aed, #8b5cf6, #3b82f6)',
        'starlight': 'radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
        'galaxy': 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
export default config;