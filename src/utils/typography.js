import Typography from 'typography'
import Theme from 'typography-theme-github'

// Theme.overrideThemeStyles = () => {
//   return {
//     'a': {
//       color: '#05c5cc',
//       display: 'inline-block',
//       transition: 'all 0.3s ease',
//     },
//     'a:hover': {
//       textDecoration: 'none',
//       transform: 'translateY(-2px)',
//     },
//   }
// }

const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
