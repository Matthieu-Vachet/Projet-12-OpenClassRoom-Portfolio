/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            fontFamily: {
                syne: ['syne', 'sans-serif'],
                'space-grotesk': ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                basicOnyx: 'rgba(24, 24, 24, 1)',
                basicWhite: 'rgba(255, 255, 255, 1)',

                topBackgroundBlue: 'rgba(63, 100, 233, 0.55)',
                topBackgroundRed: 'rgba(233, 63, 63, 0.55)',
                topBackgroundYellow: 'rgba(255, 184, 0, 0.55)',

                strockGlass: 'rgba(182, 181, 187, 0.4)',
                basicBlack: 'rgba(13, 13, 13, 1)',
                basicDarkGray: 'rgba(128, 128, 128, 1)',
                basicMediumGray: 'rgba(128, 128, 128, 0.5)',
                basicLightGray: 'rgba(197, 197, 197, 1)',
                darkWhite10: 'rgba(255, 255, 255, 0.1)',
                darkWhite25: 'rgba(255, 255, 255, 0.25)',
                darkWhite70: 'rgba(255, 255, 255, 0.7)',
                darkBlack50: 'rgba(21, 21, 21, 0.5)',
                darkCardBorder: 'rgba(56, 55, 55, 1)',
                lightCardBorder: 'rgba(235, 235, 235, 1)',
                lightCardBg: 'rgba(246, 246, 246, 1)',
                lightMainBg: 'rgba(251, 251, 251, 1)',
                lightFaintWhite: 'rgba(243, 243, 243, 1)',
                glassGlassDark60: 'rgba(24, 24, 29, 0.6)',
                glassGlassDark30: 'rgba(24, 24, 29, 0.3)',
            },
            blur: {
                none: '0',
                sm: '4px',
                DEFAULT: '8px',
                md: '12px',
                lg: '16px',
                xl: '100px',
            },
        },
    },
    plugins: [],
};
