/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/**/*.{html,ts,mdx}',     // Angular templates + stories
    './**/*.stories.@(ts|mdx)'           // extra guard for SB stories
  ],
  theme: { extend: {} },
  plugins: []
};
