module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Cameron's Blog",
    author: "Cameron Zimmerman",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
