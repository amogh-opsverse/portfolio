module.exports = {
  siteMetadata: {
    siteUrl: "https://www.hera.org",
    title: 'a m o g h',
    description: 'Portfolio Website',
    image: 'https://i.pinimg.com/236x/50/c2/e8/50c2e875992887a0814172c32782e189--ancient-greek-art-ancient-greece.jpg'
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    //This set of plugins is to enable creating MDX blog posts from the src/posts folder
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },

    
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //   },
    // },
    // `gatsby-transformer-yaml`,
    // {
    //   resolve: "gatsby-plugin-google-fonts",
    //   options: {
    //     fonts: [
    //       {
    //         family: "greek",
    //         variants: ["400", "700"],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js')
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'vnkupgyb',
        dataset: 'production',
      }
    }
  ],

};