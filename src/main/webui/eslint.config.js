import eslint from "@eslint/js"
import eslintTanstackQuery from "@tanstack/eslint-plugin-query"
import eslintTanstackRouter from "@tanstack/eslint-plugin-router"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import eslintPluginReact from "eslint-plugin-react"
import eslintPluginReactCompiler from "eslint-plugin-react-compiler"
import eslintPluginReactHooks from "eslint-plugin-react-hooks"
import eslintPluginReactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"

export default tseslint.config(
  eslint.configs.recommended,
  eslintConfigPrettier,
  tseslint.configs.recommended,
  tseslint.configs.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
      "react-compiler": eslintPluginReactCompiler,
      "@tanstack/query": eslintTanstackQuery,
      "@tanstack/router": eslintTanstackRouter,
    },
    extends: [
      eslintPluginReact.configs.flat.recommended,
      eslintPluginReact.configs.flat["jsx-runtime"],
    ],
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginReactRefresh.configs.vite.rules,
      ...eslintPluginReactCompiler.configs.recommended.rules,
      ...eslintTanstackQuery.configs.recommended.rules,
      ...eslintTanstackRouter.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ["**/*.{js,jsx,cjs,mjs,ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_$",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_$",
          destructuredArrayIgnorePattern: "^_$",
          varsIgnorePattern: "^_$",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    ignores: [
      "**/public",
      "**/dist",
      "**/dist/*",
      ".tanstack",
      "**/tests/*",
      "coverage",
      "node_modules/*",
      "**/__generated__/*",
      ".gitignore",
    ],
  }
)
