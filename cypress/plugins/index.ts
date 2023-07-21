import * as path from 'path';

require('dotenv').config();

function getConfigurationByFile(file: string) {
  const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`);
  return require(pathToConfigFile);
}

const buildConfiguration = (on: Cypress.PluginConfig, config: Cypress.PluginConfigOptions) => {
  const file = config.env.configFile || 'cypress.local';
  return getConfigurationByFile(file);
};

module.exports = buildConfiguration;

const envMapKeys = {
  accounts: [
    'SUPPORTER_LOGIN',
    'SUPPORTER_PASSWORD',
    'REFUGEE_LOGIN',
    'REFUGEE_PASSWORD',
  ]
}

const hasValue = (value: any) => value !== null || typeof value !== 'undefined';

const mutateEnvMapIfExistsToCypressEnv = (envMap) => {
  envMap.accounts = {};
  envMapKeys.accounts.forEach((key) => {
    if (hasValue(process.env[key])) {
      const [accountType, fieldName] = (key).toLowerCase().split('_');
      envMap.accounts = {
        ...envMap.accounts,
        [accountType]: {
          ...envMap.accounts[accountType],
          [fieldName]: process.env[key]
        }
      }
    }
  })
}


// This code is executed before the configs are loaded.
module.exports = (on: Cypress.PluginConfig, config: Cypress.PluginConfigOptions) => {
  const finalConfig = config;

  Object.entries(process.env).forEach(([key, value]) => {
    const formattedStageKeyName = key.replace(`${process.env.STAGE}_`, '');
    finalConfig.env[formattedStageKeyName] = value;
  });
  finalConfig.env = {
    ...finalConfig.env,
    ...buildConfiguration(on, config)
  }
  mutateEnvMapIfExistsToCypressEnv(finalConfig.env);
  return finalConfig;
};
