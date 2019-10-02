const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/BlogPost.js`)
  const campaignPost = path.resolve(`./src/templates/CampaignPost.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        allMailchimpCampaign {
          totalCount
          edges {
            next {
              campaignId
              settings {
                preview_text
                subject_line
                title
              }
              status
            }
            previous {
              campaignId
              settings {
                preview_text
                subject_line
                title
              }
              status
            }
            node {
              html
              settings {
                preview_text
                subject_line
                title
              }
              campaignId
              send_time
              status
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          postPath: `/blog${post.node.fields.slug}`,
          previous,
          next,
        },
      })
    })

    // Create product update pages
    const campaigns = result.data.allMailchimpCampaign.edges

    campaigns.forEach((campaign, index) => {
      const previous = index === campaigns.length - 1 ? null : campaigns[index + 1].node
      const next = index === 0 ? null : campaigns[index - 1].node

      createPage({
        path: `/product-updates/${campaign.node.campaignId}`,
        component: campaignPost,
        context: {
          slug: campaign.node.campaignId,
          postPath: `/product-updates/${campaign.node.campaignId}`,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
