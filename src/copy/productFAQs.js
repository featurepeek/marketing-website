export default [
  [
    {
      question: 'How does FeaturePeek work with frontends that depend on backend services?',
      answer:
        'You can set environment variables to be the base URL of existing backend services that you host. Each FeaturePeek project has a single unique domain that you can whitelist in order to allow CORS requests or OAuth callbacks.',
    },
    {
      question: 'Can I have an always-running deployment of a branch, or are deployments only tied to pull requests?',
      answer:
        "Yes, you can have a FeaturePeek deployment that always points to the latest commit of a given branch, in addition to deployments from pull requests. To do this, you must make the branch a protected branch in the repo's settings on GitHub, and ensure that CI runs your build command and pings FeaturePeek when that branch gets merged.",
    },
    {
      question: 'Can I run FeaturePeek from the command line?',
      answer: 'Yes — take a look at [FeaturePeek Indie](/product/indie).',
    },
  ],
  [
    {
      question: 'When do FeaturePeek deployments shut down?',
      answer:
        'FeaturePeek automatically spins deployments up and down based on the lifecycle of its associated pull request. After a pull request gets merged or closed, its deployment shuts down after a 24-hour grace period. Once a deployment is shutdown, it can be manually spun up at the click of a button.',
    },
    {
      question: 'How do I use FeaturePeek with a monorepo?',
      answer:
        "Place your peek.yml file at the root of your monorepo, and build your frontend in CI as you normally would. If the frontend changes you're introducing require a backend component in the same PR, merging the backend change first so that you can preview your frontend changes on FeaturePeek.",
    },
    {
      question: 'Do people on my FeaturePeek team need to be in my GitHub org?',
      answer:
        "Nope! You can invite anyone you'd like to your FeaturePeek team, whether or not they are in your GitHub org. Your FeaturePeek team can be a subset of your organization as well — you control the granularity of who you'd like to invite.",
    },
  ],
]
