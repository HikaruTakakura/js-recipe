module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    Vue: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    indent: ["error", 2],
  },
}

// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  plugins: ["eslint-plugin-html"],
  parserOptions: {
    ecmaVersion: 2018,
  },
  globals: {
    Vue: true,
  },
}