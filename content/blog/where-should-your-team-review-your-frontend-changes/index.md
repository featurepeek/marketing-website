---
title: Where should your team review your front-end changes?
date: "2019-10-07T22:12:03.284Z"
description: Discovering the ideal method of gathering front-end feedback from your team — and the tools for collecting it
hero: hero.jpg
author: jasonbarry
---

<!--_This article intended to be read by front-end engineers, full-stack engineers, and web developer generalists._-->

**You've just finished developing a new feature** for your web app, and you're ready to get feedback from the rest of your team. You're pretty sure it's what your designer intended in their prototypes, although you had to take *a few* liberties – you did some guesswork when mockups for tablet breakpoints weren't supplied, and you had to come up with a workaround or two due to a technical constraint. You want to get some feedback on your work before rolling out the feature to production. 

Engineers can leave feedback on GitHub or similar during code review, but this part of the [product development lifecycle](https://blog.ycombinator.com/product-development-cycle-fundamentals/) isn't accessible to those in non-code-savvy roles. What's the best way to open up your work to the rest of your team? 

Ideally, we'd want a solution that: 

- **Reduces the duration of feedback loops** between cross-functional teams. You should be able to send a link for someone to review as soon as *you* are ready, not as soon as your internal DevOps allows you to be ready.

- **Circumvents performing code review on the same feature twice.** You shouldn't depend on your developer peers to finish reviewing your code before you're able to share your work with someone else on your team. If you receive feedback to make changes, your peers will have to do code review *again* for what is essentially the same feature.

- **Requires as few code changes as possible.** You shouldn't have to spend time building infrastructure to support

<!--In this article, we'll explore solutions to two questions:-->

<!--**What is the ideal method of gathering front-end feedback from your team?** Do you get feedback from stakeholders in-person as you develop? Or is it preferred to have them test on their own machines? Do you lean on CI to pass and then manually verify when the build lands on the server? 

**What tools do you use to collect feedback?** Do you create an ad-hoc todo list of feedback items? Do you track progress in the original ticket, or do you create a follow-up ticket that contains received feedback? 
-->



# In person (or screenshare)

While rolling up to your colleague's desk (or [virtual desk](https://tandem.chat) if your team is remote) can clear up quick clarifying questions, it poses problems when trying to gather detailed critique. 

- **Scheduling common availability is difficult.** What if your reviewer is in a meeting? Or working heads-down on an upcoming deliverable? You both need to have uninterruptible availability to get their feedback synchronously. Trying to get two people's schedule to sync up is time-intensive, especially in fast-moving startups. 

<!--Moreover, you risk interrupting your reviewer's [flow](https://en.wikipedia.org/wiki/Flow_(psychology)). Think of the context switching that needs to happen when juggling their tasks plus a surprise visit from you. -->

- **You miss out widening your surface area of test cases.** When you show someone a feature that you've coded up on your own machine, you are forgoing the opportunity to apply variance to it.  How does it respond to production data? Does it require a font that is only installed locally? How does it behave when you're logged in under a different user account? You've tested responsiveness in Chrome DevTools &mdash; how about on a real device? 

- **You become responsible for taking notes of reviewer feedback.** You can jot reviewer feedback down while in person, or create a quick todo list, but ad-hoc review that exists outside of formal tools is undocumented and bound to slip through the cracks. 

The productivity benefits of [asynchronous communication](https://blog.remote.com/why-you-should-be-doing-async-work/) are clear. Let's explore some options in gathering feedback asynchronously. 

# Locally during code review

As a developer, you're familiar with conducting code review when your coworkers open pull requests. The code may look correct... but does it work? A good way to test if it works is to run the code yourself. However, to do that on your own machine requires you to: 

1. Stop what you're doing 
2. Stash any unstaged changes
3. Fetch from origin
4. Checkout their branch
5. Install dependencies (and potentially restart your development server)
6. ➡️ **Actually verify the new feature**
7. Checkout your original branch
8. Pop your git stash
9. Reinstall dependencies (and potentially restart your development server)

You can see the trouble with this &mdash; there are **many steps you must accomplish before and after verifying** that make the task a tedious effort. Most of the cognitive load of verifying someone else's feature on your machine comes from stopping what you're doing. 

Furthermore, unless your entire team is fluent with git, this option is only available to developers. What about non-developers on your team?

# Tunnel into your local development server

How about opening a tunnel to your local development server's running port? You could use [ngrok](https://ngrok.com) to expose a port so that someone outside of your LAN could access your local dev server. 

This is less than ideal though. Your machine must be powered on and online, and you must keep your feature branch checked out, meaning you can't work on any other branch while the tunnel is live.

# Staging / QA server

This is the traditional method. More content TBD

- **Feedback from reviewers causes more code review.** Your developer peer must be asking themselves, "Didn't I already review this feature?". More content TBD

- **Integration warzone.** Bleeding-edge nature could cause feature to become broken. More content TBD

# Feature environments

The best place for the review of your feature to happen is on the feature branch itself. Ideally, as soon as you push your branch to your repo, your CI builds an image that is deployed on a server with a unique URL.

<!--Developing this solution in-house-->

* **Instant.** No need to wait for tests or code review to pass before you can get feedback from designers. Shorten feedback loops with your designers so that you don't need to ask your developer peers to review the same feature multiple times.
* **Asynchronous.** No need for in-person walkthroughs, no tunneling to your local dev server.
* **Isolated.** Since the environment is spun up from your branch, no one else will accidentally break your feature. Reviewers won't be upset that your feature clearly doesn't work. 
* **Configurable.** Easy to spin up new feature environments with whatever environment variables you'd like. 

Imagine every pull request in your repo having its own live, up-to-date environment. Links to the environment are posted as a comment in your pull request, and to a Slack channel. As soon as your feature gets merged, the environment gets torn down.

# Feature environments as a service

[FeaturePeek](https://featurepeek.com) is a feature-environments-as-a-service platform that plugs into your GitHub organization. In just a few clicks, you can start building on-demand feature environments for every front-end pull request.

We launched to solve this problem that we've seen so many small- to medium-sized startups encounter. [Start a free trial today](https://dashboard.featurepeek.com) and let us know how you like it.