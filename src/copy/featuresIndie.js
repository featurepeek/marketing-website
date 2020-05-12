import React from 'react'

// import SlackReviewers from 'images/SlackReviewers'
// import Leaderboards from 'images/Leaderboards'
// import BlockMerge from 'images/BlockMerge'

export default [
  {
    heading: 'Get implementation feedback from stakeholders sooner',
    paragraphs: [
      'Collect feedback from all stakeholders faster by sharing a link to review visually before code review.',
      "Don't wait for code review to finish before getting implementation feedback from Design — if there's a change requested, you'll have to go through code review again.",
      "Instead, get feedback from designers while you're waiting on code review so that you aren't scrambling at the end of a release.",
    ],
    image: <img alt="Visual code review" src="/img/art/visual-code-review.svg" />,
  },
  {
    heading: 'Foster discussion on upcoming changes',
    paragraphs: [
      'FeaturePeek gives you a lens inside the web development lifecycle so that your entire team can have a holistic understanding of features as they get built.',
      "Leave reviews on your team's front-end with FeaturePeek so that your feedback can be on your developers' radar.",
    ],
    image: <img alt="Foster discussion among teams" src="/img/art/foster-discussion.svg" />,
  },
  {
    heading: "Get your reviewers' browser metadata automatically",
    paragraphs: [
      'No more following-up with bug originators about the browser they were using or the URL where the bug occurred.',
      "Commenting on a screenshot or annotation automatically sends along the user's relevant environment metadata like browser version and viewport dimensions.",
    ],
    image: <img alt="Capture sessions" src="/img/art/capture-sessions.svg" />,
  },
  {
    heading: 'See your build on another machine before committing to the main branch',
    paragraphs: [
      'There are a slew of reasons why something could work on your laptop, but be busted when it hits the server: local fonts missing, global dependencies not installed, etc.',
      'By using FeaturePeek, you get a preview of how it will look on the server before merging anything to the default branch.',
      'Kiss the "well it works on my machine" excuse goodbye.',
    ],
    image: <img alt="Preview on server" src="/img/art/preview-on-server.svg" />,
  },

  {
    heading: 'Confirm that reviewers are actually running your code',
    paragraphs: [
      "Each deployment shows the amount of times its been accessed, and by which browsers, so you'll have a sense of how much manual test coverage went into each branch.",
      "You can even choose to prevent pull requests from being merged if the deployment hasn't been viewed yet.",
    ],
    image: <img alt="Run latest master" src="/img/art/latest-master.svg" />,
  },
  {
    heading: 'Test your implementations with real production data',
    paragraphs: [
      'Sometimes in theory a design can be sound, but when met with actual live data, the design can break.',
      'Test your designs with real data earlier in your sprint so that you can catch and fix things otherwise overlooked.',
    ],
    image: <img alt="Test features" src="/img/art/test-tubes.svg" />,
  },
]
