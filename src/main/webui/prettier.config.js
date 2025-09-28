//  @ts-check
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  printWidth: 80,
  tabWidth: 2,
  semi: false,
  trailingComma: "es5",
  proseWrap: "always",
  tailwindFunctions: ["tw", "tv", "cn", "clsx", "twMerge", "cva"],
}
