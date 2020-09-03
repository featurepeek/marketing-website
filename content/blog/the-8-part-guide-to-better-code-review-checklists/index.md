---
title: The 8 part guide to better code review checklists
date: "2020-09-02T12:12:03.284Z"
description: Few productivity tools are as ubiquitous and effective as the humble checklist.
hero: hero.jpg
heroAttributionURL: https://www.pexels.com/photo/postit-scrabble-to-do-todo-3299/
author: bradjohnson
---

Of all the productivity tools available to UI/UX developers today, few are as ubiquitous and effective as the humble checklist.

In ["The Checklist Manifesto"](https://www.amazon.com/Checklist-Manifesto-How-Things-Right/dp/0312430000), Atul Gawande explains that simple checklists can transform the way we work. In his book, Gawande was trying to find a way that doctors, surgeons, and nurses could deliver better, more consistent outcomes when working in an operating room - a literal life-or-death situation.

*"We have accumulated stupendous know-how,"* Gawande writes in his book. *"We have put it in the hands of some of the most highly trained, highly skilled, and hardworking people in our society. And, with it, they have indeed accomplished extraordinary things. Nonetheless, that know-how is often unmanageable."*

Although software development isn't exactly a life-or-death endeavor, we can apply the same lessons by using the power of checklists to prioritize effectively when collaborating.

## What is a code review?

When a software developer on a team wants to contribute code they've worked on back into the main project, they need to do a 'pull request' or 'merge request'. It's the main way developers contribute to software projects, but [sometimes getting pull requests approved can be agonizingly slow](https://featurepeek.com/blog/why-are-so-many-orgs-slow-to-approve-pull-requests/).

Before this code can be added to the project, other team members will do a code review. This means checking for bugs, issues and suggesting improvements.

## Why make a code review checklist?

Generally speaking, code reviews are great. They radically improve code quality, increase developer productivity and prevent bugs from ever reaching customers.

But without a good process, code reviews can be, in a word...painful.

Code review checklists help ensure productive code reviews. A code review checklist prevents simple mistakes, verifies work has been done and helps improve developer performance.

## 1. Pull Request Etiquette ✅

Start with the basics. Is the pull request you are looking at *actually* ready for review? To determine this, here are some key principles that should apply to all code reviews:

* **Frequent** — To make pull requests more manageable, submit them little and often. If a pull request covers multiple days with no good reason, it should be split into smaller chunks.
* **Bitesize** — If a pull request is too large, it's difficult to understand. It should be broken down as much as possible.
* **Well documented** — Does the pull request have enough comments to make it easy to review?
* **Follows the Single Responsibility Principle** — Code should only ever solve one problem. If a piece of code affects a lot of the rest of the code in the project, it's difficult to review.

If these conditions are not met, return the code to the contributor to be improved or separated into different pull requests.

This might seem initially harsh or counter-productive, but over several weeks your team's outputs and productivity will improve.

## 2. Styling 🎨

Set some basic styling rules for your team and ensure these are followed. Consistent code styling is essential to ensure future developers can understand code easily and work productively.

Some basic rules:
* Are variable names sensible and consistently capitalized?
* Are there sufficiently descriptive comments throughout the code as required?
* Are formatting preferences followed? For example, tabs or spaces, curly brace on the same line or new line, 80 character width or 120 character width?

To save time, you could check these rules are followed with an automatic code linter. [Prettier](https://prettier.io/) is a good example for JavaScript projects.

Again, if these standards are not met, stop checking the code and return it to the contributor for review.

## 3. Security 🔐

Set security standards for your project and check these are being followed religiously. The rules to be checked will vary depending on your project and organization, but some best practices are:

* Run your project through vulnerability scanning solutions, like [LGTM](https://lgtm.com/)
* Don't hardcode credentials for testing or include secrets in the repository
* Don't disclose too much information in error messages, which might give hints to an attacker
* Ensure any database queries are parameterized
* Don't trust user or client input blindly — your client or web application can be modified. For example, URL parameters that access resources should be checked.

If you identify security issues in a code review process, stop and speak to the contributor. It might be a sign of a more serious issue in the project or a lack of training, both of which will need follow on interventions.

## 4. Performance 🏎

Is the project as performant as it could be, or are these obvious optimizations that might improve performance?

For example:
* Can any of the code be substituted with a more performant library or a language native function?
* Is there any debug or logging code that could be removed?
* Is caching being used if applicable?
* Are images and assets appropriately compressed?

There are a myriad of tools that can help you optimize the web performance of your project. Good places to start are [Chrome Lighthouse](https://developers.google.com/web/tools/lighthouse) (also called [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)) and [DebugBear](https://www.debugbear.com/) for frontend projects.

## 5. Testing 🧪

Tests automatically check that code does what it should, making them a key part of the code review process.

1. Firstly, check that tests are present and well documented for all common functionality. If some functionality isn't covered by testing, it should be well documented why this is the case.
1. Secondly, make sure that tests are well isolated, so you can find the problem quickly if a test fails.
1. Finally, do the tests test the code? Often, they claim they do, but don't actually assess the intended functionality of the application.

[Jest](https://jestjs.io/) is a good option if you're looking into automated unit testing. For automated end-to-end tests, check out [Cypress](https://www.cypress.io/) and [Reflect](https://reflect.run/). 

However, always remember that not all tests are bullet-proof and shouldn't be relied on completely, as the next checklist item proves…

## 6. Does it actually work? 💩

It seems simple enough, but we've all made this assumption before.

If you are on an agile sprint team, the code should always be checked against the acceptance criteria provided by your Product Manager or Product Owner. If acceptance criteria are not met, ask the contributing developer why.

Another common issue is that code works locally but not in production. All code being reviewed should be deployed to a staging environment that is consistent with your production environment. This prevents environment specific issues.

[FeaturePeek](https://www.featurepeek.com) users don't have to worry about inconsistencies between staging and production environments. That's because FeaturePeek automatically deploys your branches into a dedicated environment every time a pull request is opened. This allows the reviewer to see the changes instantly and share this with designers, managers and other non-technical stakeholders for further feedback.

## 7. Positive code review culture 😻

Before you send your code review feedback or sit down for a meeting, check that your comments will help your team to improve rather than be seen as criticism.

Code reviews are one of the most regularly occurring interactions you have with the rest of your team. Take the time to ensure you've framed code review feedback in a positive way, so that you're contributing to a positive, collaborative code review culture over time.

It can help to reframe critical feedback as constructive statements. For example, if the code is missing test coverage, suggest "could more test coverage benefit us here?" to test and challenge the understanding of your team members.

## 8. Review the checklist constantly 🤔

Your checklist is only good if it's up to date. That’s why it's important to continually review your checklist and ensure it meets your needs.

Your code review needs will change over time as new team members join or your project gains new requirements. For example, if you added new tooling to your CI process, this should be included.

[FeaturePeek](https://www.featurepeek.com) gives reviewers a floating UI overlay for your deployments, making it easy for your them to leave great feedback. This way, you get feedback from reviewers sooner and keep your code review checklist up to date with the latest requirements.

## Learn More

Checklists are just one of the many tools UI/UX developers use to keep productive. Let us know how your team stays productive by sharing with us on [Twitter](https://www.twitter.com/featurepeek) and [LinkedIn](https://www.linkedin.com/company/featurepeek/).

FeaturePeek provides collaborative frontend staging environments on-demand, so you can collect implementation feedback sooner. FeaturePeek works with all frameworks and hosting providers, so you can keep your tools and you're never locked in.

[Learn more about FeaturePeek Teams](https://featurepeek.com/product/teams), our collaborative tool that supercharges deployment previews for development teams.



