/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.miamitech.works`,
    title: "Miami Tech Works",
    description: "Find a new career in Miami Tech",
    author: "MiamiTech.Works",
    keywords: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `MiamiTech.Works`,
            icon: `src/images/favicon.png`,
            short_name: `MiamiTech.Works`,
            start_url: `/`,
            display: `standalone`,
        },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
            apiKey: process.env.GATSBY_API_KEY,
            authDomain: "miami-works.firebaseapp.com",
            databaseURL: "https://miami-works.firebaseio.com",
            projectId: "miami-works",
            storageBucket: "miami-works.appspot.com",
            messagingSenderId: "222583667104",
            appId: "1:222583667104:web:961b7f076b71de9547ccc5",
            measurementId: process.env.GATSBY_MEASUREMENT_ID
        }
      }
    },
  ],
}
