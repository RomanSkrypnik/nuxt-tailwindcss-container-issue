import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  content: [
    './app.vue'
  ],
  screens: {
    ...defaultTheme.screens,
    'xxs': '320px',
    'se': '375px',  // @todo replace xs with that breakpoint
    'xs': '380px',
    'xsm': '390px',
    'xm': '480px',  // xm (xs medium)
    '3xl': '1920px',
    '2.5xl': '1600px',
    '2xl': '1440px',
  },
  container: {
    center: true,
    screens: {
      '2xl': '1512px',
      'xl': '1280px',
      'md': '728px'
    },
    padding: {
        DEFAULT: '1rem',
        'xl': '2.25rem'
    }
  },
}
