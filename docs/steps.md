# Steps:

- Init with `npx create-next-app@latest --ts` (See [Next.js with TypeScript](https://nextjs.org/docs/basic-features/typescript))

- Move code to `src` folder and add `@` paths
  - Move files:
    ```bash
    mkdir src
    git mv pages src/
    git mv styles src/
    ```
  - Update `tsconfig.json`:
    ```json
    {
      "compilerOptions": {
        // ...
        "baseUrl": ".",
        "paths": {
          "@/*": ["./src/*"],
          "@/public/*": ["./public/*"]
        }
      },
      "include": ["next-env.d.ts", "src/**/*.ts", "src/**/*.tsx"]
    }
    ```

- Install [Airbnb Style](https://github.com/airbnb/javascript) with `npx install-peerdeps --dev eslint-config-airbnb`  
  and enhance it with [TypeScript support](https://github.com/iamturns/eslint-config-airbnb-typescript).  
  Also update eslintrc:
  ```json
  {
    "extends": [
      "airbnb",
      "airbnb-typescript",
      "next/core-web-vitals"
    ],
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "rules": {}
  }
  ```

- Add `.vscode/extensions.json` file (and install the extensions)

- Config vscode to auto-fix eslint problems.  
  In `.vscode/settings.json`:
  ```json
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  ```

- Add [Sass Support](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)
  with `npm install sass`, and rename `.css` files to `.scss`
  ```bash
  git mv src/styles/globals.css src/styles/globals.scss
  git mv src/styles/Home.module.css src/styles/Home.module.scss
  ```

- [Install Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs).  
  In `tailwind.config.js` make sure you use the paths `./src/pages/...` and `./src/components/...`

- - Install [Stylelint](https://stylelint.io/user-guide/get-started) with `stylelint-config-standard-scss`.  
  - Add [Stylelint vscode extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)  
  - Config vscode to auto-fix Stylelint problems in `.vscode/settings.json`:
    ```json
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.stylelint": true
      }
    }
    ```
  - Disable vscode's default CSS linting and use Stylelint instead.  
    In `.vscode/settings.json`:
    ```json
    {
      "css.validate": false,
      "scss.validate": false,
      "less.validate": false,
      "stylelint.validate": ["css", "scss"],
    }
    ```
  - Update `package.json`:
    ```json
    {
      "scripts": {
        "lint:eslint": "next lint",
        "lint:stylelint": "stylelint \"src/**/*.{css,scss}\" --ignore-path .gitignore",
        "lint": "npm run lint:eslint && npm run lint:stylelint"
      }
    }
    ```
  - Config Stylelint to work with Tailwind.  
    In `stylelint.config.js`:
    ```javascript
    module.exports = {
      rules: {
        'scss/at-rule-no-unknown': [true, {
          ignoreAtRules: [
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
    ```
