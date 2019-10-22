// @flow
import React from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'

import { Column, Flex, Icon, ListItem, Link, Paragraph, Strong, UnorderedList } from 'primitives'
import JoinMailingList from 'components/JoinMailingList'

const socials = [
  {
    icon: 'fab fa-github',
    href: 'https://github.com/featurepeek',
  },
  {
    icon: 'fab fa-twitter',
    href: 'https://twitter.com/featurepeek',
  },
  {
    icon: 'fab fa-linkedin-in',
    href: 'https://www.linkedin.com/company/14791957',
  },
]

const columns = [
  {
    section: 'Overview',
    links: [
      {
        text: 'For Front-end Developers',
        href: '/for-frontend-developers',
      },
      {
        text: 'For UX Designers',
        href: '/for-ux-designers',
      },
      {
        text: 'For Project Managers',
        href: '/for-project-managers',
      },
      {
        text: 'How it works',
        href: '/how-it-works',
      },
      {
        text: 'Pricing',
        href: '/pricing',
      },
    ],
  },
  {
    section: 'More resources',
    links: [
      {
        text: 'Video walkthrough',
        href: 'https://www.youtube.com/watch?v=14UwLG1jQwU',
      },
      {
        text: 'Documentation',
        href: 'https://docs.featurepeek.com',
        target: '_blank',
      },
      {
        text: 'Changelog',
        href: 'https://headwayapp.co/featurepeek-changelog',
        target: '_blank',
      },
      {
        text: 'Product updates',
        href: '/product-updates',
      },
      {
        text: 'Demo',
        href: 'https://dashboard.featurepeek.com/demo',
        target: '_blank',
      },
    ],
  },
  {
    section: 'Company',
    links: [
      // {
      //   text: 'Blog',
      //   href: '/blog',
      // },
      {
        text: 'Privacy policy',
        href: '/pdfs/privacy.pdf',
      },
      {
        text: 'Terms',
        href: '/pdfs/terms.pdf',
      },
      {
        text: 'Contact',
        href: 'mailto:hello@featurepeek.com?subject=Hello',
      },
      {
        text: '',
        href: '',
      },
      {
        icon: 'fab fa-y-combinator',
        iconColor: '#ff6601',
        text: 'Y Combinator S19',
        href: 'https://techcrunch.com/2019/07/26/featurepeek-wants-put-an-end-to-last-minute-front-end-design-reviews/',
        target: '_blank',
      },
    ],
  },
]

export default function Footer(styles) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box is="footer" background="#0a3e53" padding={40} {...styles}>
          <Flex>
            <Column flexGrow={1}>
              <Flex alignItems="center" flexDirection="row" marginBottom={32}>
                <Link href="/" underline={false}>
                  <img alt="Square logo" src="/img/square-white.svg" height="32" style={{ marginBottom: 0 }} />
                </Link>
                {socials.map(social => (
                  <Link key={social.icon} href={social.href} underline={false} target="_blank">
                    <Icon icon={social.icon} color="white" fontSize={24} marginLeft={32} opacity={0.5} />
                  </Link>
                ))}
                <Link href="https://www.crunchbase.com/organization/featurepeek" underline={false} target="_blank">
                  <img
                    alt="Crunchbase"
                    src="/img/crunchbase.svg"
                    style={{ marginBottom: 0, marginLeft: 32 }}
                    width="32"
                  />
                </Link>
              </Flex>
              <Paragraph color="white" fontSize={14} marginBottom={24}>
                FeaturePeek shortens feedback loops for teams building web products. Enter your email below to receive
                our newsletter about the software development lifecycle.
              </Paragraph>
              <JoinMailingList dark />
            </Column>
            <Column flexGrow={2} marginLeft={mobile ? 0 : 96}>
              <Flex>
                {columns.map(column => (
                  <Column key={column.section} marginTop={mobile ? 16 : 0}>
                    <Paragraph>
                      <Strong color="white">{column.section}</Strong>
                    </Paragraph>
                    <UnorderedList>
                      {column.links.map(link => (
                        <ListItem key={link.text}>
                          {link.icon && (
                            <Icon
                              icon={link.icon}
                              color={link.iconColor}
                              fontSize={24}
                              transform="translateY(3px)"
                              marginRight={8}
                            />
                          )}
                          <Link href={link.href} color="white" opacity={0.5} target={link.target}>
                            {link.text}
                          </Link>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Column>
                ))}
              </Flex>
            </Column>
          </Flex>
        </Box>
      )}
    </MediaQuery>
  )
}
