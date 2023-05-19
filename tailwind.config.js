/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: `url('../public/images/banner.png')`,
        content:`url('../public/images/main_img_cover.png')`,
      },
    },
  },
  plugins: [],
  
};
