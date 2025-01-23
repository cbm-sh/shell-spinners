import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ["next", 'prettier'],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      '@typescript-eslint/no-extra-non-null-assertion': 'off',
    },
  }),
];

export default eslintConfig;
