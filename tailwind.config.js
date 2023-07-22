/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        layout: {
          body: "#ECEEF0",
          spotlight: "#F5F7F8",
        },
        primary: {
          pure: "#2C68F4",
        },
        content: {
          base: "#171D35",
        },
        interactive: {
          primary: "#2C68F4",
          secondary: "rgba(23, 29, 53, 0.12)",
        },
        success: {
          light: "#C2ED79",
          dark: "#498D12",
        },
      },
      gridTemplateColumns: {
        layout: "3.5rem 1fr",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
