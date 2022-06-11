interface IMockedEnv {
  [key: string]: string;
}

const mockedEnvironmentVariables: IMockedEnv = {
  VITE_DETAILS_SERVICE_URL: 'http://fakeserver.com/imageid',
};

export const getEnvironmentVariable = (key: string) =>
  mockedEnvironmentVariables[key];
