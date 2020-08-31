---
title: The subtle art of giving great code reviews
date: "2020-02-06T12:12:03.284Z"
description: How to ensure your feedback is interpreted as constructive criticism
hero: hero.jpg
heroAttributionURL: https://www.pexels.com/photo/person-s-left-hand-holding-green-leaf-plant-886521/
author: jasonbarry
---


Peer code review is the biggest and best thing you can do to improve the quality of your code.

So much so, that in the book [Code Complete](https://www.amazon.com/exec/obidos/ASIN/0735619670/codihorr-20), Steve McConnell gives real-world examples of the dramatic impact code review can have:


*   AT&T reported a **14% increase** in developer productivity and a 90 percent decrease in defects after they introduced reviews.
*   Jet Propulsion Laboratories estimates that it **saves about $25,000 per inspection** by fixing defects at an early stage.
*   Aetna Insurance Company was able to **decrease its development resources by 20%.**

Having a second pair of eyes give your work a once-over can help prevent mission-critical bugs from entering into the wild. And you can learn a thing or two along the way. 

## So, what exactly is a code review?

A code review happens once a developer has submitted a contribution to the project.

This is known as a 'pull request', and you can read a detailed definition and learn how to use them effectively in [our previous article](/blog/why-are-so-many-orgs-slow-to-approve-pull-requests/). 

Before this contribution can be added to the project, other team members will review the code, checking for issues, suggesting improvements and ensuring overall product quality.

This code review can take place whether the team feels most comfortable. It could be comments on Github, a chat on Slack, via Skype or in person. 


## What are the benefits of a code review to your team?

The benefits of code review are obvious — you'll discover bugs, improve code quality and build better projects, too.

But the major benefits of code review are about _people_. 

Sure, you can use testing, but the statistics seriously speak for themselves — the average defect detection rate is only 25% for unit testing, 3% for function testing, and 45% for integration testing. 

Therefore, your code reviews must never be _entirely_ automated. Instead, try incorporating some of these ideas into the process: 



*   **Sharing Knowledge:** When programming, there are often several ways to solve a problem. Reflecting on why this particular approach was chosen reveals hidden knowledge. For example, the reviewee might have a different understanding of the architecture of the application, a superior knowledge of the technology being used or is lacking a key skill — all of which are opportunities to share knowledge. 
*   **Better Estimates:** When estimates are wrong, code reviews are an opportunity to see where the hidden complexities or difficulties were. This leads to more accurate estimates in the future.
*   **Mentoring:** Code reviews can uncover areas for improvement and self-development, which is invaluable to any reviewee. It can also be valuable for the reviewer, who will learn by teaching others.
*   **Check requirements:** Code reviews are the perfect opportunity for agile teams to return to the user story acceptance criteria and check that requirements are met. For added insight, involve stakeholders, designers, and product managers with review tools like [FeaturePeek](https://featurepeek.com/).


## How to give great code reviews 


### Always give constructive feedback

Nobody likes being criticized, especially by their fellow team members. For a code review to be great, the reviewer must balance being positive with avoiding code defects.

The first step is to **remove the _stigma_ from reviews**. Bugs should not be seen as negatives, but instead as an opportunity to teach, fix bad habits and to improve code quality. 

This means that the number of errors produced by each team member should not be tracked, nor used in performance evaluation reviews. 

The next step is to reframe the code review as a _coaching opportunity_. Instead of harsh criticisms, employ the [Socratic method](https://en.wikipedia.org/wiki/Socratic_method). The most effective way to do this is to **encourage self-evaluation by asking questions**, paving the way while helping them discover it for themselves. Just like this: 


<table>
  <tr>
   <td><strong>Critical Feedback  🙀</strong>
   </td>
   <td><strong>Constructive Feedback 😸 </strong>
   </td>
   <td><strong>Outcome 😻</strong>
   </td>
  </tr>
  <tr>
   <td>"Why doesn't this have test coverage?"
   </td>
   <td>"How could more test coverage benefit us as a team?"
   </td>
   <td>Improved understanding of test coverage
   </td>
  </tr>
  <tr>
   <td>"This function is terrible / complicated!"
   </td>
   <td>"How could we improve this function to make it simpler?"
   </td>
   <td>Future functions will be easier to understand
   </td>
  </tr>
  <tr>
   <td>This doesn't match the design!
   </td>
   <td>"Looks good, but it's different from the design — was there some complexity in implementing the design as specified?"
   </td>
   <td>Identify issues with requirements or skills
   </td>
  </tr>
</table>


If one of your reviewers is struggling with constructive feedback, coaching or relationship training might also be appropriate — **the goal is to always keep your team feeling motivated** and ready to do their best work! 


### Agree standards and follow them

Positive peer pressure is a powerful tool. As developers know that their peers will see their code during the review process, allow them to improve their code before submitting it. After all, we all want to look good in front of our team members!

So, follow these steps to ensure that each reviewer is doing the best they can:



1. Agree a definition of 'good code' with your team. This might include formatting, commenting, security considerations or other considerations unique to your industry or team. Use a [linter](https://github.com/eslint/eslint) if you aren't already. It should also include a summary of how to make a pull request that can be reviewed quickly — [see our guide to authoring better pull requests](/blog/why-are-so-many-orgs-slow-to-approve-pull-requests/#how-can-you-speed-up-pull-requests). 
2. Include a 'good code' checklist in every pull request. The submitter must complete this pull request.
3. The reviewer should check the code to ensure this checklist is accurately completed. 


### Always be timely

Code reviews are blockers — until a review has been completed and the code merged, the next stage cannot be completed. If issues are identified, the developer might need to redo work, slowing development further.

Resolve this issue by agreeing to complete code reviews within a certain amount of time. For example, you could agree to have the code review completed and pull requests merged within 2 business days. 

Of course, a goal without a plan is just a wish. Therefore, make plans to ensure success, such as:



*   Allow your reviewers to prioritize reviews over other tasks when required, and never penalize them for missing deadlines as a result.
*   Assign more reviewers as needed. 
*   Reduce the number of approvals required. Some teams require 2 reviewers to approve before merging — if this is a blocker for your product, ask yourself: is this always necessary?
*   Measure the time taken to complete pull requests and seek feedback and suggestions for improvements regularly.


## So, are you ready to give great code reviews?

Now you know how to give great code reviews that improve code quality and improve team productivity, your next step is to automate and systemize where possible. Try adding [FeaturePeek](https://featurepeek.com/) into your review workflow to reduce the friction of doing peer code reviews today. 

