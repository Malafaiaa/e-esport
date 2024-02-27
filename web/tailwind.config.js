/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
    
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter', 'Sans-serif']
        
      },
      backgroundImage: {
        galaxy: "url('/Fundo.png')",
        'gradient': 'linear-gradient(70.86deg, #9572FC 28.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',

      },
    },
  },
  plugins: [],
}

//background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 6.08%)