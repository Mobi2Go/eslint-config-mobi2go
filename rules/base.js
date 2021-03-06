module.exports = {
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            legacyDecorators: true,
        },
    },
    rules: {
        camelcase: 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': ['error', { props: false }],
    },
};