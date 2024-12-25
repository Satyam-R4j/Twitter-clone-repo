// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    './.{html,js,jsx,ts,tsx}',  // Adjust this path based on your project structure
    './index.html',               // Add more paths if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}