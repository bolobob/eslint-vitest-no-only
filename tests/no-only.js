"use strict";

const rule = require("../rules/no-only");

const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [
  {
    code: 'describe("hoge", function(){});',
  },
  {
    code: 'test("hoge", function(){});',
  },
  {
    code: 'it("hoge", function(){});',
  },
  {
    code: 'describe("hoge", function(){ it("fuga", function(){}); });',
  },
];

const invalid = [
  {
    code: 'describe.only("hoge", function(){});',
    errors: [
      {
        message: "describe.only is not allowed",
        type: "CallExpression",
      },
    ],
  },
  {
    code: 'test.only("hoge", function(){});',
    errors: [
      {
        message: "test.only is not allowed",
        type: "CallExpression",
      },
    ],
  },
  {
    code: 'it.only("hoge", function(){});',
    errors: [
      {
        message: "it.only is not allowed",
        type: "CallExpression",
      },
    ],
  },
];

ruleTester.run("no-only", rule, { valid, invalid });
