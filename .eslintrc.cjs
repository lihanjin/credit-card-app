module.exports = {
  root: true,
  extends: ['expo', 'plugin:prettier/recommended'],
  env: {
    node: true,
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'web-build/',
    '.expo/',
    'expo-env.d.ts',
    'app-example/',
    'android/',
    'ios/',
  ],
};
