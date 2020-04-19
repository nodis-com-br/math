# Commitizen

All frontends projects use [Commitizen](https://github.com/commitizen/cz-cli) to standardize `commit messages`.

## Recommended configuration

Install the following library to your project:

```
yarn add -DE git-cz
```

Then add the following code:

```javascript
// changelog.config.js
const { commitizenConfig } = require('@nodis/math');

module.exports = {
  ...commitizenConfig,
};
```

## Creating New Projects

Add the following script to your `package.json`:

## Commit

[< Go back](https://nodis-com-br.github.io/math/)
