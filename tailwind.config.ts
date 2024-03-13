const svgToDataUri = require('mini-svg-data-uri');

const colors = require('tailwindcss/colors');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                basicOnyx: 'rgba(24, 24, 24, 1)',
                basicWhite: 'rgba(255, 255, 240, 1)',
                strockGlass: 'rgba(182, 181, 187, 0.4)',
                basicBlack: 'rgba(13, 13, 13, 1)',
                basicDarkGray: 'rgba(128, 128, 128, 1)',
                darkWhite10: 'rgba(255, 255, 255, 0.1)',
                glassGlassDark60: 'rgba(24, 24, 29, 0.6)',
                glassGlassDark30: 'rgba(24, 24, 29, 0.3)',
                borderGlass: 'rgba(255, 255, 255, 0.5)',
                borderGlassBtn: 'rgba(128, 128, 128, 0.1)',
                button1: '#0ce39a',
                button2: '#69007f',
                button3: '#fc0987',
            },
            spacing: {
                '1': '1rem',
                '2': '2rem',
                '3': '3rem',
                '4': '4rem',
                '5': '5rem',
                '6': '6rem',
                '7': '7rem',
                '8': '8rem',
                '9': '9rem',
                '10': '10rem',
            },
        },
    },
    variants: {
        extend: {
            
            
        },
    },
    plugins: [
        function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    'bg-grid': (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                        )}")`,
                    }),
                    'bg-grid-small': (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                        )}")`,
                    }),
                    'bg-dot': (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
                        )}")`,
                    }),
                },
                { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
            );
        },
    ],
};
