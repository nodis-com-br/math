const rulesTypescript = {
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-var-requires': 0,
  'react/prop-types': 0,
  'react/display-name': 0,
  'react/jsx-filename-extension': 0,
  'import/no-extraneous-dependencies': 0,
  'import/prefer-default-export': 0,
  'jsx-a11y/label-has-associated-control': 0,
};

export const typescriptReactNative = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
  },
  globals: {
    __DEV__: 'readonly',
  },
  rules: rulesTypescript,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['app'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

export const typescriptReactWeb = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', '@typescript-eslint', 'cypress'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    'cypress/globals': true,
    browser: true,
    es6: true,
  },
  rules: rulesTypescript,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
