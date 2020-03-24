---
title: Why we serve our staging environments inside iframes
date: "2020-03-24T12:12:03.284Z"
description: Need a description
hero: hero.jpg
author: jasonbarry
---

TL;DR: We inject functionality that helps us review staging environments. Your credentials are protected via Same-Origin Policy. You can remain logged in across environments.

So you already know why on-demand staging environments are a good thing. 

If the goal of a staging environment is to get (as close to a 1:1) preview of the change before rolling out to production, shouldn't the preview be as close as possible to the real thing? Why wrap the entire website in an iframe? 

...iframes? Like Web 1.0 iframes? 

> **What exactly is an `iframe`?** An [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) is an *inline frame* that renders an HTML document inside of an HTML document. Yo dawg...

## Securely authenticate to third-party services

When reviewing a pull request in a staging environment, we thought it would be useful to have the reviewers be logged into a service so that they could leave comments. Those comments could be mirrored to the pull request on GitHub. 

This is different than being logged into the app of the staging environment. This is rather a layer above, a meta surface where we can identify who is reviewing what. 

We could add a runtime dependency on non-production environments that adds a little widget where users could authenticate to the review service. There could be a little login screen, where after a user completes their OAuth flow, a token gets saved for the duration of their session. 

But how could we securely hold the reviewer's credentials, knowing that the app could potentially contain untrusted code? 

How could we securely hold credentials of the review layer while preventing interference from the app layer? 

By separating the two layers on different domains, we'd be protected by Same-Origin Policy. It would create a natural sandbox for our app code. We could trust that the arbitrary code being run by that app could not maliciously read cookies or local storage values from the review layer. 

## Inject functionality to augment review process

Now we can leave comments on the pull request, authenticated as your GitHub user, directly on the running environment. How cool is that? 

Since we're already leaving a comment, it would be useful to give some context to the author of the pull request, like the URL of the page. 

Alas, the protections of [Same-Origin Policy](https://security.stackexchange.com/questions/8264/why-is-the-same-origin-policy-so-important) have come to bite us: since the review layer and app layer are on separate domains, one cannot query into the DOM of the other! 

```js
const { pathname } = $('frame').contentWindow.document.location

SecurityError: Blocked a frame with origin "https://webcast.livephish.com" from accessing a cross-origin frame. 
Protocols, domains, and ports must match.
```

So how could we read the path name of the child frame? 

What we do is instantiate what we call a *middle frame*. The review layer mounts the middle frame, which in turn mounts the app layer in a frame. Yes, we are talking about a frame in a frame.

**Review layer** | **Middle frame** | **App layer**
-------|----------|-------------
Trusted code | Trusted code | Trusted code
Origin A | Origin B | Origin B
Holds authentication creds, makes client-side requests | Receives messages from review layer, allowed to query DOM of app layer, allowed to send whitelisted messages back to review layer | User's app


Since we control the code on both the review layer and the middle frame, we are allowed to send data back and forth using the `window.postMessage` API. We can whitelist data payloads, or  messages, to and from.  

- Review layer: Button is pressed to submit comment. We want to include the app layer's document href as supplemental info within the comment.
  - `window.postMessage('GET_PATH')`

- Middle frame: Already has a message event handler set up. It listens to the event and fires our custom functionality.
  - `const { href } = $('frame').contentWindow.document.location`
  - `const message = { type: 'GET_PATH', payload: href }`
  - `event.source.postMessage(message, event.origin)`


## Persist logins across environments

Our users told us that it was really frustrating to have to repeatedly log in to their app for every staging environment. 

Traditionally with on-demand staging environments, is that each pull request spawns a new subdomain for your app to live. Each subdomain is treated as a separate origin, so unless you diminish the security of your web app, cookies or local storage from one environment will not be accessible from another. 

The best way to solve this would be to serve your web app from an invariant subdomain. Your cookies would persist for the duration you specify. 

Each pull request build would be served from a directory on that subdomain. 

But how would relative paths work? If we're moving your assets to be served from a different location, requests to `/cat.html` would have to be routed to `/abcd1234/cat.html`. This would be the case for every asset — html, css, JavaScript, images, everything. A `<base>` tag wouldn't solve it.

Once again, iframes to the rescue. 

What we do is set a cookie on the middle frame layer. The value of the cookie is a hash ID that identifies the build. After the cookie is set, we mount the app layer. nginx parses the incoming requests' headers, and rewrites all requests to go to the hash ID transparently. 

Yes, it's a bit slower. But these aren't production environments, so we don't care. 

## What about iframe caveats?

- Navigating within a frame doesn't bubble up data to the top-most window
  - Aha, but it does. Middleframe sends document.title and href to top
  - Use document fragments (`#`) to preserve app route
- Slower
  - Not by much
- x-frame-options, frame-ancestors
  - just whitelist us