/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
    ],
    env: {
        'vue/setup-compiler-macros': true,
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        'vue/no-mutating-props': 'off',
        'vue/no-reserved-component-names': 'off',
        'vue/valid-v-slot': 'off',
        'vue/no-v-text-v-html-on-component': 'off',
        'vue/no-useless-template-attributes': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'lf',
                singleQuote: true,
                semi: false,
                trailingComma: 'all',
            },
        ],
    },
}
