---
title: The benefits of having on-demand, ephemeral staging environments
date: "2020-03-06T12:12:03.284Z"
description: Abstract away your front-end staging server
hero: hero.jpg
author: jasonbarry
---

Facebook founder Mark Zuckerberg achieved much of his wealth and success in the 2000s by encouraging his development team to “_move fast and break things._”

![Move fast and break things](move-fast-and-break-things.jpg)

Software companies raced to get features and new functionality to their customers as quickly as possible. Only the fastest could survive — the cautious were made obsolete overnight.

But in 2020, customers have increased expectations. As software has taken over our lives, we now demand reliability _as well_ as constant innovation.

With over 2 billion users and $17.4 billion in advertising revenue, Facebook is in a very different place than back in 2004. In fact, in 2014, Zuckerberg modified his motto, changing it to “move fast with stable infrastructure.”

_“We used to have this famous mantra . . . What we realized over time is that it wasn't helping us to move faster because we had to slow down to fix these bugs and it wasn't improving our speed.”_

![Move fast with stable infra](move-fast-with-stable-infra.jpg)

Now you might not be the same size as Facebook, but you still shouldn’t need to choose between innovation and reliability. By using effective staging environments, you can avoid costly downtime and launch mishaps without hindering innovation.

> **What is a staging environment?**
>
> A staging environment is a replica of your production environment. There shouldn't be any significant differences between your staging environment and your live website, with one notable exception: the staging environment is private.
>
> Think of staging as the ultimate quality assurance check, where you can make sure everything works in as close to launch conditions as possible. You'll catch bugs, avoid costly downtime, and give your developers the confidence to take risks.

# Downsides of having a single staging server

When staging environments are perfect replicas of production, they are incredibly useful for development teams. But in reality, most staging environments end up less than perfect, causing a number of unwanted side effects...

## Code review blocks gathering non-technical feedback

Since your code won't be deployed until code review passes, you won't have a link to share with other people on your team. If you want to double-check with a UI/UX designer that the animation you made is up to snuff, too bad — you're gated upon code review passing before you can Slack over a link.

But UI/UX designers don't care about the quality of the code — so **why should code review be a bottleneck for gathering UX feedback? **Ideally, you'd be able to get their opinion _before_ asking your dev peers to give your code a once-over. That way, you'll eliminate an extra speed bump when shipping your feature.

## Integration warzone

Sure, your new feature that you've worked hard on works _now_ — but since a single staging environment is the landing pad for your entire engineering team's upcoming changes, a developer on your team may inadvertently push code that breaks what you wrote. Even now that you have an internal link you can share with a non-technical stakeholder, **there are no guarantees that the link will continue to work**, since it is actively being integrated with!

While a single staging environment is useful for testing a release as a whole, **features should be tested in isolation**. This means that an environment's purpose should be dedicated for testing the functionality of a single feature, rather than a collection of many features. That will help guarantee the longevity

## Environment drift

Staging environments are often configured once and left to decay, becoming a DevOps chore. This leads to drift between the staging and production environments, as similarities between the two decrease. **This increases the risk of bugs appearing in **_**either**_** staging **_**or**_** production**, which makes bugs difficult to reproduce.

Examples of these drifts include:

- Environment and configuration files getting modified by unsuccessful staging deploys, leading to extraneous or incorrectly named settings.
- Time-sensitive security vulnerability updates being applied to production in a rush, leaving staging several versions behind.

## Unloved environments

Whereas your production environment is under constant care and attention from the DevOps team, an infrequently used staging environment is lower on the priority list.

This can lead to an **unreliable staging environment**, which blocks your development team from launching new features.

## Wasted time and money

Single staging environments are typically available 24/7 on a dedicated server or virtual machine. This is a waste of resources that could otherwise be used for production.

Furthermore, if you have several development teams, the **single staging environment can become a bottleneck**. Teams must wait for a staging environment to become available, waiting for other teams' quality assurance processes to complete.

This could waste days of developer productivity and encourage teams to skip straight to production, losing all the benefits of an effective staging environment.

