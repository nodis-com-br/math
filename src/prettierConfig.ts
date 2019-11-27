export const prettierConfig = {
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
    {
      files: '*.scss',
      options: {
        singleQuote: true,
        printWidth: 200,
      },
    },
  ],
};
