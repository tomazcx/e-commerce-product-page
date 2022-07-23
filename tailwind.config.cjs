/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.tsx'],
    theme: {
        extend: {
            keyframes: {
                show: {
                    '0%': { transform: 'translate(-10%, 0)' },
                    '100%': { transform: 'translate(0, 0)' },
                },
            },
            animation: {
                'show-sidebar': 'show .5s forwards',
            },
            fontFamily: {
                sans: 'Kumbh Sans, sans-serif'
            },
            colors: {
                orange: {
                    400: 'hsl(26, 100%, 55%)',
                    100: 'hsl(25, 100%, 94%)',
                },
                blue: {
                    900: 'hsl(220, 13%, 13%)',
                },
                gray: {
                    500: 'hsl(219, 9%, 45%)',
                    300: 'hsl(220, 14%, 75%)',
                    50: 'hsl(223, 64%, 98%)'
                }
            },
        },
    },
    plugins: [],
}