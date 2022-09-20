import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'
const defaultTheme = require('tailwindcss/defaultTheme')

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  darkMode: 'class',
  plugins: [
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/aspect-ratio'),
    plugin(({ addComponents, addDynamic, variants }) => {
      const styles = {
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.shadow-out-sm': {
          'box-shadow':
            '0 0 10px rgb(120 120 120 / 10%), 0 5px 20px rgb(120 120 120 / 20%)',
        },
      }
      addComponents(styles)
      addDynamic(
        'contain-intrinsic',
        ({ Utility, Style }) => {
          return Utility.handler
            .handleStatic(Style('contain-intrinsic'))
            .handleNumber(0, Infinity, 'int', (number) => `${number}px`)
            .handleSize((size) => {
              return size
            })
            .createProperty('contain-intrinsic-size')
        },
        variants('contain-intrinsic'),
      )
    }),
  ],
  theme: {
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
        phone: { raw: '(max-width: 568px)' },
        desktop: { raw: '(min-width: 1100px)' },
        tablet: { raw: '(max-width: 1099px)' },
        wider: { raw: '(min-width: 1500px)' },
        w900: { raw: '(max-width: 900px)' },
      },
      fontFamily: {
       ui: ['FZMiaoWu', ...defaultTheme.fontFamily.sans],
       content: ['Noto Sans TC', 'Noto Sans SC', '微軟正黑體', ...defaultTheme.fontFamily.serif],
      }
    },
  },
})
