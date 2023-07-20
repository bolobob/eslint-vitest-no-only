const rulesDirPlugin = require("eslint-plugin-rulesdir");
rulesDirPlugin.RULES_DIR = "rules";

module.exports = {
  "env" : {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": ["rulesdir"],
  "extends": "eslint:recommended",
}
