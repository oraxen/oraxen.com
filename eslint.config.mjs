import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  {
    ignores: ["**/.next/**", "**/node_modules/**", "**/.smoke/**"],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      // Avoid upgrade churn from React Compiler-related rules.
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/purity": "off",
      "react-hooks/static-components": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];


