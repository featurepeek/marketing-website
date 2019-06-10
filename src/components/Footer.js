// @flow
import React, { useState } from 'react'
import Box from 'ui-box'
import MediaQuery from 'react-responsive'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { Column, Flex, Icon, ListItem, Link, Paragraph, Strong, TextInput, UnorderedList } from 'primitives'
import { track } from 'utils/analytics'

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
      // {
      //   text: 'Blog',
      //   href: '/blog',
      // },
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
        text: 'Roadmap',
        href: 'https://trello.com/b/KlPuYOCp/featurepeek-public-roadmap',
        target: '_blank',
      },
      {
        text: 'Status',
        href: 'https://updown.io/ratp',
        target: '_blank',
      },
    ],
  },
  {
    section: 'Company',
    links: [
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
      track('Joined Waitlist', email)
      setEmail('')
      setSubscribedEmail(email)
    })
  }

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
              </Flex>
              <Paragraph color="white" fontSize={14} marginBottom={24}>
                FeaturePeek shortens feedback loops for teams building web products. Enter your email below to receive
                our newsletter about the software development lifecycle.
              </Paragraph>
              <form onSubmit={handleSubmit}>
                <Flex>
                  <TextInput
                    background="#0d5166"
                    color="white"
                    marginRight={8}
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder={
                      mobile
                        ? 'Email address'
                        : `Enter your email address ${email.length === 0 ? 'to join our mailing list' : ''}`
                    }
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
                        marginTop: mobile ? 24 : 0,
                        padding: '8px 12px',
                        whiteSpace: 'nowrap',
                      }}
                    />
                  )}
                </Flex>
              </form>
              {subscribedEmail && (
                <Paragraph color="white" fontSize={13}>
                  {subscribedEmail} has been added to the list.
                </Paragraph>
              )}
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
