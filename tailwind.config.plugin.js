const twrnc = require("twrnc"); // DO THIS

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    twrnc.plugin(({ addUtilities }) => {
      addUtilities({
        // 😎 similar to `@apply`
        largeTitle: `font-regular text-5xl`,
        h1: `font-bold text-2xl`,
        h2: `font-bold text-xl`,
        h3: `font-semibold text-lg`,
        h4: `font-semibold`,
        body1: `font-regular text-3xl`,
        body2: `font-regular text-xl`,
        body3: `font-regular text-base`,
        body4: `font-regular text-sm`,
        body5: `font-regular text-xs`,
        "body-text": `font-serif leading-relaxed tracking-wide text-gray-800`,
      });
    }),
  ],
};
