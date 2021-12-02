module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        header: 'var(--header-bg)',
        accent: {
          br: 'var(--border-color)',
          emphasis: 'var(--accent-emphasis)',
          subtle: 'var(--color-accent-subtle)'
        },
        neutral: {
          subtle: 'var(--color-neutral-subtle)'
        }
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accent: { fg: 'var(--accent-fg)' },
        header: 'var(--text-header)',
        footer: 'var(--text-footer)',
        fg: { subtle: 'var(--text-fg-subtle)' }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