# Upsides of on-demand staging environments

## Increased developer productivity

With on-demand staging environments, developers can create as many staging environments as they require. No more waiting for staging to be available or for DevOps to configure a new environment.

## Lower the barrier for running peers' code

Developers face a large amount of context switching when they are asked to review someone else's code. The process is unnecessarily interruptive, and looks something like this:

1. Stop what you’re doing
1. Stash any unstaged changes
1. Fetch from origin
1. Checkout their branch
1. Install dependencies (and potentially restart your development server)
1. ➡️ **Actually verify the new feature and provide feedback**
1. Checkout your original branch
1. Pop your git stash
1. Reinstall dependencies (and potentially restart your development server)

With on-demand staging environments, on the other hand, **the running branch is waiting for you to verify and provide feedback**. Developers can jump into the deployment preview straight from the pull request without needing to checkout files, install dependencies, restart their development server, or change anything about their local environment.

## Avoid redundant code reviews

The point of getting feedback is to make more implementation changes that address the issues raised in the feedback session. The problem is that this will require another code review! Even though that the proposed changes the second time around are (hopefully) small, your reviewers will experience déjà vu because they are now going over the same lines of code for the same feature implementation.

## Stakeholder engagement

In the past, stakeholders didn’t get to use the finished product until it was live. Instead, they got a brief scripted demo at the end of the sprint.

By giving stakeholders access to your staging environment, they can help with the quality assurance process and ensure that the development work completed meets their expectations.

## Testing

On-demand staging environments can be configured to be accessible behind a shared URL, which unlocks a wide range of testing and quality assurance opportunities.

- **Cross-browser testing**: Ensure your product or website works perfectly on a wide range of browsers and devices.
- **Accessibility testing**: Run accessibility tests to ensure your content is accessible to individuals with disabilities.
- **User testing**: Create a pool of test users or use a crowd-testing platform like [<u>User Testing</u>](https://www.usertesting.com/) to discover usability issues before you launch.

# Single vs. on-demand staging environments

Thankfully, there is a solution to the limitations above, while preserving all the benefits.

Instead of the single staging environment decaying while it waits for someone to use it, **an on-demand staging environment is created dynamically, triggered by a CI/CD pipeline. **

This means developer teams can have access to staging whenever they need it, simply by opening a pull request. As you’d imagine, this boosts productivity and encourages developers to use staging environments, reducing the chances of costly production bugs. Once a developer is done with the staging environment, the staging environment is destroyed, along with any configuration, environment, or installation inconsistency.

|                                                | **Single staging environment** | **On-demand staging environments**              |
| ---------------------------------------------------- | ------------------------------ | ----------------------------------------------- |
| Developer self-serve                                 | ❌                             | ✅                                              |
| Low maintenance                                      | ❌                             | ✅                                              |
| Prevents redundant code reviews                      | ❌                             | ✅                                              |
| Can test features in isolation                       | ❌                             | ✅                                              |
| Can link to a build while pull request is still open | ❌                             | ✅                                              |
| Number of environments                               | 1                              | Unlimited                                       |
| Cost                                                 | Pre-allocated                  | Allocated on demand and reclaimed automatically |

# Get on-demand staging environments without bothering DevOps

The easiest way to set up on-demand frontend staging environments is with [FeaturePeek.](https://featurepeek.com) FeaturePeek creates a deployment preview of your frontend every time you open a pull request. A drawer overlay is added on top that **makes it easy for your reviewers to leave feedback** by allowing them to leave comments, take screenshots with annotations, capture screen recordings, create tickets on popular bug-tracking platforms, and more.

FeaturePeek works with static sites and sites containerized with Docker. Best of all, you don't have to migrate to a new cloud ecosystem. Whether your company's website is hosted on AWS, Google Cloud, Heroku, Digital Ocean, whatever — since FeaturePeek is infrastructure-agnostic, **you can use FeaturePeek no matter who your hosting provider is**.

Try the [2-week free trial](https://dashboard.featurepeek.com) to see how FeaturePeek can improve your team's development productivity.