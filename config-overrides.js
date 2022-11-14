module.exports = function override(config, env) {
    config.resolve = {
        alias: { '@mui/styled-engine': '@mui/styled-engine-sc' },
    };
    return config;
};
