import React from 'react'

import { Button, Flex } from 'primitives'

export default { title: 'Button' }

export const withText = () => (
  <Flex alignItems="center" justifyContent="center" height={100} width="100%">
    <Button>Button</Button>
  </Flex>
)
