import { FlatCompat } from "@eslint/eslintrc"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import { fileURLToPath } from "url"
import reactPlugin from "eslint-plugin-react"
import tailwindcssPlugin from "eslint-plugin-tailwindcss"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      react: reactPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "@typescript-eslint": tsPlugin,
      "unused-imports": unusedImportsPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      "import/no-dynamic-require": "warn",
      "import/no-nodejs-modules": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@next/next/no-assign-module-variable": "off",
      "jsx-a11y/anchor-is-valid": "warn",
      "react-hooks/rules-of-hooks": "off",
      "react/no-find-dom-node": "off",
      "jsx-quotes": ["error", "prefer-double"],

      // Formatting rules
      "indent": "off",
      "quotes": ["error", "double"],
      "semi": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "arrow-parens": ["error", "always"],

      // TailwindCSS rules
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": [
        "warn",
        {
          removeDuplicateClasses: true,
          enableFixer: true,
        },
      ],
      "tailwindcss/no-contradicting-classname": "error",
      "react/jsx-no-literals": [
        "error",
        {
          noStrings: false,
        },
      ],

      // Formatting rules for JSX
      // "react/jsx-indent": ["error", 2],
      // "react/jsx-indent-props": ["error", 2],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-closing-bracket-location": ["error", "line-aligned"],
      "react/jsx-tag-spacing": [
        "error",
        {
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          beforeClosing: "never",
        },
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 0,
        },
      ],

      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],
    },
    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx"],
        config: "./tailwind.config.js",
      },
    },
  },
  {
    files: ["**/.next/**", "**/node_modules/**"],
    rules: {
      "unused-imports/no-unused-vars": "off",
      "import/order": "off",
    },
  },
]

export default eslintConfig
