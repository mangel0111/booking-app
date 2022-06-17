import { ConfigKeys, IConfig } from 'src/models';

const config: IConfig = {
  [ConfigKeys.SERVICE_URL]: import.meta.env.VITE_DETAILS_SERVICE_URL as string,
};

export const getEnvironmentVariable = (key: ConfigKeys) => config[key];
