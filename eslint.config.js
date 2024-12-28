// import pluginVue from 'eslint-plugin-vue'
// import vueTsEslintConfig from '@vue/eslint-config-typescript'

// export default [
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{ts,mts,tsx,vue}'],
//   },

//   {
//     name: 'app/files-to-ignore',
//     ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
//   },

//   ...pluginVue.configs['flat/essential'],
//   ...vueTsEslintConfig(),
// ]

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    // Bütün kuralları devre dışı bırakıyoruz
    'no-console': 'off',
    'no-debugger': 'off',
    '@typescript-eslint/no-explicit-any': 'off',  // any kullanımını devre dışı bırakıyoruz
    // Diğer kuralları da buradan kapatabilirsiniz
  },
};
