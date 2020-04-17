// @flow
import React, { useState } from 'react'
import Box from 'ui-box'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { Flex, Icon, Paragraph, TextInput } from 'primitives'

import { track } from 'utils/analytics'

export default function JoinMailingList({ dark }) {
  const [email, setEmail] = useState('')
  const [subscribedEmail, setSubscribedEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    addToMailchimp(email).then(() => {
      track('Joined Waitlist', { email })
      setEmail('')
      setSubscribedEmail(email)
    })
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Flex position="relative">
          <TextInput
            background={dark ? '#0d5166' : undefined}
            border={dark ? '0' : '1px solid #05c5cc'}
            borderRadius={100}
            color={dark ? 'white' : undefined}
            // marginBottom={24}
            name="email"
            onChange={e => setEmail(e.target.value)}
            paddingX={24}
            paddingY={13}
            placeholder="Enter your email address"
            type="email"
            value={email}
          />
          <button
            // disabled
            type="submit"
            value="Join mailing list"
            style={{
              background: dark ? '#0d5166' : '#05c5cc',
              border: 0,
              borderRadius: 100,
              color: 'white',
              cursor: 'pointer',
              marginBottom: 24,
              padding: '8px 14px',
              position: 'absolute',
              right: 3,
              top: 3,
              whiteSpace: 'nowrap',
            }}
          >
            <Icon icon="fas fa-arrow-right" color="white" fontSize={24} paddingTop={4} />
          </button>
        </Flex>
      </form>
      {subscribedEmail && (
        <Paragraph color={dark ? 'white' : '#05c5cc'} fontSize={13}>
          {subscribedEmail} has been added to the list.
        </Paragraph>
      )}
    </Box>
  )
}
