# Commitizen

All frontends projects use [Commitizen](https://github.com/commitizen/cz-cli) to standardize `commit messages`.
<br/><br/>

## Recommended configuration

Install the following library to your project:

```
yarn add git-cz -D
```

Then add the following code:

`changelog.config.js`

```javascript
const { commitizenConfig } = require('@nodis/math');

module.exports = {
  ...commitizenConfig,
};
```

`package.json`

```json
{
  "config": {
    "commitizen": {
      "path": "git-cz"
    }
  }
}
```

[< Go back](https://nodis-com-br.github.io/math/)
