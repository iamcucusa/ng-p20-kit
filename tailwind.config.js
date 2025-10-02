/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/**/*.{html,ts}",     // all apps + libs under /projects
    "./**/*.stories.ts",             // Storybook stories (if you style in stories)
    "./.storybook/**/*.{ts,js,mdx}"  // Storybook config UI
  ],
  theme: { extend: {} },
  plugins: []
};
