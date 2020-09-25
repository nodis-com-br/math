# ESLint

## Typescript React Native Configuration

Install the following libraries to your project:

```
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-plugin-import eslint-import-resolver-babel-module eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-import-helpers eslint-plugin-react eslint-plugin-prettier babel-plugin-module-resolver -D
```

Then add the following code:

`.eslintrc.js`

```javascript
const { eslintConfig } = require('@nodis/math');

module.exports = {
  ...eslintConfig.typescriptReactNative,
};
```

`.babel.config.js`

```javascript
const { babelConfig } = require('@nodis/math');

module.exports = {
  plugins: [babelConfig.moduleResolver],
};
```

<br/>

## Typescript React Web Configuration

Install the following libraries to your project:

```
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-cypress eslint-plugin-prettier -D
```

Then add the following code:

`.eslintrc.js`

```javascript
const { eslintConfig } = require('@nodis/math');

module.exports = {
  ...eslintConfig.typescriptReactWeb,
};
```

<br/>

## Typescript Web (CRA)

Install the following libraries to your project:

```
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-cypress eslint-plugin-prettier eslint-import-resolver-typescript eslint-plugin-import-helpers babel-plugin-root-import customize-cra react-app-rewired -D
```

Replace start, build e test scripts (react-scripts with react-app-rewired)

Then add the following code:

`.eslintrc.js`

```javascript
const { eslintConfig } = require('@nodis/math');

module.exports = {
  ...eslintConfig.typescriptCRA,
};
```

`config-overrides.js`

```javascript
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
      rootPathPrefix: '@/',
    },
  ]),
);
```

<br/>

## Typescript Only

Install the following libraries to your project:

```
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier -D
```

Then add the following code:

`.eslintrc.js`

```javascript
const { eslintConfig } = require('@nodis/math');

module.exports = {
  ...eslintConfig.typescript,
};
```

## VS Code

Add that to your `settings.json`:

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
```

[< Go back](https://nodis-com-br.github.io/math/)
