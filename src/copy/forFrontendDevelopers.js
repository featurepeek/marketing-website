import React from 'react'

import LinkInPullRequest from 'images/LinkInPullRequest'
import BrowserMetadata from 'images/BrowserMetadata'
import PageViews from 'images/PageViews'
import SlackReviewers from 'images/SlackReviewers'
import Terminal from 'images/Terminal'

export default [
  {
    heading: 'Get implementation feedback from your designers sooner',
    paragraphs: [
      'Collect feedback from your designers faster by sending them a link to review visually before code review.',
      "Don't wait for code review to finish before getting implementation feedback from Design — if there's a change requested, you'll have to go through code review again.",
      "Instead, get feedback from designers while you're waiting on code review, asynchronously.",
    ],
    image: <LinkInPullRequest />,
  },
  {
    heading: 'Run other branches without checking out locally',
    paragraphs: [
      "Stop dev server, checkout branch, install dependencies, restart dev server... Sound familiar? Reviewing your peers' work shouldn't be so interruptive.",
      'With FeaturePeek, every branch is waiting for you in a dedicated environment. Running a branch is as easy as visiting a link.',
    ],
    image: <Terminal />,
  },
  {
    heading: 'See your build on another machine before committing to the main branch',
    paragraphs: [
      'There are a slew of reasons why something could work on your laptop, but be busted when it hits the server: local fonts missing, global dependencies not installed, etc.',
      'By using FeaturePeek, you get a preview of how it will look on the server before merging anything to the default branch.',
      'Kiss the "well it works on my machine" excuse goodbye.',
    ],
  },
  {
    heading: "Get your reviewers' browser metadata automatically",
    paragraphs: [
      'No more following-up with bug originators about the browser they were using or the URL where the bug occured.',
      "Commenting on a screenshot or annotation automatically sends along the user's relevant environment metadata like browser version and viewport dimensions.",
    ],
    image: <BrowserMetadata />,
  },
  {
    heading: 'Confirm that reviewers are actually running your code',
    paragraphs: [
      "Each environment shows the amount of times its been accessed, and by which browsers, so you'll have a sense of how much manual test coverage went into each feature environment.",
    ],
    image: <PageViews />,
  },
  {
    heading: 'Remind your reviewers that they have pull requests to review',
    paragraphs: ["Set automated nudges in Slack to anyone on your team to review the WIP you've been working on."],
    image: <SlackReviewers />,
  },
]
