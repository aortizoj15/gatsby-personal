module.exports = {
  siteMetadata: {
    title: 'Full-Stack Personal Site',
    author: 'Alexis Ortiz Ojeda',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
