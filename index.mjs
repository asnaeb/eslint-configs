//@ts-check

import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
// @ts-ignore
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config} */
const common = {
  files: ["**/*.{js,cjs,mjs,ts,jsx,tsx}"],
  plugins: {
    stylistic
  },
  rules: {
    ...js.configs.recommended.rules,
    "stylistic/semi": ["error", "always"],
    "stylistic/indent": ["error", 2, {SwitchCase: 1}],
    "stylistic/quotes": ["error", "double"],
    "stylistic/block-spacing": ["error", "never"],
    "stylistic/brace-style": ["error", "stroustrup", {allowSingleLine: false}],
    "stylistic/comma-spacing": "error",
    "stylistic/key-spacing": "error",
    "stylistic/keyword-spacing": "error",
    "stylistic/object-curly-spacing": ["error", "never"],
    "stylistic/linebreak-style": "off",
    "stylistic/no-mixed-operators": "error",
    "stylistic/array-bracket-spacing": ["error", "never"],
    "stylistic/array-element-newline": ["error", "consistent"],
    "stylistic/computed-property-spacing": ["error", "never"],
    "stylistic/arrow-spacing": "error",
    "stylistic/func-call-spacing": "error",
    "stylistic/max-len": ["error", {code: 120}],
    "stylistic/multiline-ternary": ["error", "always-multiline"],
    "stylistic/no-multi-spaces": "error",
    "stylistic/no-multiple-empty-lines": "error",
    "stylistic/no-trailing-spaces": "error",
    "stylistic/no-whitespace-before-property": "error",
    "stylistic/padded-blocks": ["error", "never"],
    "stylistic/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "import",
        next: "*"
      },
      {
        blankLine: "never",
        prev: "import",
        next: "import"
      },
      {
        blankLine: "always",
        prev: "class",
        next: "*"
      },
      {
        blankLine: "always",
        prev: "*",
        next: "class"
      }
    ],
    "stylistic/semi-spacing": "error",
    "stylistic/semi-style": "error",
    "stylistic/space-before-blocks": ["error", "always"],
    "stylistic/space-in-parens": ["error", "never"],
    "stylistic/space-infix-ops": ["error", {int32Hint: false}],
    "stylistic/space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false
      }
    ],
    "stylistic/switch-colon-spacing": "error",
    "stylistic/template-curly-spacing": "error",
    "stylistic/member-delimiter-style": "error",
    "stylistic/implicit-arrow-linebreak": ["error", "beside"],
    // NON STYLISTICS
    "no-cond-assign": "off",
    "no-shadow": "error",
    "no-unused-vars": "error",
    "require-await": "error",
    "no-console": "warn",
    "eqeqeq": ["error", "always"],
    "no-duplicate-imports": "error",
    "class-methods-use-this": "error",
    "curly": ["error", "all"],
    "func-style": ["error", "declaration", {allowArrowFunctions: true}],
    "logical-assignment-operators": "error",
    "no-else-return": ["error", {allowElseIf: false}],
    "no-empty": ["error", {allowEmptyCatch: true}],
    "no-empty-function": "error",
    "no-extra-label": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "prefer-const": "error"
  }
};

/** @type {Array<import("eslint").Linter.Config>} */
const typescript = [
  .../** @type {any} */(tseslint.configs.recommended),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": /** @type {any} */ (tseslint.plugin)
    },
    rules: {
      "no-shadow": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/prefer-for-of": "off"
    }
  }
];

/** @type {import("eslint").Linter.Config} */
const react = {
  files: ["**/*.{jsx,tsx}"],
  languageOptions: {
    ...reactPlugin.configs.flat?.recommended.languageOptions,
    ...reactPlugin.configs.flat?.["jsx-runtime"].languageOptions,
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    react: reactPlugin,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh
  },
  rules: {
    ...reactPlugin.configs.flat?.recommended.rules,
    ...reactPlugin.configs.flat?.["jsx-runtime"].rules,
    ...reactHooks.configs.recommended.rules,
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      {allowConstantExport: true},
    ],
    "stylistic/jsx-closing-bracket-location": ["error", "line-aligned"],
    "stylistic/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "never",
        afterOpening: "never",
        beforeClosing: "never"
      }
    ],
    "stylistic/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "ignore"
      }
    ],
  }
};

/** @type {import("eslint").Linter.Config} */
const node = {
  languageOptions: {
    globals: globals.node
  }
};


export {common, typescript, react, node};
