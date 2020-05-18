---
title: Why are so many organizations slow to approve pull requests?
date: "2020-01-23T12:12:03.284Z"
description: What you can do to help your team speed up product development
hero: hero.jpg
author: jasonbarry
---

Pull requests can be notoriously cumbersome and slow to approve, causing a ripple effect of problems as a result. 

**What exactly _is_ a pull request, and why can they be so tricky for developers to push through? Most importantly, what can be done to minimize the problem?**

## What exactly is a pull request?

Put simply, a pull request is how developers submit their contributions. 

At its most basic form, a pull request contains the changes made to the code of the project. The best pull requests will contain a description of **what** has changed, **why** those changes have been made, and facilitate **discussion** between developers, product managers, and designers. 

The pull request can then be code reviewed, checked for bugs and feedback given. Finally, the code is given the green light, and the changes get merged to the master codebase.

**At least, this is how it _should_ work in an ideal world.**

In the real world, though, software is messy and pull requests can get complicated. 

They can even conflict with each other, preventing the code from being merged into the main project. This results in a delay in the pull request from being approved, which ultimately leads to a huge blocker for the project overall. 

Worse still, there’s a direct correlation between the duration of a pull request and business spend. Making it quite a costly issue to have. 

But why does this happen? And is there anything that developers can do to limit this risk? 


## Why can pull requests take a long time to approve?

The three most common reasons for slow pull requests are: 

### 1. They are difficult to deploy

It is often very time-consuming for a reviewer to download the branch, make sure it works locally, and check that everything works as expected.

This is particularly true for non-technical stakeholders (such as a UXer or a product manager) who might not even know how to run the application locally.

This is where review tools like [FeaturePeek](https://featurepeek.com) shine. With automated deployment for every pull request, reviewers can see the code working instantly on a web page and give feedback quickly. Even better, it'll automatically remind the reviewer on Slack that they need to approve the pull request, to avoid unnecessary delays.


### 2. There are merge conflicts

Merge conflicts occur when two branches have made changes to the same line in a file, or one branch has deleted a file. There’s no two ways about it: merge conflicts are bad news when it comes to approving a pull request. 

The good news, though, is that they can be avoided by following these 3 simple rules:

*   **Keep the changes in your branch as small as possible** — With fewer code changes, it is less likely conflicts will occur. Many small changes are better than few large changes.
*   **Rebase from master when it changes** – This updates your branch with the latest version of the master, so you can resolve any conflicts locally. This essentially rewrites the order of the commit history, so if you've already pushed your branch, you'll have to force-push for the change to land upstream.
*   **Review pull requests faster and more frequently** — The longer a pull request stays open, the more likely the code will be behind merged changes.

### 3. You have bad pull request etiquette

If your team is submitting complicated pull requests that are difficult to understand, you’ll lose productivity quickly. The good news is, there are some relatively simple rules that all developers can follow to make sure that their pull request etiquette is optimized for success.

In a nutshell, the best pull requests are:

*  **Submitted frequently** — Submitting pull requests frequently means that likely only a small amount of code has changed, making it simpler to explain and less likely to have unintended impacts on other areas. 
*  **As small as possible** — Breaking down a big change into many smaller requests makes the code _much_ easier to review. There is no rule for the number of lines of code, as every project is different, but agree on a reasonable limit with your team.
*  **Well documented** — Pull requests should contain summary notes for the reviewer on what has changed. This makes it much easier to review. 
*  **In line with the Single Responsibility Principle** — Code changes should aim to only solve _one_ problem. If a piece of code affects a lot of the rest of the code in the project it becomes very difficult to test, slowing down the review process.

It helps a lot to have a [preview link](https://featurepeek.com) in every pull request, so that reviewers don't have to run your code locally.

## How can you speed up pull requests?

If your pull requests take a long time to review and it’s slowing development and innovation, try these 6 quick tips to unlock increased developer productivity:

### 1. Automate deployment

When a pull request is made, use an [automated deployment tool](https://featurepeek.com) to make an instant preview of the change available.  This also enables non-technical stakeholders to see changes instantly, helping to keep your team on track.

### 2. Write great commit messages

Commit messages tell the story of how the code was written and what issues were overcome. By making these detailed, it’s easier to understand the whole pull request and therefore review it much more quickly. 

A great commit message has a subject that briefly explains what you did and a body that explains **what** you’ve done, **how** you’ve done it and **why** you did it in that way.

If you haven't already, decide with your team if you'd like to follow a [commit message convention](https://www.conventionalcommits.org/en/v1.0.0/). This will help automatically decide release version numbers by following [semantic versioning](https://semver.org).

### 3. Set and enforce good pull request etiquette

In the next planning meeting or sprint retrospective, write down a few simple rules and agree to hold each other to account (Remember: a good pull request is small, well-documented and follows the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).) 

If pull requests continue to be slow, ask your pull request approvers to always reject pull requests which don’t meet these rules. You’ll lose productivity in the short term, but set good behaviors for the future.

### 4. Detox your code reviews

Code reviews are an essential part of the pull request approval process, but can be toxic and painfully slow. You can detox code review by:

*   **Peer review** — Many organizations only allow senior developers or managers to review code, creating a gatekeeper. Make code reviews feel more collaborative by encouraging peers to review each others code instead.
*   **Being constructive** — It goes without saying: don’t only say negative things in a review, even if the code must be rejected. Find the good parts of their code to celebrate, and frame criticism constructively as an opportunity for growth.
*   **Automation** — Set code standards and enforce them automatically with code quality analysis tools. This provides instant code review against defined standards, improving code quality without an awkward code review meeting.

### 5. Add more reviewers

If you’ve made all the changes above and pull requests are still slow, it might be an issue with your reviewers. Ask your existing reviewers how you can help them review more quickly — it might be a simple matter of not having enough time or the right frontend review [tools in your workflow](https://featurepeek.com/). 

Code-review-as-a-service tool [PullRequest](https://www.pullrequest.com) recommends having at least two reviewers per PR: one who has knowledge of the particular code being changed, and one who doesn't (a neutral third-party). It's even recommended to have someone review a language they're unfamiliar with over not having anyone review at all.

### 6. Avoid merge conflicts

Resolving merge conflicts drains time, enthusiasm and productivity from developer teams. Most are unnecessarily caused by bad pull-request etiquette, so following the other tips in this article should reduce them.  


## Are you ready to fix your pull request bottlenecks? 

Once you’ve encouraged your team to follow good pull request etiquette, document clearly and fix toxic review habits, the next step is to automate as much of the pull request process as possible. Try adding [FeaturePeek](https://featurepeek.com/) into your review workflow to reduce the friction of approving pull requests. 
