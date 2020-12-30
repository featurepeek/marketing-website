---
title: How FeaturePeek manages security
date: "2020-12-29T12:12:03.284Z"
description: How we engineered the security behind the FeaturePeek deployment preview platform
hero: hero.jpg
heroAttributionURL: https://www.pexels.com/photo/equipment-pavement-security-security-camera-430208/
author: bradjohnson
---

The development of web applications requires the [cooperation of many roles;](https://whatis.techtarget.com/definition/security-by-design) from design, to engineering, product management and operations. But security isn't something that's simply designed and done. Instead, effective security requires the coordinated buy-in of organizational leadership, designers, and the developers building and running the application. This is true about web applications that are being developed. But it's also true about the third-party services that a web application depends on to function. If a third-party is vulnerable, it's possible that a dependency on it could compromise your application.

This isn't limited to production services, either. It makes sense that if an infrastructure provider (like AWS) is compromised, it would affect your production application. But what about during the development, staging, and product review phases? If you're a web agency with enterprise clients, you might be working with sensitive proprietary information. Likewise, if you're a developer at a major technology company, the website you're building may be for a product that hasn't even been announced yet.

So it's no surprise that one of the most common questions we get asked by new users is "How do you manage security at FeaturePeek?" In order to help our users better understand our security objectives and practices, that's why we put together this blog post.

## 1. FeaturePeek deployment previews are private by default
Did you know that some deploy preview experiences are [indexable on Google?](https://www.google.com/search?q=inurl%3A%22deploy-preview%22+site%3A%22*.netlify.app%22) But that's not the case with FeaturePeek. Our deployment previews are private by default, meaning that even if someone has a deploy preview URL, they can only access it if they're logged in and on the team that owns the project. This way, you can ensure that only approved stakeholders have access to view your in-progress work and keep wandering eyes out.

## 2. We never store your source code on our side
FeaturePeek never stores your source code on our side. We request access to a repo's source code to read the `peek.yml` configuration file, in order to see which repos are opted-in to FeaturePeek. This enables us to detect configuration details about each frontend, like the type of frontend architecture, and whether you to specified if your project is a static or [Docker project.](https://docs.featurepeek.com/dockerhub)

## 3. We never write code directly to your repo
The only time we write references is via a pull request: when a user follows the project setup wizard and requests a [GitHub Actions](https://docs.featurepeek.com/github-actions) template to be added to their repo. Outside this particular exception, FeaturePeek will never write code directly to a repo. Configuring FeaturePeek doesn't touch any of your production deployments, so you can tinker away without fear of screwing things up for your own customers.

## 4. We use HTTPS everywhere
To ensure proper encryption and security for FeaturePeek deployment previews, we exclusively rely on [HTTPS-enabled URLs.](https://www.cloudflare.com/learning/ssl/what-is-https/) Not only do we think this is a "no-brainer" best practice for your deploy previews, but we hope it helps give everyone that you send a FeaturePeek deployment preview link an added sense of confidence in content of what they're about to review.

## 5. Your app is completely isolated from other users' apps
Every FeaturePeek environment gets its own namespace in the cluster, so it's completely isolated from other FeaturePeek users' deployments. We chose to make this security design decision in order to make sure all our users' deployment previews stay private and that their code is only accessed by authorized users.

## 6. FeaturePeek environment variables are encrypted at rest
Rest assured (excuse the pun) that we encrypt all environment variables. If your encrypted environment variables were ever hacked/stolen, their values couldn't be recovered. We encrypt your environment variables to ensure your proprietary information and technological secret sauce is safely under lock and key. If you want to learn more about how Auth works at FeaturePeek, you can read more about it [in our docs.](https://docs.featurepeek.com/oauth)

## 7. We use a password manager (and you should too!)
We're big fans of [password managers](https://www.cnet.com/news/password-managers-a-little-pain-for-a-lot-better-security-world-password-day/) at FeaturePeek. Beyond the convenience of not needing to remember which password you use for each service, by choosing to use a password manager, you're making it easy for yourself to make good decisions about your accounts and password choices. Whether you choose LastPaaS, 1Password, Google Password Manager, or another service.

## Learn more

[FeaturePeek](https://featurepeek.com/) turns your deployment previews into the hub for your team's frontend product review. It's the easiest way for UI/UX teams to collaborate on frontend code, and integrates with familiar tools so you can continue to use the services that you've come to know and love. From Continuous Integration services to container registries, and from bug tracking platforms to getting notified in Slack, we've got you covered.

FeaturePeek provides collaborative frontend staging environments on-demand, so you can collect implementation feedback from stakeholders sooner. Learn more about [FeaturePeek Teams,](https://featurepeek.com/product/teams) our collaborative tool that supercharges deployment previews for development teams.
