---
title: 'How TypeScript Made Me a Better JS Developer'
category: 'typescript'
---

Working as an embedded consultant, I’ve had to walk into a number of codebases in various stages of development. Having done this for almost two years now, I’ve found that I prefer working in React applications that are also written in TypeScript. This has improved my skills and understanding as a JavaScript developer in a number of ways.

Being a superset of the JavaScript language, TypeScript both differs and shares some similarities with the language it is built on top of. TypeScript is statically typed, meaning the code is checked at compile-time. JavaScript is dynamically typed, by contrast, and the code is checked at run-time. This can contribute to the “fast and loose” nature that developers tend to complain about when using JavaScript, xx.

Being statically typed, TypeScript also requires one to declare a defined data type for each variable in their application. This lends itself to a sense of security, knowing that the data type will be rejected by the syntax if it does not match with the previously-declared data structure.

Let’s compare a React button, written in both languages:

```tsx
// typescript
```

```jsx
// javascript
```

These defined data types are another reason it can be easier to develop React applications in TypeScript: you are forced to consider the component API more thoroughly. Not only does this mean developers might better structure their components, but it makes active documentation of a codebase more simple. This benefits the team as a whole, as when it is easier for one developer to quickly move between corners of a codebase it improves productivity for all. Similarly to how test-driven development (TDD) can benefit a team’s mindset, a documentation-first mindset.

- TypeScript concepts: Interfaces, Unions, and Enums, `any`

React does offer a few safety features that compare to TypeScript functionality you might already be familiar with. `propTypes` and their likeness to TypeScript’s interfaces, for example. While they do allow a developer to define the prop types and the shapes they might take, these aren’t strictly enforced at a compile-level like they are in TypeScript. Interfaces can extend other interfaces, whereas `propTypes` can be reused but not extended.

Working in a React.js x TypeScript codebase, one does begin to see some common patterns. Higher order components (HOCs) are one example of a common pattern. Because we find ourselves extending some of the same interfaces over again, it can be simpler to wrap your components to share state with their children than to consume and then reverse-update the same component multiple times.

```tsx
// code example of an HOC
// HOC being used
```

Finally, I’ve found TypeScript to be a nice bridge between junior and senior engineers on teams of all sizes. Often an engineer with more experience using strongly typed languages will prefer the safety of types, and TypeScript offers that while also allowing the engineers with more experience in JavaScript to still contribute to the same codebase.

- Libraries teams can use to improve the dev experience, like Storybook

While these aren’t the only benefits I’ve experienced firsthand working in applications that are using these technologies, they are some of the most repeated positive experiences I’ve had working as a consultant across a variety of codebases.

For folks looking to get started learning TypeScript, taking a look at [the fundamentals](https://typescriptcourses.com/typescript-fundamentals) can be helpful. The [language’s official website](https://www.typescriptlang.org) has a real-time [playground](https://www.typescriptlang.org/play) available if you want to see the syntax in action without configuring a new project yourself. This comprehensive and thorough [gitbook](https://basarat.gitbook.io/typescript/) by [Basarat Ali Syed](https://github.com/basarat) is another helpful cheat-sheet I have bookmarked for my own reference.

---

## Seen At

**React Denver:** April 16, 2019

- https://www.meetup.com/ReactDenver/events/kgrmmqyzgbvb/

→ PDF of slides: https://github.com/kale-stew/ts-in-react/blob/master/final.pdf

→ Live slides: https://kale-stew.github.io/ts-in-react/

**FormidaDenver Open House**: October 25, 2018

→ PDF of slides: https://github.com/kale-stew/typescript-is-awesome/blob/master/final.pdf

→ Live slides: https://kale-stew.github.io/typescript-is-awesome/
