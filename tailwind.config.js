/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                meditation: {
                    50: '#f5f3ff',
                    100: '#ede9fe', // Very light purple
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed', // Primary purple
                    700: '#6d28d9',
                    800: '#5b21b6', // Deep purple
                    900: '#4c1d95',
                    950: '#2e1065',
                }
            },
            fontFamily: {
                sans: ['"GmarketSansMedium"', '"GmarketSansLight"', '"GmarketSansBold"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            },
            animation: {
                'fade-in': 'fade-in 0.3s ease-out',
                'slide-up': 'slide-up 0.4s ease-out',
            }
        },
    },
    plugins: [],
}
