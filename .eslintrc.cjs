module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'jest/globals': true,
  },
  extends: ['plugin:react/recommended', 'plugin:jest/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'object-curly-newline': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        jsx: 'always',
      },
    ],
  },
};
