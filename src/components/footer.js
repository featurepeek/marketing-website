// @flow
import React from 'react'
import Box from 'ui-box'

import Column from 'primitives/column'
import Flex from 'primitives/flex'
import Li from 'primitives/li'
import Link from 'primitives/link'
import Ul from 'primitives/ul'

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
        text: 'For Product Managers',
        href: '/for-product-managers',
      },
      {
        text: 'How it works',
        href: '/how-it-works',
      },
      {
        text: 'Pricing',
        href: '/pricing',
      },
    ]
  },
  {
    section: 'More resources',
    links: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Documentation',
        href: 'https://docs.featurepeek.com',
      },
      {
        text: 'Changelog',
        href: 'https://headwayapp.co/featurepeek-changelog',
      },
      {
        text: 'Roadmap',
        href: 'https://featurepeek.nolt.io',
      },
      {
        text: 'Status',
        href: 'https://updown.io/ratp',
      },
    ]
  },
  {
    section: 'Company',
    links: [
      {
        text: 'Privacy policy',
        href: '/privacy',
      },
      {
        text: 'Terms',
        href: '/terms',
      },
      {
        text: 'Contact',
        href: 'mailto:contact@featurepeek.com',
      },
      {
        text: '',
        href: '',
      },
      {
        text: 'Y Combinator S19',
        href: 'mailto:founders@featurepeek.com',
      }
    ]
  }
]

export default function Footer(styles) {
  return (
    <Box
      is="footer"
      background="#0a3e53"
      paddingLeft={40}
      paddingY={40}
      {...styles}
    >
      <Flex>
        <Column flexGrow={1}>
          <Link href="/" underline={false}>
            <img src="/img/square-white.svg" height="32" style={{ marginBottom: 0 }} />
          </Link>
          {/* <p style={{ color: '#fff' }}> */}
          {/*   FeaturePeek enables startups to shorten feedback loops. */}
          {/* </p> */}
        </Column>
        <Column flexGrow={1.5}>
          <Flex>
            {columns.map(column => (
              <Column key={column.section}>
                <p><strong style={{ color: '#fff' }}>{column.section}</strong></p>
                <Ul>
                  {column.links.map(link => (
                    <Li key={link.text}>
                      <Link href={link.href} color="white" opacity={0.5}>
                        {link.text}
                      </Link>
                    </Li>
                  ))}
                </Ul>
              </Column>
            ))}
          </Flex>
        </Column>
      </Flex>
    </Box>
  )
}
