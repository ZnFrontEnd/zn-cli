module.exports = {
    parser: "babel-eslint",
    "extends": [
        "plugin:prettier/recommended",
        "airbnb"
    ],
    plugins: ["react", "import", "prettier"],
    "rules": {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
    }
};