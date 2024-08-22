// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/no-v-html': 'off',
      'brace-style': [
        'error',
        'stroustrup',
        {
          allowSingleLine: true,
        },
      ],
    },
  },
  eslintConfigPrettier
)
