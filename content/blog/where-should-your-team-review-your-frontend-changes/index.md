---
title: Where should your team review your front-end changes?
date: "2019-11-13T22:12:03.284Z"
description: Discovering the ideal method of gathering front-end feedback from your team — and the tools for collecting it
hero: hero.jpg
author: jasonbarry
---

<!--_This article intended to be read by front-end engineers, full-stack engineers, and web developer generalists._-->

**TL;DR:** Ask for visual feedback on your new front-end features in isolated remote environments. You can quickly achieve this setup with [FeaturePeek](https://featurepeek.com), a new service that enables front-end deployment previews for static and containerized web apps regardless of cloud provider.

**You've just finished developing a new feature** for your web app, and you're ready to get feedback from the rest of your team. You're pretty sure it's what your designer intended in their prototypes, although you had to take *a few* liberties – you did some guesswork when mockups for tablet breakpoints weren't supplied, and you had to come up with a workaround or two due to a technical constraint. You want to get some feedback on your work before rolling out the feature to production. 

Engineers can leave feedback on GitHub or similar during code review, but this part of the [product development lifecycle](https://blog.ycombinator.com/product-development-cycle-fundamentals/) isn't accessible to those in non-code-savvy roles. What's the best way to open up your work to the rest of your team? 

Let's explore some options. Ideally, we'd want a solution that: 

- **Reduces the duration of feedback loops** between cross-functional teams. You should be able to send a link for someone to review as soon as *you* are ready, not as soon as your internal infrastructure allows you to be ready.

- **Circumvents performing code review on the same feature twice.** You shouldn't depend on your developer peers to finish reviewing your code before you're able to share your work with someone else on your team. If you receive feedback to make changes, your peers will have to do code review *again* for what is essentially the same feature.

- **Requires as little maintenance and code changes as possible.** You shouldn't have to spend time building infrastructure to support a basic review process. If possible, you'd like to lean on an existing tool that has already solved this problem.

# In person (or screenshare) 👎

While rolling up to your colleague's desk (or [virtual desk](https://tandem.chat) if your team is remote) can clear up quick clarifying questions, it poses problems when trying to gather detailed critique. Common pitfalls include: 

- **Scheduling common availability is difficult.** What if your reviewer is in a meeting? Or working heads-down on an upcoming deliverable? You both need to have uninterruptible availability to get their feedback synchronously. Trying to get two people's schedule to sync up is too time-intensive and breaks their flow, especially in fast-moving startups. 

- **You miss out widening your surface area of test cases.** When you show someone a feature that you've coded up on your own machine, you are forgoing the opportunity to apply variance to it.  How does it respond to production data? Does it require a font that is only installed locally? How does it behave when you're logged in under a different user account? You've tested responsiveness in Chrome DevTools &mdash; how about on a real device? 

- **You become responsible for taking notes of reviewer feedback.** You can jot reviewer feedback down while in person, or create a quick todo list, but ad-hoc review that exists outside of formal tools is undocumented and bound to slip through the cracks. 

The productivity benefits of [asynchronous communication](https://blog.remote.com/why-you-should-be-doing-async-work/) are clear. You should avoid collecting feedback synchronously whenever possible.

# Local dev server tunnel 👎

How about opening a tunnel to your local development server's running port? You could use [ngrok](https://ngrok.com) to expose a port so that someone outside of your LAN could access your local dev server. 

There are lots of problems with this approach:

- **Your machine must be powered on and online.** As soon as you close your laptop, the bridge to your dev server is terminated. 
- **You can't checkout another branch while the tunnel is live.** If you wanted to show someone something on a specific branch, you'd have to stay on that branch. This means that you are blocked from working on anything else.
- **Your reviewers aren't getting a production build.** 

# Local build during code review 👎

As a developer, you're familiar with conducting code review when your coworkers open pull requests. The code may look correct... but does it work? A good way to test if it works is to run the code yourself. However, to do that on your own machine requires you to jump through a few hoops. The following flow should look all too familiar:

1. Stop what you're doing 
2. Stash any unstaged changes
3. Fetch from origin
4. Checkout their branch
5. Install dependencies (and potentially restart your development server)
6. ➡️ **Actually verify the new feature and provide feedback**
7. Checkout your original branch
8. Pop your git stash
9. Reinstall dependencies (and potentially restart your development server)

You can see the trouble with this &mdash; there are **many steps you must accomplish before and after verifying** that make the task a tedious effort. Most of the cognitive load of verifying someone else's feature on your machine comes from stopping what you're doing. 

Furthermore, unless your entire team is fluent with git, this option is only available to developers. What about the non-developers on your team?

# Staging or QA server 👎

Your continuous integration pipeline builds the latest changes from a protected branch in your git repo, and deploys the build to an internal server. It seems like a safe place to review new features, because it's a close representation of what production will look like when it eventually goes out the door. However, there are some problems with using this traditional method: 

- **Feedback from reviewers causes more code review.** When you ask someone for feedback on your work, they will most likely respond with at least *some* critique, which will require code changes to fix.  Your developer peer must be asking themselves, "Didn't I already review this feature?". You should aim to have every new feature 

- **Other developers could break your changes.** The problem with this approach is that other developers on your team could inadvertently merge a change of theirs that breaks the functionality of your new feature. By passing around a link to an environment that gets fed from top-of-tree, you aren't guaranteeing that your feature is isolated. By the time your reviewer tests your new feature, a part of it (or the whole thing!) could not function as intended, even though it worked when it was on its own branch. Not only does this waste your reviewer's time, but it causes them to think that you incompetently didn't perform a basic test of your own work. A better option would be to guarantee that the code you push is the code your reviewer tests &mdash; this is what we mean when we say **you should test features in isolation**. A staging / QA environment is great for testing a whole release, not individual features. 

# Feature environments 👍

The best place to review your feature is on the feature branch itself. Ideally, as soon as you push your branch to your repo, your CI builds an image that is deployed to a dedicated host. **Feature environments are automatic and ephemeral**, orchestrated via webhooks from your repo.

* **Asynchronous.** No scheduling calendars, syncing up for in-person walkthroughs, or tunneling to your local dev server.
* **Instant.** No need to wait for unit tests or code review to pass before you can get feedback from designers, marketers, or other stakeholders on your team. No need to checkout branches and install dependencies just to verify your coworker's code. Shorten feedback loops with your reviewers so that you don't need to ask your developer peers to review the same feature multiple times.
* **Accurate.** You can find more issues ahead of time by running your code on a machine that isn't your local dev box. Rest assured that what you see is what you will deploy, because your build comes from your CI server.
* **Isolated.** Since the feature environment spins up from *your* branch, no one else will accidentally break your feature. Reviewers won't be upset that your feature clearly doesn't work. 

Imagine every pull request in your repo having its own live, up-to-date environment. Links to the environment are posted as a comment in your pull request, and to a Slack channel. As soon as your feature gets merged, the environment gets torn down.

# Feature environments as a service 👍👍

Developing the infrastructure in-house to support feature environments yourself takes developer time and ongoing maintenance. You should instead focus on building the product(s) that are core to your business. 

[FeaturePeek](https://featurepeek.com) is a feature-environments-as-a-service platform that integrates with your GitHub organization. In just a few clicks, you can start building on-demand feature environments for every front-end pull request. On top of that, **FeaturePeek overlays feedback and collaboration tools over every feature environment**, so your reviewers can leave comments, file bugs, attach screen recordings, and more &mdash; all from the context of the environment itself.

We launched to solve this problem that we've seen so many small- to medium-sized companies encounter. [Start a free trial today](https://dashboard.featurepeek.com) and let us know what you think. 