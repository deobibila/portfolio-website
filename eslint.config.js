import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            "@next/next": nextPlugin,
            "react-hooks": reactHooks,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            // Reduce noise (TS handles these better)
            "no-undef": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        },
    },

    {
        ignores: [
            ".next/**",
            "out/**",
            "dist/**",
            "node_modules/**",
            "components/comment_backup/**",
        ],
    },
];
