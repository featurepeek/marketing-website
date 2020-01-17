---
title: Why are so many organizations slow to approve pull requests?
date: "2020-01-17T12:12:03.284Z"
description: And what impact does it have on innovation?
hero: hero.jpg
author: jasonbarry
---

Effective collaboration between developers during product development is critical to success, which is why we use version control systems like Git. 

These systems, helpfully, allow developers to make contributions to the same project without overwriting each other's work, by working on copies of the same project. These copies are known as _branches_.

When each of these branches have been approved by key stakeholders, developers can simply reconcile their work into one project. This is called a **pull request**.

But, pull requests can be notoriously cumbersome and slow to approve, causing a ripple effect of problems as a result. 

**But, what exactly _is_ a pull request, and why are they so tricky for developers to push through? Most importantly, what can be done to minimize the problem?**

In this article, we’ll explain all.


## What exactly is a pull request (the TL;DR version)?

Put simply: a pull request is how developers submit their contributions. 

At its most basic, a pull request contains the changes made to the code of the project. The best pull requests will contain a description of **what** has changed, **why** those changes have been made, and facilitate **discussion** between developers, product managers, designers and UXers. 

The pull request can then be code reviewed, checked for bugs and feedback given. Finally, the code is given the green light, and the changes go live.

**At least, this is how it _should_ work in an ideal world.**

In the real world, though, software is messy and pull requests can get complicated. 

They can even conflict with each other, preventing the code from being merged into the main project. This results in a delay in the pull request from being approved, which ultimately leads to a huge blocker for the project overall. 

Worse still, there’s a direct correlation between the duration of a pull request and business spend. Making it a costly issue to have. 

But why does this happen? And is there anything that developers can do to limit this risk? 


## Why can pull requests take a long time to approve?

The three most common reasons for slow pull requests are: 



### 1. They are difficult to deploy

It is often very time-consuming for a reviewer to download the branch, make sure it works locally and check that everything works as expected.

This is particularly true for non-technical stakeholders (such as a UXer or a product manager) who might not even know how to run the application locally.

This is where review tools come into their own. With automated deployment for every pull request, reviewers can see the code working instantly on a web page and give feedback quickly. Even better, it'll automatically remind the reviewer on Slack that they need to approve the pull request, to avoid unnecessary delays.


### 2. There are merge conflicts

Merge conflicts occur when two branches have made changes to the same line in a file, or one branch has deleted a file. There’s no two ways about it: merge conflicts are bad news when it comes to approving a pull request. 

The good news, though, is that they can be avoided by following these 3 simple rules:

*   **Keep the changes in your branch as small as possible** — With fewer code changes, it is less likely conflicts will occur
*   **Rebase from master when it changes** –— This updates your branch with the latest version of the master, so you can resolve any conflicts locally.
*   **Review pull requests faster and more frequently** — The longer a pull request stays open, the more likely the code will be behind merged changes. \

### 3. You have bad pull request etiquette

If your team is submitting complicated pull requests that are difficult to understand, you’ll lose productivity quickly. The good news is, there are some relatively simple rules that all developers can follow to make sure that their pull request etiquette is optimized for success.

In a nutshell, the best pull requests are:

*  **Submitted frequently** — Submitting pull requests frequently means that likely only a small amount of code has changed, making it simpler to explain and less likely to have unintended impacts on other areas. 
*  **As small as possible** — Breaking down a big change into many smaller requests makes the code _much_ easier to review. There is no rule for the number of lines of code, as every project is different, but agree on a reasonable limit with your team.
*  **Well documented** — Pull requests should contain summary notes for the reviewer on what has changed. This makes it much easier to review.
*  **In line with the Single Responsibility Principle** — Code changes should aim to only solve _one_ problem. If a piece of code affects a lot of the rest of the code in the project it becomes very difficult to test, slowing down the review process.


## How can you speed up pull requests?

If your pull requests take a long time to review and it’s slowing development and innovation, try these 6 quick tips to unlock increased developer productivity:



### 1. Automate deployment

When a pull request is made, use an automated deployment tool to make an instant preview of the change available.  This also enables non-technical stakeholders to see changes instantly, helping to keep your team on track.


### 2. Write great commit messages

Commit messages tell the story of how the code was written and what issues were overcome. By making these detailed, it’s easier to understand the whole pull request and therefore review it much more quickly. 

A great commit message has a subject that briefly explains what you did and a body that explains **what** you’ve done, **how** you’ve done it and **why** you did it in that way.



### 3. Set and enforce good pull request etiquette

In the next planning meeting or sprint retrospective, write down a few simple rules and agree to hold each other to account (Remember: a good pull request is small, well-documented and follows the single responsibility principle.) 

If pull requests continue to be slow, ask your pull request approvers to always reject pull requests which don’t meet these rules. You’ll lose productivity in the short term but set good behaviors for the future.


### 4. Detox your code reviews

Code reviews are an essential part of the pull request approval process, but can be toxic and painfully slow. You can detox code review by:

*   **Peer Review** — Many organizations only allow senior developers or managers to review code, creating a gatekeeper. Make code reviews feel more collaborative by encouraging peers to review each others code instead.
*   **Being Constructive** — It goes without saying: don’t only say negative things in a review, even if the code must be rejected. Find the good parts of their code to celebrate, and frame criticism constructively as an opportunity for growth..
*   **Automation** — Set code standards and enforce them automatically with code quality analysis tools. This provides instant code review against defined standards, improving code quality without an awkward code review meeting.

### 5. Add more reviewers

If you’ve made all the changes above and pull requests are still slow, it might be an issue with your reviewers. Ask your existing reviewers how you can help them review more quickly — it might be a simple matter of not having enough time or the right front-end review [tools in your workflow](https://featurepeek.com/).

### 6. Avoid merge conflicts

Resolving merge conflicts drains time, enthusiasm and productivity from developer teams. Most are unnecessarily caused by bad pull-request etiquette, so following the other tips in this article should reduce them.  


## Are you ready to fix your innovation bottleneck and streamline your pull requests? 

Once you’ve encouraged your team to follow good pull request etiquette, document clearly and fix toxic review habits, the next step is to automate as much of the pull request process as possible.

Try adding FeaturePeek into your review workflow. For every pull request, we automatically spin up a dedicated environment with commenting, screenshotting, and bug filing tools overlaid on top, making getting feedback from stakeholders effortless. 

[Find out more.](https://featurepeek.com/)
