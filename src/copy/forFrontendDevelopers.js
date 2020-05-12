import React from 'react'

// import LinkInPullRequest from 'images/LinkInPullRequest'
// import BrowserMetadata from 'images/BrowserMetadata'
// import AnotherMachine from 'images/AnotherMachine'
// import PageViews from 'images/PageViews'
import SlackReviewers from 'images/SlackReviewers'
// import Terminal from 'images/Terminal'

export default [
  {
    heading: 'Get implementation feedback from your designers sooner',
    paragraphs: [
      'Collect feedback from your designers faster by sharing a link to review visually before code review.',
      "Don't wait for code review to finish before getting implementation feedback from Design — if there's a change requested, you'll have to go through code review again.",
      "Instead, get feedback from designers while you're waiting on code review so that you aren't scrambling at the end of a release.",
    ],
    image: <img alt="Visual code review" src="/img/art/visual-code-review.svg" />,
  },
  {
    heading: 'Run other branches without checking out locally',
    paragraphs: [
      "Stop dev server, checkout branch, install dependencies, restart dev server... Sound familiar? Reviewing your peers' work shouldn't be so interruptive.",
      'With FeaturePeek, every branch is waiting for you in a dedicated environment. Running a branch is as easy as visiting a web page.',
    ],
    image: <img alt="Review feature branches" src="/img/art/review-feature-branch.svg" />,
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
    heading: "Get your reviewers' browser metadata automatically",
    paragraphs: [
      'No more following-up with bug originators about the browser they were using or the URL where the bug occurred.',
      "Commenting on a screenshot or annotation automatically sends along the user's relevant environment metadata like browser version and viewport dimensions.",
    ],
    image: <img alt="Capture sessions" src="/img/art/capture-sessions.svg" />,
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
    heading: 'Remind your reviewers that they have pull requests to review',
    paragraphs: ["Set automated nudges in Slack to anyone on your team to review what you've been working on."],
    image: <SlackReviewers />,
  },
]
