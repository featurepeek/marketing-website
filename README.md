# featurepeek.com on FeaturePeek

Interested in using FeaturePeek? Take a look at this repository to get an idea of how it works.

✨ [Create an account](https://dashboard.featurepeek.com)

🔮 [View pull requests for links to live demos](https://github.com/featurepeek/marketing-website/pulls)

📺 [Watch a video of FeaturePeek in action](https://www.youtube.com/watch?v=14UwLG1jQwU)

## Introduction

This is the GitHub repository for the front-end source code of [featurepeek.com](https://featurepeek.com). It's integrated with FeaturePeek, so you can get an understanding of how to integrate your own front-end projects simply by poking around in this one. 

There are two files in particular to pay attention to:

- [peek.yml](https://github.com/featurepeek/marketing-website/blob/dev/peek.yml): This is the project config file -- it's how you indicate which of your organization's repositories you'd like to spin up on FeaturePeek. 
- [.circleci/config.yml](https://github.com/featurepeek/marketing-website/blob/dev/.circleci/config.yml#L71): This project uses [CircleCI](https://circleci.com) for Continuous Integration, but you can bring along any other CI service. Take a look at this file to see how easy it is to set up FeaturePeek in your CI pipeline. 

## Development

This project is a [Gatsby](http://gatsbyjs.org) project. 

After cloning this repo, install dependencies by running `yarn` or `npm i`. 

To spin up a local development server, run `yarn dev`. 

All other scripts can be found in `package.json`.

## More resources

- [Documentation](https://docs.featurepeek.com/)
- [Changelog](https://headwayapp.co/featurepeek-changelog)
- [Roadmap](https://trello.com/b/KlPuYOCp/featurepeek-public-roadmap)
- [Status](https://updown.io/ratp)
