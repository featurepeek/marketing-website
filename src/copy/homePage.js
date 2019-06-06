import { gradientMap } from 'utils/color'

export const valueProps = [
  {
    heading: 'Get implementation feedback from your designers sooner',
    paragraphs: [
      'Collect feedback from your designers faster by sending them a link to review visually before code review.',
      "Don't wait for code review to finish before getting implementation feedback from Design — if there's a change requested, you'll have to go through code review again.",
      "Instead, get feedback from designers while you're waiting on code review, asynchronously.",
    ],
    color: gradientMap.green[0],
    buttonProps: {
      background: 'green',
      children: 'Built for Front-end Devs',
      href: '/for-frontend-developers',
      iconAfter: 'fas fa-arrow-right',
    },
  },
  {
    heading: 'Annotate directly on the implementation itself',
    paragraphs: [
      'Just like how tools like Figma and InVision let you collaborate on design, FeaturePeek lets you collaborate on implementation.',
      "Take screenshots of an element on the page, and it'll be saved as a comment on the pull request, even if as a designer you don't have a GitHub account.",
      // 'Video recording support coming soon!',
    ],
    color: gradientMap.pink[0],
    buttonProps: {
      background: 'pink',
      children: 'Built for UX Designers',
      href: '/for-ux-designers',
      iconAfter: 'fas fa-arrow-right',
    },
  },
  {
    heading: "See a birds-eye view of your team's works in progress",
    paragraphs: [
      "Keep tabs on your team's progress without bothering them or asking for status updates.",
      'All open pull requests across all your projects (with screenshot thumbnails) are visible at once in the FeaturePeek dashboard.',
    ],
    color: gradientMap.blue[0],
    buttonProps: {
      background: 'blue',
      children: 'Built for Product Managers',
      href: '/for-product-managers',
      iconAfter: 'fas fa-arrow-right',
    },
  },
]

export const features = [
  {
    icon: 'fas fa-layer-group',
    heading: 'Architecture agnostic',
    body:
      "From static builds to Docker containers, we can support your configuration. Since we don't manage your production environments, we can attach to any existing pipeline no matter the provider.",
  },
  {
    icon: 'fas fa-code-branch',
    heading: 'Always up-to-date',
    body:
      "Environments restart whenever a pull request receives a new commit, so they're always up-to-date. Once a PR is merged, reviewers get pointed to where that feature lives on staging.",
  },
  {
    icon: 'fas fa-link',
    heading: 'Share deep links',
    body:
      "Copy a path deep within your environment to share with someone else. They'll be taken to the exact page that you intended.",
  },
  {
    icon: 'fas fa-comments',
    heading: 'The smart way to leave feedback',
    body:
      'Post comments and take screenshots directly on the implementation itself. Your feedback gets posted inline as a comment on the open pull request. Browser metadata gets included automatically.',
  },
  {
    icon: 'far fa-dot-circle',
    heading: 'Stay on the pulse',
    body: "See when new environments spin up in Slack by hooking up FeaturePeek to a channel on your team's workspace.",
  },
  {
    icon: 'fas fa-terminal',
    heading: 'Control environment variables',
    body: 'Restart an environment with any run-time environment variables you desire.',
  },
  {
    icon: 'fas fa-unlock',
    heading: 'Set private or public',
    body:
      'Your running environments are only accessible by your team by default, unless you set your project to be public. Then anyone with a link can view.',
  },
  {
    icon: 'fas fa-stopwatch',
    heading: 'Real-time',
    body: 'Your dashboard updates live as soon as pull requests are opened and closed.',
  },
  {
    icon: 'fas fa-eye',
    heading: 'What you see is what you deploy',
    body: 'The implementation you see on FeaturePeek is identical to the one you ship to production.',
  },
]
