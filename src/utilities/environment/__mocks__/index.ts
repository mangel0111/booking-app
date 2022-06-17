import { ConfigKeys, IConfig } from 'src/models';

const mockedEnvironmentVariables: IConfig = {
  [ConfigKeys.SERVICE_URL]: 'http://fakeserver.com/imageid',
};

export const getEnvironmentVariable = (key: ConfigKeys) =>
  mockedEnvironmentVariables[key];
