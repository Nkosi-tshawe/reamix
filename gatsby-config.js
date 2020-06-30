/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Simple Music Playa`,
    description: `A simple description about music player...`,
    author: `Nkosi`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Playa`,
        short_name: `Playa`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/logos/touch-icon-iphone.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
          url: 'https://zamusic.org/wp-json/wp/v2/posts',
          method: 'get',
          headers: {
              'Content-Type': 'application/json'
          },
          typePrefix: 'internal__',
          name: `posts`,
          params: {
            per_page: 20
          },
          verboseOutput: true,
      }
      },
      // {
      //   resolve: 'gatsby-source-apiserver',
      //   options: {
      //       url: 'https://zamusic.org/wp-json/wp/v2/categories',
      //       method: 'get',
      //       headers: {
      //           'Content-Type': 'application/json'
      //       },
      //       typePrefix: 'internal__',
      //       name: `categories`,
      //       params: {
      //         per_page: 20
      //       },
      //       verboseOutput: true,
      //   }
      //   },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}