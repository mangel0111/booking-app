import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__mocks__/fileMock.js',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
};

export default jestConfig;
