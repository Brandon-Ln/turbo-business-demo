module.exports = {
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'import/extensions': 0,
    "import/no-unresolved": 0,
    'react/jsx-filename-extension': 0,
  }
};
