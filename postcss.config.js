import postcss from "postcss";

// Ensure every PostCSS parse call has a `from` value to avoid warnings
const originalParse = postcss.parse;
postcss.parse = (css, opts = {}) => originalParse(css, { from: "inline.css", ...opts });

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
