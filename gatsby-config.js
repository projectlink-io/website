const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Projectlink`,
    titleTemplate: `%s | the network for industry leaders`,
    description: `Projectlink is a global network for industry leaders`,
    author: `Projectlink`,
    siteUrl: "https://www.projectlink.io",
    image: "/projectlink.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        isResettingsCSS: true,
        isUsingColorMode: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts-v2",
      options: {
        fonts: [
          {
            family: 'Inter',
            variable: true,
            weights: ['400..700']
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        "components": path.join(__dirname, "src/components"),
        "svg": path.join(__dirname, "src/svg"),
        "layouts": path.join(__dirname, "src/layouts"),
        "src": path.join(__dirname, 'src'),
        "pages": path.join(__dirname, 'src/pages')
      }
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://gmail.us3.list-manage.com/subscribe/post?u=917122ec5826ff0e3c02b8bb8&amp;id=3aec3a80e9`
      },
    },
  ],
}
