import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import eslintConfigPrettier from 'eslint-config-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import vueA11y from 'eslint-plugin-vuejs-accessibility'
import globals from 'globals'

export default defineConfigWithVueTs(
  { ignores: ['.nuxt/**', '.output/**', 'dist/**'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  vueA11y.configs['flat/recommended'],
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
  {
    files: ['app/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-unused-refs': 'error',
      'vue/no-template-shadow': 'error',
      'vue/attribute-hyphenation': 'warn',
      'vue/attributes-order': 'warn',
    },
  },
  eslintConfigPrettier,
)
