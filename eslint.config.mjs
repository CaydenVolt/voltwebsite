import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // The Cloudflare adapter's build output: ~100MB of generated and vendored
    // JS. Linting it produced thirty thousand problems in somebody else's code.
    ".open-next/**",
    ".wrangler/**",
  ]),
]);

export default eslintConfig;
