// @flow
import React, { useState } from 'react'
import Box from 'ui-box'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Column from 'primitives/column'
import Flex from 'primitives/flex'
import Icon from 'primitives/icon'
import Li from 'primitives/li'
import Link from 'primitives/link'
import TextInput from 'primitives/textinput'
import Ul from 'primitives/ul'

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
    href: 'https://linkedin.com/in/featurepeek',
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
    ],
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
    ],
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
        icon: 'fab fa-y-combinator',
        iconColor: '#ff6601',
        text: 'Y Combinator S19',
        href: 'mailto:founders@featurepeek.com',
      },
    ],
  },
]

export default function Footer(styles) {
  const [email, setEmail] = useState('')
  const [subscribedEmail, setSubscribedEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    addToMailchimp(email).then(() => {
      setEmail('')
      setSubscribedEmail(email)
    })
  }

  return (
    <Box is="footer" background="#0a3e53" paddingLeft={40} paddingY={40} {...styles}>
      <Flex>
        <Column flexGrow={1}>
          <Flex alignItems="center" marginBottom={32}>
            <Link href="/" underline={false}>
              <img src="/img/square-white.svg" height="32" style={{ marginBottom: 0 }} />
            </Link>
            {socials.map(social => (
              <Link key={social.icon} href={social.href} underline={false}>
                <Icon icon={social.icon} color="white" fontSize={24} marginLeft={32} opacity={0.5} />
              </Link>
            ))}
          </Flex>
          <p style={{ color: '#fff', fontSize: 14, marginBottom: 24 }}>
            FeaturePeek enables startups to shorten feedback loops. Blah blah blah mission statement goes here.
          </p>
          <form onSubmit={handleSubmit}>
            <Flex>
              <TextInput
                background="#0d5166"
                color="white"
                marginRight={8}
                name="email"
                onChange={e => setEmail(e.target.value)}
                placeholder={`Enter your email address ${email.length === 0 ? 'to join our mailing list' : ''}`}
                type="email"
                value={email}
              />
              {email.length > 0 && (
                <input
                  // disabled
                  type="submit"
                  value="Join mailing list"
                  style={{
                    background: '#0d5166',
                    color: 'white',
                    border: 0,
                    borderRadius: 8,
                    padding: '8px 12px',
                    whiteSpace: 'nowrap',
                  }}
                />
              )}
            </Flex>
          </form>
          {subscribedEmail && (
            <p style={{ color: '#fff', fontSize: 13 }}>{subscribedEmail} has been added to the list.</p>
          )}
        </Column>
        <Column flexGrow={2} marginLeft={96}>
          <Flex>
            {columns.map(column => (
              <Column key={column.section}>
                <p>
                  <strong style={{ color: '#fff' }}>{column.section}</strong>
                </p>
                <Ul>
                  {column.links.map(link => (
                    <Li key={link.text}>
                      {link.icon && (
                        <Icon
                          icon={link.icon}
                          color={link.iconColor}
                          fontSize={24}
                          transform="translateY(3px)"
                          marginRight={8}
                        />
                      )}
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
