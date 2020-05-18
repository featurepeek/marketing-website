import React from 'react'

// import Commenting from 'images/Commenting'
// import DesignComeToLife from 'images/DesignComeToLife'
// import RealData from 'images/RealData'
import BlockMerge from 'images/BlockMerge'
// import Balance from 'images/Balance'

export default [
  {
    heading: 'Annotate directly on the implementation itself',
    paragraphs: [
      'Just like how tools like Figma and InVision let you collaborate on design, FeaturePeek lets you collaborate on implementation.',
      "Take screenshots of an element on the page, and it'll be saved as a comment on the pull request, even if as a designer you don't have a GitHub account.",
      // 'Video recording support coming soon!',
    ],
    image: <img alt="Annotate the website" src="/img/art/annotate.svg" />,
  },
  {
    heading: "Be more included in Engineering's release process",
    paragraphs: [
      'FeaturePeek gives you a lens inside the web development lifecycle so that your entire team can have a holistic understanding of features as they get built.',
      "Leave reviews on your team's frontend with FeaturePeek so that your feedback can be on your developers' radar.",
    ],
    image: <img alt="Foster discussion among teams" src="/img/art/foster-discussion.svg" />,
  },
  {
    heading: 'See your designs come to life earlier in the release cycle',
    paragraphs: [
      'With deployment previews in their arsenal, your frontend developers will ask for your feedback sooner in the sprint.',
      'No more late requests for implementation feedback right before a release.',
    ],
    image: <img alt="Design tools" src="/img/art/swatch.svg" />,
  },
  {
    heading: 'Fill your designs with real production data',
    paragraphs: [
      'Sometimes in theory a design can be sound, but when met with actual live data, the design can break.',
      'Test your designs with real data earlier in your sprint so that you can catch and fix things otherwise overlooked.',
    ],
    image: <img alt="Test features" src="/img/art/test-tubes.svg" />,
  },
  {
    heading: "Block features from being merged if they aren't up to par",
    paragraphs: [
      "With Veto Power, you'll have the ability to block a new feature from deploying until its quality meets your standards.",
    ],
    image: <BlockMerge />,
  },
]
