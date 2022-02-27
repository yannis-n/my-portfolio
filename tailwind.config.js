module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],  
  theme: {
    extend: {
      keyframes: {
        'fade-in-from-right': {
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-in-from-left': {
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
        animation: {
          'fade-in-from-right': 'fade-in-from-right 3s linear infinite',
          'fade-in-from-left': 'fade-in-from-left 3s linear infinite',
        }
    },
  },
  plugins: [],
  purge: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
   ],
}
