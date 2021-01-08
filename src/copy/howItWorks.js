import React from 'react'

import Mask from 'components/Mask'

import InstallGitHubApp from 'images/InstallGitHubApp'
import PeekYaml from 'images/PeekYaml'
import CiScript from 'images/CiScript'
import OpenPullRequest from 'images/OpenPullRequest'

export const steps = [
  'Install our GitHub App on your repo',
  'Check in a YAML file to your repo root',
  'Ping our service after your build phase in CI',
  'Open a new pull request and celebrate 🎉',
]

export const elaborations = [
  {
    strong: 'Install our app on your GitHub organization or repo.',
    body:
      "This lets us listen to webhooks and gives us permission to comment on your pull requests. You can install the app on a single repo or on your org itself — it's up to you.",
    image: (
      <Mask>
        <a href="https://github.com/apps/featurepeek/installations/new" target="_blank">
          <InstallGitHubApp />
        </a>
      </Mask>
    ),
  },
  {
    strong: 'Check in a config file to your repo root.',
    body:
      'For each project you want on FeaturePeek, check in a peek.yml file to your repo root. You can track an unlimited number of projects on FeaturePeek.',
    image: (
      <Mask>
        <PeekYaml />
      </Mask>
    ),
  },
  {
    strong: 'Ping our service after your build phase.',
    body:
      'Tell us when your pull request builds are ready by pinging our service. Our one-line command works on all of the popular Continuous Integration platforms and container registries.',
    image: (
      <Mask>
        <CiScript />
      </Mask>
    ),
  },
  {
    strong: 'Open a new pull request.',
    body:
      "That's it! Every new pull request opened will link to a corresponding FeaturePeek deployment. You can also view all of your open deployments on your FeaturePeek dashboard.",
    image: (
      <Mask padding={8}>
        <OpenPullRequest />
      </Mask>
    ),
  },
]
