module.exports = {
    extends: "eslint:recommended",
    env: {
      browser: true,
      jest: true,
      es6: true,
    },
    parser: 'babel-eslint',
    rules: {
      "array-bracket-spacing": ["error", "never"],
      "brace-style": "error",
      "comma-spacing": ["error", { before: false, after: true }],
      "comma-style": ["error", "last"],
      "eol-last": ["error", "always"],
      "func-call-spacing": ["error", "never"],
      "function-call-argument-newline": ["error", "consistent"],
      "function-paren-newline": ["error", "multiline"],
      "indent": ["error", 2],
      "keyword-spacing": "error",
      "no-lonely-if": "error",
      "no-param-reassign": "error",
      "no-trailing-spaces": "error",
      "no-unneeded-ternary": "error",
      "quotes": ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
      "semi": "error",
      "semi-spacing": "error",
      "semi-style": "error",
      "strict": "error",
      "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }],
    }
};
