# Commitizen

## Recommended configuration

Install the following libraries to your project:

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
