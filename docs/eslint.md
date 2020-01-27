# ESLint

## Typescript React Native Configuration

Install the following libraries to your project:

```
yarn add -DE @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-plugin-import eslint-import-resolver-babel-module eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier babel-plugin-module-resolver @babel/core @babel/runtime
```

Then add the following code:

```javascript
// .eslintrc.js
const { eslintConfig } = require('@nodis/math');

module.exports = {
  ...eslintConfig.typescriptReactNative,
};
```

```javascript
// babel.config.js
const { babelConfig } = require('@nodis/math');

module.exports = {
  plugins: [babelConfig.moduleResolver],
};
```

## Typescript React Web Configuration

Install the following libraries to your project:

```
yarn add -DE @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-cypress eslint-plugin-prettier
```

Then add the following code:

```javascript
// .eslintrc.js
const { eslintConfig } = require('@nodis/math');

module.exports = {
  ...eslintConfig.typescriptReactWeb,
};
```

## Typescript Only

Install the following libraries to your project:

```
yarn add -DE @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier
```

Then add the following code:

```javascript
// .eslintrc.js
const { eslintConfig } = require('@nodis/math');

module.exports = {
  ...eslintConfig.typescript,
};
```
