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
    "@typescript-eslint/semi": ["error", "never"],
    "arrow-body-style": "off",
    "react/function-component-definition": ["warn", { "namedComponents": "arrow-function" }],
    "react/destructuring-assignment": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-one-expression-per-line": "off"
  }
}
