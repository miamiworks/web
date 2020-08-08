/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")
module.exports = {
    siteMetadata: {
        siteUrl: `https://www.example.com`,
    },
    plugins: [
        {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: path.join(__dirname, `src`, `images`),
        },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`, 
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sitemap`,
    ],
}
