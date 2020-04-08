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

With over 2 billion users and \$17.4 billion in advertising revenue, Facebook is in a very different place than back in 2004. In fact, in 2014, Zuckerberg modified his motto, changing it to “move fast with stable infrastructure.”

_“We used to have this famous mantra . . . What we realized over time is that it wasn't helping us to move faster because we had to slow down to fix these bugs and it wasn't improving our speed.”_

![Move fast with stable infra](move-fast-with-stable-infra.jpg)

Now you might not be the same size as Facebook, but you still shouldn’t need to choose between innovation and reliability. By using effective staging environments, you can avoid costly downtime and launch mishaps without hindering innovation.

But before we launch into the advantages of on-demand environments, let's start with the basics.

# What is a staging environment?

A staging environment is a replica of your production environment. There shouldn't be any significant differences between your staging environment and your live website, with one notable exception: the staging environment is private.

**Think of staging as the ultimate quality assurance check**, where you can make sure everything works in as close to launch conditions as possible. You'll catch bugs, avoid costly downtime, and give your developers the confidence to take risks.

# What does a typical staging process look like? 

The traditional deployment process for static staging environments usually has four steps:

1. The developer will build and test in a local environment, running on their machine.
1. Continuous integration tests are run on deployment to catch any issues.
1. The code is deployed to a pre-configured static staging environment and quality assurance is completed.
1. The code goes live.

# What are the limitations of this process?

When staging environments are perfect replicas of production, they are incredibly useful for development teams. But in reality, most staging environments end up less than perfect, causing a number of unwanted knock-on effects...

## Environment drift

Staging environments are often configured once and left to decay, becoming a DevOps chore. This leads to drift between the staging and production environments, as similarities between the two decrease. This increases the risk of bugs appearing in _either_ staging _or_ production… but not both.

Examples of these drifts include:

- environment and configuration files getting modified by unsuccessful staging deploys, leading to extraneous or incorrectly named settings
- time-sensitive security vulnerability updates being applied to production in a rush, leaving staging several versions behind.

## Unloved environments

Whereas your production environment is under constant care and attention from the DevOps team, an infrequently used staging environment is lower on the priority list.

This can lead to an unreliable staging environment, which blocks your development team from launching new features.

## Wasted time and money

Static staging environments are typically available 24/7 on a dedicated server or virtual machine. This is a waste of resources that could otherwise be used for production.

Further, if you have several development teams, the static staging environment can become a bottleneck. Teams must wait for a staging environment to become available, waiting for other teams' quality assurance processes to complete.

This could waste days of developer productivity and encourage teams to skip straight to production, losing all the benefits of an effective staging environment.

# On-demand vs. static staging environments

Thankfully, there is a solution to the limitations above, while preserving all the benefits.

Instead of the static staging environment decaying while it waits for someone to use it, **an on-demand staging environment is automatically created dynamically, triggered by a CI/CD pipeline.**

This means developer teams can have access to staging whenever they need it, simply by submitting a pull request. As you’d imagine, this boosts productivity and encourages developers to use staging environments, reducing the chances of costly production bugs.

Once a developer is done with the staging environment, the staging environment is destroyed, along with any configuration, environment, or installation inconsistency.

| <br />                    | **Static Staging** | **On-Demand Staging**                           |
| ------------------------- | ------------------ | ----------------------------------------------- |
| Configuration Consistency | No                 | Yes ✅                                          |
| Environment Consistency   | No                 | Yes ✅                                          |
| Installation Consistency  | No                 | Yes ✅                                          |
| Developer Self-Serve      | No                 | Yes ✅                                          |
| Maintenance Required?     | Constant           | Minimal Configuration                           |
| Number of environments    | 1                  | Unlimited                                       |
| Cost                      | Pre-allocated      | Allocated on demand and reclaimed automatically |

# Benefits of on-demand staging environments

## Increased developer productivity

With on-demand staging, developers can create as many staging environments as they require. No more waiting for staging to be available or for DevOps to configure a new environment.

## Testing

On-demand staging environments can be configured to be accessible behind a shared URL, which unlocks a wide range of testing and quality assurance opportunities.

- Cross Browser Testing: Ensure your product or website works perfectly on a wide range of browsers and devices.
- Accessibility Testing: Run accessibility tests to ensure your content is accessible to individuals with disabilities.
- User Testing: Create a pool of test users or use a crowd-testing platform like [User Testing](https://www.usertesting.com/) to discover usability issues before you launch.

## Stakeholder engagement

In the past, stakeholders didn’t get to use the finished product until it was live. Instead, they got a brief scripted demo at the end of the sprint.

By giving stakeholders access to your staging environment, they can help with the quality assurance process and ensure that the development work completed meets their expectations.

At [FeaturePeek](https://featurepeek.com/), we also include lots of bonus features that you wouldn’t get with a static staging environment. On every page, you’ll see a widget on the bottom left. This is added automatically, with no dependencies or browser extensions required. Just add to your GitHub and get started with on-demand staging environments.

![https://storage.googleapis.com/slite-api-files-production/files/ff6e1c11-faac-4d19-aab7-9c389be6f276/null](https://storage.googleapis.com/slite-api-files-production/files/ff6e1c11-faac-4d19-aab7-9c389be6f276/null)

## Commenting and issue reporting

Click the widget and you’ll see information about the staging environment, including who created the pull request and what has changed. You can also comment and create new issues, which are automatically mirrored to GitHub, keeping all your stakeholder feedback in one place.

Each comment or issue reported on FeaturePeek includes browser metadata, so you can see the path, browser, viewport, and language the reviewer was using without needing to ask.

## Screenshots and screen recordings

Another helpful feature is built-in screenshots and screen-recordings. From the browser, reviewers can help document issues without installing clumsy additional tools.

## Design tools

It’s hard to feed back on visual elements in a targeted, precise way. Elements of the design might be too big, too small or in the wrong position, but how does a designer communicate changes needed in a way that’s clear and actionable?

By holding down the Option key (Alt key on Windows), designers get instant access to a measurement tool, allowing them to give accurate and precise feedback.

## Error capture

While your stakeholders are trying your new feature, they might discover a bug. FeaturePeek automatically captures any runtime errors, helping you fix difficult issues quicker.

# Want on-demand staging for your front-end? Try FeaturePeek

FeaturePeek creates on-demand staging environments every time you open a pull request on your frontend repo.

It works with static repositories and Docker containerized sites, and doesn’t depend on your hosting provider as the on-demand staging runs separately.

Try our [2-week free trial](https://dashboard.featurepeek.com/) for all new teams and see how FeaturePeek can improve your development productivity!
