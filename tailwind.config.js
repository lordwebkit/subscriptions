/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem', // можно задать отступы по умолчанию для всех контейнеров
      screens: {
        sm: '640px', // по умолчанию
        md: '768px', // по умолчанию
        lg: '1052px', // ваш контейнер шириной 1024px
        xl: '1052px' // по умолчанию
      }
    }
  },
  plugins: []
}
