import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brandPurple: {
          '50': '#f4f1ff',
          '100': '#ebe6ff',
          '200': '#d8d0ff',
          '300': '#bdaaff',
          '400': '#9d7bff',
          '500': '#7f45ff',
          '600': '#721fff',
          '700': '#640ef3',
          '800': '#530bcc',
          '900': '#460ba7',
          main: '#180243',
        },
        brandBlue: {
          '50': '#edf8ff',
          '100': '#d7edff',
          '200': '#b7e1ff',
          '300': '#85d1ff',
          '400': '#4cb6ff',
          '500': '#2393ff',
          '600': '#0c73ff',
          '700': '#055bf0',
          main: '#0c4dcc',
          '900': '#104198',
          '950': '#0f295c',
        },
        brandAccent: {
          '50': '#ebfffd',
          '100': '#cdfffd',
          '200': '#a2fffd',
          '300': '#62fefe',
          main: '#0ff1f5',
          '500': '#00d4dc',
          '600': '#02aab8',
          '700': '#098795',
          '800': '#116c79',
          '900': '#135966',
          '950': '#063b46',
        },
      },
    },
  },
  plugins: [],
};
export default config;
