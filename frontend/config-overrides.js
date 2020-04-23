const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = (config) => {
  const conf = { ...config };
  conf.resolve.alias = Object.assign(config.resolve.alias, {
    '@functions': resolve('src/utils/functions'),
    '@components': resolve('src/components'),
    '@context': resolve('src/context'),
    '@api': resolve('src/utils/api'),
    '@pages': resolve('src/pages'),
    '@hooks': resolve('src/hooks'),
    '@store': resolve('src/store'),
    '@utils': resolve('src/utils'),
  });

  return conf;
};
