module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'linebreak-style': 'off',
    'operator-linebreak': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': [2, 'never'],
    'comma-dangle': ['error', 'never'],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ["error", { "props": false }],
    'arrow-body-style':'off',
    'no-array-index-key': 0,
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline':'off',
    'default-param-last': 'off',
    'click-events-have-key-events': 0,
    'no-noninteractive-element-interactions': 0,
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }], // should add '.ts' if typescript project
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    "no-console": "off",
    "no-alert": "off"
  }
};
