import React from 'react'

import InstallGitHubApp from 'images/InstallGitHubApp'
import PeekYaml from 'images/PeekYaml'
import CiScript from 'images/CiScript'
import OpenPullRequest from 'images/OpenPullRequest'

export const steps = [
  'Install our GitHub App on your org',
  'Check-in a file to your repo root',
  'Ping our service after your build phase in CI',
  'Open a new pull request and celebrate 🎉',
]

export const elaborations = [
  {
    strong: 'Install our app on your GitHub organization.',
    body: 'This lets us listen to webhooks and gives us permission to comment on your pull requests.',
    image: <InstallGitHubApp />,
  },
  {
    strong: 'Check-in a file to your repo root.',
    body:
      'For each project you want on FeaturePeek, check-in a peek.yml file to your repo root. You can track an unlimited number of projects on FeaturePeek.',
    image: <PeekYaml />,
  },
  {
    strong: 'Ping our service after your build phase.',
    body:
      'Tell us when your pull request builds are ready by pinging our service. Our single-line command works with a number of CI platforms and container registries.',
    image: <CiScript />,
  },
  {
    strong: 'Open a new pull request.',
    body:
      "That's it! Every new pull request opened will have a corresponding FeaturePeek environment. Once you merge it in, every new branch will be able to use our suite of collaboration tools.",
    image: <OpenPullRequest />,
  },
]
