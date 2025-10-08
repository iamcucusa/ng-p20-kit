/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/**/*.{html,ts,mdx}',     // Angular templates + stories
    './**/*.stories.@(ts|mdx)'           // extra guard for SB stories
  ],
  theme: {
    // Comprehensive breakpoints system
    screens: {
      'xs': '0px',        // Extra small devices
      'sm': '576px',     // Small devices (PrimeFlex compatibility)
      'md': '768px',     // Medium devices
      'lg': '992px',     // Large devices (PrimeFlex compatibility)
      'xl': '1200px',    // Extra large devices (PrimeFlex compatibility)
      '2xl': '1536px',   // 2X large devices
      '3xl': '1920px'    // 3X large devices (4K displays)
    },
    extend: {
      // PrimeFlex-compatible spacing scale
      spacing: {
        '0': '0rem',     // 0px
        '1': '0.25rem',  // 4px
        '2': '0.5rem',   // 8px (--inline-spacing)
        '3': '1rem',     // 16px (--content-padding + PrimeFlex p-3)
        '4': '1.5rem',   // 24px (PrimeFlex p-4)
        '5': '2rem',     // 32px (PrimeFlex p-5)
        '6': '3rem',     // 48px (PrimeFlex p-6)
        '7': '4rem',     // 64px (PrimeFlex p-7)
        '8': '5rem',     // 80px (PrimeFlex p-8)
      },
      colors: {
      "primary": {
            "50": "#f4fafe",
            "100": "#cae6fc",
            "200": "#a0d2fa",
            "300": "#75bef8",
            "400": "#4baaf5",
            "500": "#2196f3",
            "600": "#1c80cf",
            "700": "#1769aa",
            "800": "#125386",
            "900": "#0d3c61"
      },
      "blue": {
            "50": "#f4fafe",
            "100": "#cae6fc",
            "200": "#a0d2fa",
            "300": "#75bef8",
            "400": "#4baaf5",
            "500": "#2196f3",
            "600": "#1c80cf",
            "700": "#1769aa",
            "800": "#125386",
            "900": "#0d3c61"
      },
      "green": {
            "50": "#f6fbf6",
            "100": "#d4ecd5",
            "200": "#b2ddb4",
            "300": "#90cd93",
            "400": "#6ebe71",
            "500": "#4caf50",
            "600": "#419544",
            "700": "#357b38",
            "800": "#2a602c",
            "900": "#1e4620"
      },
      "yellow": {
            "50": "#fffcf5",
            "100": "#fef0cd",
            "200": "#fde4a5",
            "300": "#fdd87d",
            "400": "#fccc55",
            "500": "#fbc02d",
            "600": "#d5a326",
            "700": "#b08620",
            "800": "#8a6a19",
            "900": "#644d12"
      },
      "cyan": {
            "50": "#f2fcfd",
            "100": "#c2eff5",
            "200": "#91e2ed",
            "300": "#61d5e4",
            "400": "#30c9dc",
            "500": "#00bcd4",
            "600": "#00a0b4",
            "700": "#008494",
            "800": "#006775",
            "900": "#004b55"
      },
      "pink": {
            "50": "#fef4f7",
            "100": "#fac9da",
            "200": "#f69ebc",
            "300": "#f1749e",
            "400": "#ed4981",
            "500": "#e91e63",
            "600": "#c61a54",
            "700": "#a31545",
            "800": "#801136",
            "900": "#5d0c28"
      },
      "indigo": {
            "50": "#f5f6fb",
            "100": "#d1d5ed",
            "200": "#acb4df",
            "300": "#8893d1",
            "400": "#6372c3",
            "500": "#3f51b5",
            "600": "#36459a",
            "700": "#2c397f",
            "800": "#232d64",
            "900": "#192048"
      },
      "teal": {
            "50": "#f2faf9",
            "100": "#c2e6e2",
            "200": "#91d2cc",
            "300": "#61beb5",
            "400": "#30aa9f",
            "500": "#009688",
            "600": "#008074",
            "700": "#00695f",
            "800": "#00534b",
            "900": "#003c36"
      },
      "orange": {
            "50": "#fff8f2",
            "100": "#fde0c2",
            "200": "#fbc791",
            "300": "#f9ae61",
            "400": "#f79530",
            "500": "#f57c00",
            "600": "#d06900",
            "700": "#ac5700",
            "800": "#874400",
            "900": "#623200"
      },
      "bluegray": {
            "50": "#f7f9f9",
            "100": "#d9e0e3",
            "200": "#bbc7cd",
            "300": "#9caeb7",
            "400": "#7e96a1",
            "500": "#607d8b",
            "600": "#526a76",
            "700": "#435861",
            "800": "#35454c",
            "900": "#263238"
      },
      "purple": {
            "50": "#faf4fb",
            "100": "#e7cbec",
            "200": "#d4a2dd",
            "300": "#c279ce",
            "400": "#af50bf",
            "500": "#9c27b0",
            "600": "#852196",
            "700": "#6d1b7b",
            "800": "#561561",
            "900": "#3e1046"
      },
      "red": {
            "50": "#fff5f5",
            "100": "#ffd1ce",
            "200": "#ffada7",
            "300": "#ff8980",
            "400": "#ff6459",
            "500": "#ff4032",
            "600": "#d9362b",
            "700": "#b32d23",
            "800": "#8c231c",
            "900": "#661a14"
      },
      "gray": {
            "50": "#fafafa",
            "100": "#f5f5f5",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121"
      },
      "surface": {
            "ground": "#f8f9fa",
            "section": "#ffffff",
            "card": "#ffffff",
            "overlay": "#ffffff",
            "border": "#dee2e6",
            "hover": "#e9ecef",
            "a": "#ffffff",
            "b": "#f8f9fa",
            "c": "#e9ecef",
            "d": "#dee2e6",
            "e": "#ffffff",
            "f": "#ffffff"
      },
      "text": {
            "primary": "#495057",
            "secondary": "#6c757d",
            "disabled": "#adb5bd"
      },
      "white": "#ffffff",
      "black": "#000000"
},
      // Surface colors
      'surface': {
        'ground': '#f8f9fa',
        'section': '#ffffff',
        'card': '#ffffff',
        'overlay': '#ffffff',
        'border': '#dee2e6',
        'hover': '#e9ecef'
      },
      // Text colors
      'text': {
        'primary': '#495057',
        'secondary': '#6c757d',
        'disabled': '#adb5bd'
      },
      // PrimeNG surface colors for Tailwind utilities
      'surface-section': '#ffffff'
    }
  },
  plugins: [require('tailwindcss-primeui')]
};