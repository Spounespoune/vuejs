module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended', // Recommandations pour Vue 3
        'eslint:recommended',          // Recommandations générales ESLint
        'prettier',                    // Désactive les règles ESLint en conflit avec Prettier
    ],
    plugins: ['prettier'],           // Ajoute le plugin Prettier
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        // Ajoutez vos règles personnalisées ici
        'prettier/prettier': 'error',
        'no-unused-vars': 'warn',
        'vue/multi-word-component-names': 'off',
    },
};
