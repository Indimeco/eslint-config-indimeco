const prettier = require('./prettier.config');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'react-hooks'], // alternative: https://github.com/prettier/prettier-eslint
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true, // https://www.npmjs.com/package/eslint-plugin-jest#usage
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // general ESLint rules
    'no-case-declarations': 0,
    'no-plusplus': 0,
    'sort-imports': 0,
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],

    // rules for https://github.com/benmosher/eslint-plugin-import
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 'error',


    // rules for https://www.npmjs.com/package/eslint-plugin-jest
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/prefer-strict-equal': 'warn',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',

    // rules for https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      prettier
    ],

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // rules for https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }], // use '' when passing a strint as a property
    'react/jsx-filename-extension': 0, // we assume we do not use *.jsx files
    'react/sort-comp': 2,

    // typescript
    '@typescript-eslint/explicit-function-return-type': "off",
  },
  overrides: [
    {
      files: ['**/*.@(?(spec)?(test)).[jt]?([sx])?(x)', '**/testUtils/*', '**/cypress/**/*', '**/setupTests.*'],
      globals: {
        React: true,
      },
      rules: {
        'no-console': 0,
        'global-require': 0,
        'import/no-extraneous-dependencies': ['error', { 'devDependencies': true, 'optionalDependencies': false, 'peerDependencies': false }]
      },
    },
    {
      "files": ["**/*.ts?(x)"],
      "rules": {
          "react/prop-types": "off"
      }
  }
  ],
}
