export default [
  [
    {
      question: 'Do people on FeaturePeek team need to be in my GitHub org?',
      answer:
        "Nope! You can invite anyone you'd like to your FeaturePeek team, and they'll have access to your running environments. Our GitHub App can even comment on pull requests on their behalf, so they'll stay in the conversation.",
    },
    {
      question: 'Do I need to containerize with Docker on my own?',
      answer:
        "Not at all. If you're building static assets, just use our build-time dependency in CI and we'll do all the dirty DevOps work for you.",
    },
  ],
  [
    {
      question: 'My project is a monorepo. How do I integrate with FeaturePeek?',
      answer:
        "You can integrate your front-end within your monorepo the same as you'd integrate any front-end. For the backend, we recommend using environment variables to point to existing backend services.",
    },
    {
      question: 'When will {X} Continuous Integration service be supported?',
      answer: 'As of writing, we have the most support for CircleCI, and are supporting more every week.',
    },
  ],
]
