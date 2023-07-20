"use-strict";

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (!node.callee.object || !node.callee.property) {
        return;
      }

      const name = node.callee.object.name;
      if (name !== "describe" && name !== "test" && name !== "it") {
        return;
      }

      if (node.callee.property.name === "only") {
        context.report({
          node: node,
          message: `${name}.only is not allowed`
        });
      }
    }
  }
}
