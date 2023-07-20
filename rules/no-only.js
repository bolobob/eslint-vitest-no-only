"use-strict";

// contextを引数に取る関数を外に晒す
module.exports = function(context) {
  return {
    Identifier: function(node) {
      if (node.name === "hoge") {
        context.report({
          node: node,
          message: "hoge is not allowed"
        });
      }
    }
  }
}
