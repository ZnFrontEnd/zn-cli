module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
          modules: true,
          experimentalObjectRestSpread: true
        }
    },
    "extends": [
        "plugin:prettier/recommended",
        "airbnb"
    ],
    plugins: ["react", "jsx-a11y", "import", "prettier"],
    "rules": {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "quotes": 0,
        "no-console": 0,
        "no-undef": 0,
        "arrow-parens": 0,
        "comma-dangle": 0,
        "operator-linebreak": 0,
        "no-use-before-define": 0,
        "no-param-reassign": 0,
        "react/prefer-stateless-function": 0,
        "semi": 1
    }
};