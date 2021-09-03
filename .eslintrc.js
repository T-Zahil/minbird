module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:vue/essential'],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 3,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: true
    //     }
    //   }
    // ],
    'vue/comment-directive': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off'
  }
}
