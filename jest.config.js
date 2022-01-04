/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // 'node'
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  transformIgnorePatterns: ['node_modules', 'lib'],
  modulePaths: ['<rootDir>'], // baseUrl in tsconfig.json
  // collectCoverage: true,
};
