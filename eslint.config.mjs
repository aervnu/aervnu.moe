import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        createClass: "createReactClass",
        pragma: "React",
        fragment: "Fragment",
        version: "detect",
        defaultVersion: "",
      },
    },
  },
  {
    rules: {
      "react/prop-types": "off"
    }
  }
];
