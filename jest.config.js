/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // 'node'
  globals: {
    'ts-jest': {
      isolatedModules: true,
      allowJs: true,
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': '',
  },
  transformIgnorePatterns: ['node_modules', 'lib'],
  modulePaths: ['<rootDir>'], // baseUrl in tsconfig.json
  collectCoverage: true,
};
