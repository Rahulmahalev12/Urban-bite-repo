/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FBF9F4',
          200: '#F5F2EB',
          300: '#EDE8DD',
          400: '#E0D8C7',
        },
        olive: {
          50: '#F4F6F2',
          100: '#E6ECE2',
          200: '#CAD8C3',
          300: '#9DB393',
          400: '#6E8A63',
          500: '#4D6843',
          600: '#3D5435',
          700: '#32452B',
          800: '#273622',
          900: '#1D2819',
          950: '#121B0F',
        },
        gold: {
          300: '#E9D6A4',
          400: '#DDC283',
          500: '#C5A059',
          600: '#AC853F',
          700: '#8A682D',
        },
        charcoal: {
          700: '#3C4239',
          800: '#2A2F28',
          900: '#1C1F1B',
          950: '#121411',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(29, 40, 25, 0.06), 0 1px 4px -1px rgba(29, 40, 25, 0.04)',
        'elevated': '0 8px 24px -4px rgba(29, 40, 25, 0.08), 0 2px 6px -2px rgba(29, 40, 25, 0.04)',
      }
    },
  },
  plugins: [],
}
