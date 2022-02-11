---
title: 'How TypeScript Made Me a Better JS Developer'
category: 'typescript'
---

Working as an embedded consultant, I’ve walked into plenty of repositories in various stages of development. Having done this for almost two years now, I’ve found that I prefer working in React applications that are also written in TypeScript. My experiences with that tech stack have improved my skills and understanding as a JavaScript developer in a number of ways.

Being a superset of the JavaScript language, TypeScript both shares similarities and differs with the language it is built on top of. TypeScript is statically typed, meaning the code is checked at compile-time. JavaScript, as a dynamically typed language, interprets and infers types at runtime. This can contribute to the “fast and loose” nature that developers tend to [complain](https://medium.com/javascript-non-grata/the-top-10-things-wrong-with-javascript-58f440d6b3d8) about when using JavaScript.

## Comparing the Syntax

Let’s compare a React button, written in both languages:

```jsx
class Button extends Component {
  render() {
    return <button {...this.props}>{children}</button>
  }
}

Button.defaultProps = {
  href: '',
  disabled: false,
}

export default Button
```

In the above JavaScript example, we do not always know what value a variable may cary. When we pass props as a spread to the button, it's not initially clear which prop the Button actually needs or will use until you look at the `defaultProps` object.

```tsx
interface IButtonProps {
  href: string;
  disabled?: boolean;
  size?: string;
}

class Button = React.Component<IButtonProps> => {
  public static defaultProps: Partial<IButtonProps> = {
    href: '',
    disabled: false
  };

  public render() {
    return (
      <button {...this.props}>{children}</button>
    );
  }
};

export default Button;
```

In the above TypeScript example, it's clear which props are accepted by this component and which are required if you compare all available props (defined in the `IButtonProps` interface) to which have a default set within the component.

## Benefits to Using TypeScript

TypeScript is designed for use in robust, large-scale applications. Being statically typed, the language allows one to declare a defined data type for each variable in their application. This lends itself to a sense of security, knowing that the data type will be rejected by the syntax if it does not match with the previously-declared data structure.

These defined data types are another reason it can be easier to develop React applications in TypeScript: you are forced to consider the component API more thoroughly. Not only does this mean developers might better structure their components, but it makes active documentation of a codebase more simple. This benefits the team as a whole, as when it is easier for one developer to quickly move between corners of a codebase it improves productivity for all. Similarly to how test-driven development (TDD) can benefit a team’s mindset, a documentation-first mindset can offer similar benefits to a dev team.

### Safety

React does offer a few safety features that compare to TypeScript functionality you might already be familiar with. `propTypes` and their likeness to TypeScript’s interfaces, for example. While they do allow a developer to define prop types and the shapes they might take, these aren’t strictly enforced at a compile-level like they are in TypeScript. Interfaces can extend other interfaces, whereas `propTypes` can be reused but not necessarily extended.

## Common Implementation Patterns

Working in a React x TypeScript codebase, one will begin to see some common patterns crop up over time.

### Higher Order Components (HOCs)

Higher order components (HOCs) are one example of a common pattern. Because we find ourselves extending some of the same interfaces over again, it can be simpler to wrap your components to share state with their children than to consume and then reverse-update the same component multiple times.

### Unions

Union types are used to define multiple type possibilities for a single variable. See the `message` prop below: it could be a single string or an array of strings, both types are accepted by this Button's interface.

```tsx
interface IButtonProps {
  href: string
  disabled?: boolean
  size?: string
  message?: string | string[]
}
```

### Enums

Enums are nice to use when you have a defined set of possibilities to provide as a type, as seen in the example below: an enum of `ButtonSize` tells us all possible values that could be passed to this Button as a `size`.

```tsx
enum ButtonSize = {
  Small,    // 0
  Medium,   // 1
  Large     // 2
}

interface IButtonProps {
  href: string;
  disabled?: boolean;
  size?: ButtonSize;
}
```

## Cross-Experience Collaboration

In addition to being an excellent form of autocomplete for your code, I’ve found TypeScript to be a nice bridge between junior and senior engineers on teams of all sizes. Often an engineer with a long history of using strongly typed languages will prefer the safety of types, and TypeScript offers that while still allowing the engineers with more experience in JavaScript to still contribute to the same codebase.

A TypeScript-in-React codebase can be one of the simplest to onboard to, but especially so if the team leverages tooling and libraries to achieve the shared goal. Some of my favorite libraries to leverage with this stack are:

- [Storybook](https://storybook.js.org): An open source tool for building UI components and pages in isolation that streamlines UI development, testing, and documentation in your repository.
- [React-Redux](https://redux.js.org/usage/usage-with-typescript): You might already be familiar with this state-management library, but did you know it's designed to be combined with TypeScript for a more powerful dev experience? Now you do. The defined types also make it easier to interact with redux across a larger stack, I've found.

## Futher Reading

For folks looking to get started learning TypeScript, taking a look at [the fundamentals](https://typescriptcourses.com/typescript-fundamentals) can be helpful. The [language’s official website](https://www.typescriptlang.org) has a real-time [playground](https://www.typescriptlang.org/play) available if you want to see the syntax in action without configuring a new project yourself. This comprehensive and thorough [gitbook](https://basarat.gitbook.io/typescript/) by [Basarat Ali Syed](https://github.com/basarat) is another helpful cheat-sheet I have bookmarked for my own reference.

---

## Seen At

**[React Denver](https://www.meetup.com/ReactDenver/events/kgrmmqyzgbvb/)** on April 16th, 2019

**FormidaDenver [Open House](https://www.eventbrite.com/e/formidable-denver-open-house-registration-50409837180)** on October 25th, 2018

### Slides

→ [📽 Live view](https://kale-stew.github.io/ts-in-react/)

→ [📑 Exported PDF](https://github.com/kale-stew/ts-in-react/blob/master/final.pdf)
