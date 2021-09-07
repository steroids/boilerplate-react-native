const fs = require('fs');
const path = require('path');

module.exports = function (api) {
    api.cache(true);

    const defaultConfigPath = path.resolve(__dirname, '.env');
    const envConfigPath = path.resolve(__dirname, 'env');

    if (
        typeof process.env.ENV === 'undefined' &&
        !fs.existsSync(defaultConfigPath)
    ) {
        throw new Error(
            `Babel config couldn't find dot env file path: ${defaultConfigPath}`,
        );
    }

    const finalConfigPath =
        typeof process.env.ENV === 'undefined'
            ? defaultConfigPath
            : path.resolve(envConfigPath, process.env.ENV.trim() + '.env');

    if (!fs.existsSync(finalConfigPath)) {
        throw new Error(
            `Babel config couldn't find dot env file path: ${finalConfigPath}`,
        );
    }

    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            'react-native-reanimated/plugin',
            ['inline-dotenv', { path: finalConfigPath }],
        ],
    };
};
