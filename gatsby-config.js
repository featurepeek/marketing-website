require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Deployment previews for UI/UX teams \u00B7 FeaturePeek`,
    author: `Jason Barry`,
    description: `FeaturePeek is a collaboration tool for UI/UX development teams that creates on-demand deployment previews for every frontend pull request.`,
    image: 'https://featurepeek.com/img/og-rect-logo.png',
    siteUrl: `https://featurepeek.com`,
    social: {
      twitter: `featurepeek`,
    },
    authors: {
      jasonbarry: {
        name: 'Jason Barry',
        title: 'Co-founder & Head of Product',
      },
      ericsilverman: {
        name: 'Eric Silverman',
        title: 'Co-founder & CEO',
      },
      bradjohnson: {
        name: 'Brad Johnson',
        title: 'Head of Marketing',
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
              linkImagesToOriginal: false,
              maxWidth: 590,
              quality: 90,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 96,
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
    {
      resolve: `gatsby-plugin-react-svg`,
      // options: {
      //   rule: {
      //     include: /art/,
      //   }
      // }
    },
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
