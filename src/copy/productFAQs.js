export default [
  [
    {
      question: 'How does FeaturePeek work with front-ends that require backend services to display correctly?',
      answer:
        'You can set environment variables to be the base URL of existing backend services that you host. Each FeaturePeek project has a namespaced domain that you can whitelist in order to allow CORS or OAuth callbacks.',
    },
    {
      question: 'Do people on FeaturePeek team need to be in my GitHub org?',
      answer:
        "Nope! You can invite anyone you'd like to your FeaturePeek team, and they'll have access to your running deployments. Our GitHub App can even comment on pull requests on their behalf, so they'll stay in the conversation.",
    },
  ],
  [
    {
      question: "My app's front-end is very complex... how will I know that it will work on FeaturePeek?",
      answer:
        "We've seen apps big and small running on FeaturePeek. Contact us if you have any specific technical questions; we have experience with many different front-end architectures.",
    },
    {
      question: 'Which Continuous Integration services and container registries are supported?',
      answer:
        'As of writing, we support AWS CodeBuild, Azure Pipelines, Buildkite, CircleCI, Cirrus CI, CodeShip, Docker Cloud, Drone, GitHub Actions, Heroku CI, Jenkins, Netlify, Semaphore, TeamCity, Travis, and Wercker; for container registries, we support Amazon ECR, DockerHub, GitHub Packages, and Google Container Registry.',
    },
  ],
]
