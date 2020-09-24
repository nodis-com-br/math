# Husky 🐶 + Lint Staged = 💘

All frontends projects use [Husky](https://github.com/typicode/husky) and [Lint Staged](https://github.com/okonet/lint-staged) to prevent bad commits.

## Configuration

Install the following libraries to your project:

```
yarn add husky lint-staged -D
```

Then add the following code:

`package.json`

```javascript
  "husky": {
    "hooks": {
      "pre-commit": "tsc --noEmit && lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts,tsx}": [
      "your command here",
      "your second command here",
    ],
    "*.{css,scss}": [
      "your command here",
    ]
  },
```

[< Go back](https://nodis-com-br.github.io/math/)
