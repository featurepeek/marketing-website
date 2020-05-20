import React from 'react'
import { gradientMap } from 'utils/color'

// import LinkInPullRequest from 'images/LinkInPullRequest'
// import DesignComeToLife from 'images/DesignComeToLife'
// import SaveTime from 'images/SaveTime'

export const valueProps = [
  {
    builtFor: 'Frontend Developers',
    heading: 'Collect implementation feedback with deployment previews',
    paragraphs: [
      "Connect your frontend repo to FeaturePeek, and we'll spin up a deployment preview whenever you open a pull request.",
      'Get feedback from your whole team faster by sharing the link to review visually before waiting on code review to finish.',
    ],
    color: gradientMap.green[0],
    buttonProps: {
      background: 'green',
      children: 'Features for Frontend Developers',
      href: '/for-frontend-developers',
      iconAfter: 'fas fa-arrow-right',
    },
    image: <img alt="Annotate the website" src="/img/art/annotate.svg" />,
  },
  {
    builtFor: 'Project Managers',
    heading: 'Prevent last-minute scrambles at the end of your release cycle',
    paragraphs: [
      'Catch mistakes earlier in your sprint cycle, before code lands on the default branch.',
      'Since each feature branch on FeaturePeek runs in its own isolated environment, your team will run into fewer integration bugs when deploying to production.',
    ],
    color: gradientMap.blue[0],
    buttonProps: {
      background: 'blue',
      children: 'Features for Project Managers',
      href: '/for-project-managers',
      iconAfter: 'fas fa-arrow-right',
    },
    image: <img alt="Save time during the release cycle" src="/img/art/save-time.svg" />,
  },
  {
    builtFor: 'UX Designers',
    heading: 'Ensure your actual designs ship',
    paragraphs: [
      'Iterate more quickly by leaving feedback on your implemented designs before code lands on your staging or QA server.',
      "Take screenshots of an HTML element on the page, and it'll be saved as a comment on the open pull request — even if you don't have a GitHub account.",
    ],
    color: gradientMap.pink[0],
    buttonProps: {
      background: 'pink',
      children: 'Features for UX Designers',
      href: '/for-ux-designers',
      iconAfter: 'fas fa-arrow-right',
    },
    image: <img alt="Visual code review" src="/img/art/swatch.svg" />,
  },
]

export const features = [
  {
    icon: 'fas fa-layer-group',
    heading: 'Architecture agnostic',
    body:
      "From static builds to Docker images, we can support your configuration. Since we don't manage your production environments, we can attach to any existing pipeline no matter the provider.",
  },
  {
    icon: 'fas fa-sync-alt',
    heading: 'Always up-to-date',
    body:
      "Deployments restart whenever a pull request receives an update, so they're always current. Once a PR is merged, reviewers get pointed to where that feature lives on your staging / QA environment.",
  },
  {
    icon: 'fas fa-link',
    heading: 'Share deep links',
    body:
      "Copy a path deep within your deployment to share with someone else. They'll be taken to the exact page to view your specific changes.",
  },
  // {
  //   icon: 'fas fa-comments',
  //   heading: 'The smart way to leave feedback',
  //   body:
  //     'Post comments and take screenshots directly on the implementation itself. Your feedback gets posted inline as a comment on the open pull request. Browser metadata gets included automatically.',
  // },
  {
    icon: 'fab fa-slack',
    heading: 'Stay on the pulse',
    body:
      "See when deployment previews are ready in Slack by hooking up FeaturePeek to a channel on your team's workspace.",
  },
  {
    icon: 'fas fa-terminal',
    heading: 'Set environment variables',
    body:
      'Configure a deployment with any run-time environment variables needed. Point to any existing back-end services that you may have.',
  },
  {
    icon: 'fas fa-unlock',
    heading: 'Control visibility',
    body:
      'Your deployments are private and only accessible by your team by default. You can choose to set your deployments to public, and then anyone with the link can view it.',
  },
  // {
  //   icon: 'fas fa-stopwatch',
  //   heading: 'Real-time',
  //   body: 'Your dashboard updates live as soon as pull requests are opened and closed.',
  // },
  // {
  //   icon: 'fas fa-eye',
  //   heading: 'What you see is what you deploy',
  //   body: 'The implementation you see on FeaturePeek is identical to the one you ship to production.',
  // },
]
