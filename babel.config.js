module.exports = {
    presets: [
        [
            '@vue/app',
            {
                useBuiltIns: 'entry'
            }
        ],
        ['@babel/preset-env']
    ],
    plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining'
    ]
};
