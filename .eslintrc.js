// Disable a11y plugin (used by airbnb)
// See https://github.com/airbnb/javascript/issues/2032#issuecomment-568934232
const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules)
	.reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc }, {})

module.exports = {
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "next/core-web-vitals"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    ...a11yOff, // (remove this line if you want the a11y plugin)
    "@typescript-eslint/semi": ["error", "never"],
    "arrow-body-style": "off",
    "import/prefer-default-export": "off",
    "import/order": ["error", {
      "alphabetize": {"order": "asc", "caseInsensitive": true},
      "groups": ["builtin", "external", "internal", ["parent", "sibling"], "index", "object", "type"]
    }],
    "react/function-component-definition": ["warn", { "namedComponents": "arrow-function" }],
    "react/destructuring-assignment": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-one-expression-per-line": "off"
  }
}
