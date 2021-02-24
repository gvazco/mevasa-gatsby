module.exports = {
  siteMetadata: {
    title: `Techos y Mantenimientos | Mevasa Comercializadora`,
    description: `Este es el blog Techos y Mantenimientos | Mevasa Comercializadora`,
    author: `@mevasacomercializadora`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://blog-strapi-mevasa.herokuapp.com`,
        queryLimit: 1000,
        contentTypes: [`producto`, `post`, `proyecto`],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mevasa`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/IconoMevasa.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
