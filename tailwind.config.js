/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            fontFamily: {
                sans: [
                    'Josefin Sans', 'sans-serif'
                ],
                alata: ['Alata']
            },
            backgroundImage: {
                'bg-destop': "url('images/desktop/image-hero.jpg')",
                'bg-mobile': "url('images/mobile/image-hero.jpg')"
            },
            letterSpacing: {
                widest: '.3em'
            }
        }
    },
    plugins: []
}
