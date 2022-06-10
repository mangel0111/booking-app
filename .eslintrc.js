module.exports = {
  env: { browser: true, jest: true, es2021: true },
  extends: ['plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
