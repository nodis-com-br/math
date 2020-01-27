module.exports = {
  ...require('./test/jest-common'), // eslint-disable-line
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/index.ts',
  ],
  projects: ['./test/jest.configs.js', './test/jest.lint.js'],
};
