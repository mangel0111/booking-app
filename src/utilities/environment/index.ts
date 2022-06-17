const { env } = import.meta;

export const getEnvironmentVariable = (key: string) => env[key];
