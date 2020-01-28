module.exports = {
  ...require('./test/jest-common'), // eslint-disable-line
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/index.ts',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  projects: ['./test/jest.configs.js'],
};
