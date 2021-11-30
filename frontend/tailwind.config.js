module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: {
          br: 'var(--border-color)',
          emphasis: 'var(--accent-emphasis)',
          subtle: 'var(--color-accent-subtle)'
        }
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accent: { fg: 'var(--accent-fg)' },
        header: 'var(--text-header)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
