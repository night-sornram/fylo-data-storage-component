import type { Config } from 'tailwindcss'
const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(243, 100%, 93%)",
      "200" : "hsl(229, 7%, 55%)",
      "300" : "hsl(228, 56%, 26%)",
      "400" : "hsl(229, 57%, 11%)",
      "500" : "hsl(6, 100%, 80%)",
      "600" : "hsl(335, 100%, 65%)",
    }
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors,
      
    },
  },
  plugins: [],
}
export default config
