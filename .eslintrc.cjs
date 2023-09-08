module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'eslint-plugin-import-helpers', "named-import-spacing"],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'import-helpers/order-imports': [
            'error',
            {
                newlinesBetween: 'always',
                groups: [
                    'absolute',
                    'module',
                    '/^@components/',
                    '/^@pages/',
                    '/^@share/',
                    '/^@model/',
                    'parent',
                    'sibling',
                    'index'
                ],
                alphabetize: { order: 'asc', ignoreCase: true },
            }],
        "no-unused-vars": ["error", { "varsIgnorePattern": "[_]" }],
        "named-import-spacing/named-import-spacing": 2,
        "no-sparse-arrays": "error",
        "array-bracket-spacing": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-dangle": ["error", "always"]
    },
}
