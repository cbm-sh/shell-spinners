import { FlatCompat } from "@eslint/eslintrc";
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  jsxA11y.flatConfigs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ["next"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
    plugins: {
      'jsx-a11y': jsxA11y,
    },
  }),
];

export default eslintConfig;
