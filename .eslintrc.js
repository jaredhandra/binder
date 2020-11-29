module.exports = {
  "root": true,
    "env": {
      "node": true
    },
    plugins: ["import"],
    "extends": [
      "plugin:vue/essential",
      "@vue/airbnb",
    ],
    "rules": {
      "comma-dangle": ["error", "never"]
    },
    "parserOptions": {
      "parser": "babel-eslint"
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"], //default Vue `@` alias that exists even if `vue.config.js` is not present
            //... add your own aliases here, make sure they're in vue.config.js / webpack config file
          ],
          extensions: [".vue", ".json", ".js"],
        },
      },
    }
};
