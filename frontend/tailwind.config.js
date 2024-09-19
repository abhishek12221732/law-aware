module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-down-fast': 'fadeInDownFast 0.5s ease-out forwards',
        'fade-in-up-fast': 'fadeInUpFast 0.5s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'fade-in-left-fast': 'fadeInLeftFast 0.5s ease-out forwards',
        'fade-in-right-fast': 'fadeInRightFast 0.5s ease-out forwards',
        'wave-bg': 'waveBorder 3s infinite ease-in-out',
      },
      colors:{
        gold: '#FFD700',
      },
      keyframes: {
        fadeInDownFast: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUpFast: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        waveBorder: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        fadeInLeftFast: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRightFast: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      borderImage: {
        gradient: 'linear-gradient(258.44deg, #FAD47D 4.55%, #AB7529 42.13%, #D3A553 82.84%) 1',
      },
      boxShadow: {
        glow: '0 0 15px rgba(250, 212, 125, 0.7)',
      },
      fontSize: {
        '4xl': '2.5rem', // Example of a new size larger than 3xl
        '5xl': '3rem',   // Example of an even larger size
        '6xl': '4rem',   // Example of an even larger size
        '7xl': '5rem',   // Example of an even larger size
      },
    },
  },
  plugins: [],
}
