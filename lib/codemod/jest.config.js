module.exports = {
  displayName: 'Codemod',
  bail: true,
  rootDir: './',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(.|-)test\\.js?$',
};
