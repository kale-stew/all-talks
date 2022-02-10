---
title: 'React to React Native: How Hard Could It Be?'
category: 'react, react native'
---

As a React consultant, I’ve been asked the question “how hard would it be to take our functional React app and build it in React Native?” The short answer is “harder than you might think”, and this talk aims to address three large issues that come up when you to take your React source and attempt to rewrite it in React Native.

The first of these big challenges is the vastly different API that React Native uses to tap into native functionality on a wide range of phones available to the public today. When you think of mobile development, you might think of Android versus iOS, which is certainly one of the biggest divides. But then consider the subsections of Android, or even the lifetime of iPhones out on the market today. They have varying screen sizes and physical capabilities. The volume button on an iPhone XR might be accessible, but not an iPhone 6s by the same command. React Native bridges these native bindings for you, and your existing React application might not have already addressed these corner cases. Adding additional support to ensure complete coverage in a React Native app could (and often does) take more time than starting fresh would.

A second challenge to consider if how different styling is handled in mobile applications. There is no DOM to handle your stylesheet. Developers have to opt for inline styles, and the wide variety of CSS-in-JS libraries can be daunting for a team with little experience or preference here. Each solution for this common problem is differently opinionated and implementing these code choices across a large team can be a headache.

Another challenge is navigation through your application. No longer having an in-browser router to lean on, this challenge brings us back to the issue of cross-platform functionality. This solution can be complex between devices. Having to decide between a tab or drawer navigation because they are the only two types thoroughly supported across devices can force a team to make decisions they wouldn’t otherwise care to.

The last challenge I’ll cover here is environment. Handling secret variables can be finicky, especially depending on where you plan to deploy your application. Developers have been known to unpack a deployed application build to discover planned features or hidden-in-plain-sight secrets in the source. Not to mention app store compliance, which can be notoriously tricky to both achieve and maintain.

When considering these four challenges, I’ve found that clients typically don’t really need to build a native application. More attainable alternatives, like PWA techniques or a native wrapper for existing React apps like Electron, can be a better option for teams that don’t need to rely on native phone functionality like biometric scans or encryption. A bank should build a native app, but an online shop doesn’t necessarily need to.

Being an open-sourced software, we can take a look at React Native’s public roadmap to get an idea of what they’re planning for the future of this framework. This is helpful for checking whether a certain bug you might need fixed has been prioritized, or getting a feel for recently (or even soon-to-be) introduced features. As for anyone that wants to get started with React Native, I would recommend starting with [the docs](https://facebook.github.io/react-native/docs/tutorial). They are comprehensive and highlight the differences between the two frameworks well.

---

## Seen At

**DenverScript**: May 2019

- https://www.meetup.com/DenverScript/
- https://www.code-talent.com/event-calendar/2019/5/28/denver-script

**RVA.js 2019:** November

- http://rvajs.com
