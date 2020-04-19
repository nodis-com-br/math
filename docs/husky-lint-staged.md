# Husky 🐶 + Lint Staged = 💘

All frontends projects use [Husky](https://github.com/typicode/husky) and [Lint Staged](https://github.com/okonet/lint-staged) to prevent bad commits.

## Configuration

Install the following libraries to your project:

```
yarn add -DE husky lint-staged
```

Then add the following code:

```javascript
// package.json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts,tsx}": [
      "yarn format:eslint",       // Commands that you want to run
      "yarn format:prettier-code",
      "yarn test",
      "git add"
    ],
    "*.{css,scss}": [
      "yarn format:prettier-style",
      "git add"
    ]
  },
```

[< Go back](https://nodis-com-br.github.io/math/)
