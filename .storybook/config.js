import { configure } from '@storybook/react'
import '../src/styles/global.css'

configure(require.context('../src/stories', true, /\.story\.js$/), module)
