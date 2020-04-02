import React from 'react'

// import BirdsEyeView from 'images/BirdsEyeView'
// import Partnership from 'images/Partnership'
// import SaveTime from 'images/SaveTime'
// import Terminal from 'images/Terminal'
import Leaderboards from 'images/Leaderboards'

export default [
  {
    heading: 'Save time during your release cycle',
    paragraphs: [
      'Catch mistakes earlier in the release cycle, before code lands on the master branch.',
      'Since each implementation on FeaturePeek runs in isolation, your team will run into fewer integration bugs when deploying to production.',
    ],
    image: <img alt="Save time during your release" src="/img/art/save-time.svg" />,
  },
  {
    heading: "See a birds-eye view of your team's works in progress",
    paragraphs: [
      "Keep tabs on your team's progress without bothering them or asking for status updates.",
      'All open pull requests for all your projects are visible in the FeaturePeek dashboard.',
    ],
    image: <img alt="Birds-eye view" src="/img/art/birds-eye-view.svg" />,
  },
  {
    heading: 'Shorten feedback loops between Design and Engineering teams',
    paragraphs: [
      'Tighten the iterative process of software development by giving your team the tools they need.',
      "The closer your designers and developers work together, the more confident you'll be in the quality of the release.",
    ],
    image: <img alt="Shorten feedback loops" src="/img/art/shorten-feedback-loops.svg" />,
  },
  {
    heading: 'Run other branches without checking out locally',
    paragraphs: [
      "Stop dev server, checkout branch, install dependencies, restart dev server... Sound familiar? Reviewing your team's work shouldn't be so interruptive.",
      'With FeaturePeek, every branch is waiting for you in a dedicated environment. Running a branch is as easy as visiting a link.',
    ],
    image: <img alt="Review feature branch" src="/img/art/review-feature-branch.svg" />,
  },
  {
    heading: 'Recognize and reward team engagement',
    paragraphs: [
      'Sometimes reviewing a release takes all hand on deck.',
      "FeaturePeek's leaderboards show who in your team is the most engaged in leaving constructive implementation feedback, so you can give credit where credit is due.",
    ],
    image: <Leaderboards />,
  },
]
