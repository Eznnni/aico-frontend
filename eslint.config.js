// eslint.config.js
import { defineConfig } from "eslint/config";
// ESLint ���� ��Ģ/�ļ�
import js from "@eslint/js";
// ������ �� ES2021 ���� ����
import globals from "globals";
// React �÷�����
import pluginReact from "eslint-plugin-react";
// Prettier �÷�����
import pluginPrettier from "eslint-plugin-prettier";
// Prettier �浹 ��Ģ ����
import configPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    // ������ ����(���� �����, ���̺귯�� ��)
    ignores: ["**/node_modules/**", "**/dist/**"],
  },
  {
    // ��Ʈ ��� ����(Ȯ����)
    files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      parser: js.configs.recommended.parser, // ESLint ���� parser
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    // ����� �÷�����
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    // ������ ��Ģ��(ESLint ���� + React ���� + Prettier ����)
    rules: {
      // �ڹٽ�ũ��Ʈ �⺻ ���� ��
      ...js.configs.recommended.rules,
      // React ���� ��
      ...pluginReact.configs.recommended.rules,
      // Prettier ���� ��(������ ������ ESLint�� üũ)
      ...pluginPrettier.configs.recommended.rules,
      // eslint-config-prettier���� �����ϴ� "�浹 ����" ��
      ...configPrettier.rules,

      // React PropTypes ������� ���� ���
      "react/prop-types": "off",

      // Prettier ������ ���� �� ���(warn) ó��
      "prettier/prettier": "warn",
    },
  },
]);

