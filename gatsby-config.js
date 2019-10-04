require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Front-end review for the whole team · FeaturePeek`,
    author: `Jason Barry`,
    description: `FeaturePeek spins up an environment for every branch of your front-end, so you can get feedback from your team earlier in the web development cycle. Our collaboration tools make it easy to effectively communicate with your team.`,
    image: 'https://featurepeek.com/img/og-rect.png',
    siteUrl: `https://featurepeek.com`,
    social: {
      twitter: `featurepeek`,
    },
    authors: {
      jasonbarry: {
        name: 'Jason Barry',
        title: 'FeaturePeek Co-founder',
      },
      ericsilverman: {
        name: 'Eric Silverman',
        title: 'Co-founder & CEO',
      },
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.SEGMENT_ID,
        trackPage: true,
      }
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Plan', 'Product'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
        auth: false,
      }
    },
    {
      resolve: 'gatsby-source-mailchimp',
      options: {
        key: process.env.MAILCHIMP_API_KEY,
        rootURL: 'https://us20.api.mailchimp.com/3.0',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: `https://${process.env.MAILCHIMP_DOMAIN}/subscribe/post?u=${process.env.MAILCHIMP_FORM_ID}&id=${process.env.MAILCHIMP_LIST_ID}`,
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `featurepeek`,
      }
    },
  ],
}
