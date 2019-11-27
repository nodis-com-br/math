# ESLint

## Typescript React Configuration

Install the following libraries to your project:

```
yarn add -D eslint eslint-config-airbnb-typescript eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```

Then add the following code:

```javascript
// .eslintrc.js
const { eslintconfig } = require("@nodis/math");

module.exports = {
  ...eslintconfig.typescriptReact
};
```
