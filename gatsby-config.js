module.exports = {
  siteMetadata: {
    siteUrl: "https://www.hera.org",
    title: 'Portfolio Website',
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
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
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
  ],

};