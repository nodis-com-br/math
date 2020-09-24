# Testing

## Web (CRA)

```
yarn add @testing-library/user-event @testing-library/react @testing-library/jest-dom -D
```

`setupTests.ts`

```javascript
import '@testing-library/jest-dom/extend-expect';
```

`package.json`

```json
{
  "test:coverage": "react-scripts test --coverage --watchAll=false --testResultsProcessor jest-sonar-reporter",
  "test:staged": "react-scripts test --watchAll=false --findRelatedTests"
}
```

## Mobile

```
yarn add jest babel-jest @types/jest @testing-library/react-native react-test-renderer @types/react-test-renderer is-ci-cli -D
```

`jest.config.js`

```javascript
module.exports = {
  testResultsProcessor: 'jest-sonar-reporter',
};
```

`package.json`

```json
{
  "test": "is-ci \"test:coverage\" \"test:watch\"",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "test:staged": "jest --findRelatedTests"
}
```

<!-- TODO config -->

## Integrate with SonarQube

```
yarn add jest-sonar-reporter -D
```

```json
"jestSonar": {
  "reportPath": "coverage",
  "reportFile": "sonar-report.xml"
}
```

[< Go back](https://nodis-com-br.github.io/math/)
