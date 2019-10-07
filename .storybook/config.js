import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import '../src/styles/global.css'

addDecorator(withKnobs)

configure(require.context('../src/stories', true, /\.story\.js$/), module)
