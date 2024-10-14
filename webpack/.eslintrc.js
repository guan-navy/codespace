module.exports = {
  root: true,
  env: { // 定义环境,定义浏览器环境的话一些全局变量就不会报错了
    browser: true,
    es2021: true
  },
  extends: [
    // 'standard',
    'plugin:vue/strongly-recommended'
  ],
  plugins: [
    'vue'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': 0
  }
}
