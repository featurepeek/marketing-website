import React from 'react'
import { text, number, select } from '@storybook/addon-knobs'

import { Button, Flex } from 'primitives'

export default { title: 'Button' }

export const defaultButton = () => (
  <Flex alignItems="center" justifyContent="center" height={100} width="100%">
    <Button
      background={select('Background', ['teal', 'green', 'purple', 'blue', 'green', 'white'])}
      fontSize={number('Font size', 18)}
    >
      {text('Label', 'Button label')}
    </Button>
  </Flex>
)
