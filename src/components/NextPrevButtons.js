// @flow
import React from 'react'
import MediaQuery from 'react-responsive'

import { Button, Flex } from 'primitives'

const buttonProps = {
  developers: {
    background: 'green',
    href: '/for-frontend-developers',
    children: 'Frontend Developers',
  },
  designers: {
    background: 'pink',
    href: '/for-ux-designers',
    children: 'UX Designers',
  },
  managers: {
    background: 'blue',
    href: '/for-project-managers',
    children: 'Project Managers',
  },
}

export default function NextPrevButtons({ next, prev }) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Flex justifyContent="space-around" marginTop={200} width="100%">
          <Flex alignItems="center" justifyContent="center" height={100} width={mobile ? undefined : 1}>
            <Button iconBefore="fas fa-arrow-left" width={mobile ? undefined : 300} {...buttonProps[prev]} />
          </Flex>
          <Flex alignItems="center" justifyContent="center" height={100} width={mobile ? undefined : 1}>
            <Button iconAfter="fas fa-arrow-right" width={mobile ? undefined : 300} {...buttonProps[next]} />
          </Flex>
        </Flex>
      )}
    </MediaQuery>
  )
}
