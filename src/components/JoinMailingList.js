// @flow
import React, { useState } from 'react'
import Box from 'ui-box'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { Flex, Paragraph, TextInput } from 'primitives'

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
        <Flex>
          <TextInput
            background={dark ? '#0d5166' : undefined}
            border={dark ? 0 : '1px solid #ccc'}
            color={dark ? 'white' : undefined}
            marginBottom={24}
            marginRight={8}
            name="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email address to join our mailing list"
            type="email"
            value={email}
          />
          {email.length > 0 && (
            <input
              // disabled
              type="submit"
              value="Join mailing list"
              style={{
                background: dark ? '#0d5166' : '#05c5cc',
                border: 0,
                borderRadius: 8,
                color: 'white',
                cursor: 'pointer',
                marginBottom: 24,
                padding: '8px 12px',
                whiteSpace: 'nowrap',
              }}
            />
          )}
        </Flex>
      </form>
      {subscribedEmail && (
        <Paragraph color={dark ? 'white' : 'green'} fontSize={13}>
          {subscribedEmail} has been added to the list.
        </Paragraph>
      )}
    </Box>
  )
}
