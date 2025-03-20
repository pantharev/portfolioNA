/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#7B2CBF',
          blue: '#3A86FF'
        },
        background: '#121212',
        text: '#E0E0E0'
      },
      margin: {
        'layout': '100px'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#E0E0E0',
            h1: { color: '#E0E0E0' },
            h2: { color: '#E0E0E0' },
            h3: { color: '#E0E0E0' },
            h4: { color: '#E0E0E0' },
            strong: { color: '#E0E0E0' },
            code: { color: '#E0E0E0' },
            blockquote: { color: '#E0E0E0' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}