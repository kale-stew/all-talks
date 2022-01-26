---
title: 'React to React Native: How Hard Could It Be?'
category: 'react, react native'
---

In this talk I cover the basics of React, how the browser framework differs from the "native" framework (react-native), and whether or not your application needs to be native (spoiler: it probably does not).

There are four big challenges to consider before converting a React.js application to a native application:

1. The vastly different API that taps into native functionality on a wide range of phones
2. Styling is no longer handling by stylesheets in the DOM, and the selection of CSS-in-JS libraries is vast and sometimes overwhelming.
3. Navigation is no longer handled by an in-browser router, and native navigation functionality is complex between devices. The decision between a tab or drawer primary navigation alone can occupy a team for a full workday.
4. Environment can be finicky, especially depending on where you plan to deploy your application (iOS app store compliance is notoriously tricky).

We also take a brief look at the future of react-native via their public roadmap and discuss alternatives to a native application, like a PWA or native wrapper for your React.js application like electron.

## Further Reading

Some good places to get started with React Native:

- [https://facebook.github.io/react-native/docs/tutorial](https://reactnative.dev/docs/tutorial)

## Acknowledgements

This was presented at [DenverScript](https://www.meetup.com/DenverScript/)'s [May 2019 meetup](<(https://www.code-talent.com/event-calendar/2019/5/28/denver-script)>) and the 2019 [RVA.js](http://rvajs.com) conference. Thank you both for having me!
