import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
    {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js,ts },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    },
  //linter plugins//
    eslintPluginPrettierRecommended,
    eslintConfigPrettier,
]);