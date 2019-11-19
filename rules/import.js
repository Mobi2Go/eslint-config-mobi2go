module.exports = {
    plugins: [
        'import',
    ],
    rules: {
        'import/no-extraneous-dependencies': 'error',
        'import/namespace': ['error', { allowComputed: true }],
    }
};