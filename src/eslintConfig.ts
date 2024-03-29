const rulesTypescript = {
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-var-requires': 0,
  'react/prop-types': 0,
  'react/display-name': 0,
  'react/jsx-filename-extension': 0,
  'react/jsx-props-no-spreading': 0,
  'import/no-extraneous-dependencies': 0,
  'import/prefer-default-export': 0,
  'jsx-a11y/label-has-associated-control': 0,
  'no-param-reassign': 0,
  'prettier/prettier': 2,
  'import/extensions': [
    2,
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  camelcase: 0,
  'global-require': 0,
  'no-underscore-dangle': 0,
  'no-console': 2,
  'no-plusplus': 0,
};

const overridesTypescript = [
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    },
  },
];

export const typescriptReactNative = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'react',
    'import',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers',
  ],
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
  rules: {
    ...rulesTypescript,
    'jsx-a11y/anchor-is-valid': 0,
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@//', ['parent', 'sibling', 'index']],
      },
    ],
  },
  overrides: overridesTypescript,
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.native.js'],
      },
    },
  },
};

export const typescriptReactWeb = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
    'cypress',
    'prettier',
  ],
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
  overrides: overridesTypescript,
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

export const typescriptCRA = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
    'cypress',
    'prettier',
    'eslint-plugin-import-helpers',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    'cypress/globals': true,
    browser: true,
    es2020: true,
  },
  rules: {
    ...rulesTypescript,
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@//', ['parent', 'sibling', 'index']],
      },
    ],
  },
  overrides: overridesTypescript,
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

export const typescript = {
  extends: ['prettier'],
  plugins: ['import', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    jest: true,
    es6: true,
  },
  rules: rulesTypescript,
  overrides: overridesTypescript,
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts'],
      },
    },
  },
};
