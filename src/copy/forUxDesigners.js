import React from 'react'

import Commenting from 'images/Commenting'

export default [
  {
    heading: 'Leave feedback earlier in the software development cycle',
    paragraphs: [
      'With feature environments in their arsenal, your front-end developers will ask for your feedback sooner in the sprint.',
      'No more late requests for implementation feedback right before a release.',
    ],
  },
  {
    heading: 'Annotate directly on the implementation itself',
    paragraphs: [
      'Just like how tools like Figma and InVision let you collaborate on design, FeaturePeek lets you collaborate on implementation.',
      "Take screenshots of an element on the page, and it'll be saved as a comment on the pull request, even if as a designer you don't have a GitHub account.",
      // 'Video recording support coming soon!',
    ],
    image: <Commenting />,
  },
  {
    heading: 'See your designs filled with real production data',
    paragraphs: ["Be included in your team's release process"],
  },
  // {
  //   heading: 'File bugs correctly, with critical information pre-filled',
  //   paragraphs: ['Your front-end developers will love you for it!'],
  // },
  {
    heading: "Block features from being merged if they aren't up to par",
    paragraphs: [
      "If granted Veto Power by a team admin, you'll have the ability to block a new feature from deploying until its quality meets your standards.",
    ],
  },
  {
    heading: "Be more included in your team's release process",
    paragraphs: ["Solve 'is this what you meant?'"],
  },
]
