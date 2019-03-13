module.exports = {
    parser: "babel-eslint",
    "extends": [
        "plugin:prettier/recommended",
        "plugin:react/recommended"
    ],
    plugins: ["react", "import", "prettier"],
    "rules": {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
    }
};