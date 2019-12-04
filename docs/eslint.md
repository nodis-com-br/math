# ESLint

## Typescript React Native Configuration

Install the following libraries to your project:

```
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-plugin-import eslint-import-resolver-babel-module eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
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
// .babel.config.js
const { babelConfig } = require('@nodis/math');

module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['react-native-paper/babel'], babelConfig.moduleResolver],
  };
};
```

## Typescript React Web Configuration

Install the following libraries to your project:

```
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-cypress
```

Then add the following code:

```javascript
// .eslintrc.js
const { eslintConfig } = require('@nodis/math');

module.exports = {
  ...eslintConfig.typescriptReactWeb,
};
```
