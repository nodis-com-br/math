# Commitizen

## Recommended configuration

Install the following libraries to your project:

```
yarn add -D git-cz @commitlint/config-conventional husky
```

Then add the following code:

```javascript
// changelog.config.js
const { commitizenConfig } = require('@nodis/math');

module.exports = {
  ...commitizenConfig,
};

// commitlint.config.js
const { commitizenConfig } = require('@nodis/math');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', commitizenConfig.list],
  },
};

// package.json
  "husky": {
    "hooks": {
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
    }
  },
```
