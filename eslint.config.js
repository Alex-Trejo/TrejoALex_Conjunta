export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',

        },
        rules: {
            // uso de punto y coma
            'semi': ['error', 'always'],
            // uso de comillas simples
            'quotes': ['error', 'single'],
        }
    }
];