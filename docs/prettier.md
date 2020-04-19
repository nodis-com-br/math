# Prettier

All frontends projects use [Prettier](https://prettier.io/) to auto-format all files.

## Configuration

Install the following libraries to your project:

```
yarn add -DE prettier
```

Then add the following code:

```javascript
// .prettierrc.js
const { prettierConfig } = require('@nodis/math');

module.exports = {
  ...prettierConfig,
};
```

## VS Code

Add that to your `settings.json`:

```json
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],
  "editor.formatOnSave": true
```

[< Go back](https://nodis-com-br.github.io/math/)
