module.exports = {
  extends: [
    'stylelint-config-standard-scss'
  ],

  plugins: [],

  rules: {
    'scss/at-rule-no-unknown': [true, {
      ignoreAtRules: [
        // Tailwind words:
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen',
        'layer',
      ],
    }]
  }
}
