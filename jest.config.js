module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  // globals: {
  //   'ts-jest': {
  //     tsconfig: 'tests/tsconfig.json',
  //   },
  // },
};
