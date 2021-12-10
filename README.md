# Conference Talks and Other Presentations

#### by Kylie Stewart

In the spirit of consolidating the many demo projects, slides, and abstracts I have scattered on my laptop, I've put together this repo to create a one-stop shop for my presentations, including relevant demos, slide decks, and other resources.

There is a hosted blog if you would like a better (see: prettier, more fluid, human-readable) navigation experience at [kylieis.online/talks](https://www.kylieis.online/talks).

_Inspired by [Jason Lengstorf](https://lengstorf.com/)'s own [`presentations` repo](https://github.com/jlengstorf/presentations/)._

## What’s In This Repo?

- [Bio and details](#about-kylie)
- [Technical session slides, details, and videos (when available)](#talk-content)

## About Kylie

(This is what I send to people as my bio.)

### Short version

> Kylie Stewart is an engineer and occasional speaker. She is passionate about building tools and high-performing applications, as well as hiking with her dog, Otis. She lives in Denver, Colorado.

## Talk Content

- [2020](./content/2020)
  - [Demystifying `urql` using `urql-devtools`](./content/2020/urql-devtools)
- [2019](./content/2019)
  - [TypeScript + React: A Love Story ❤️](./content/2019/ts-in-react)
  - [React to React Native: How Hard Could It Be?](./content/2019/react-to-react-native)
  - [Evolution of an API: A Case for GraphQL](./content/2019/evolution-of-an-api)
  - [React to React Native: How Hard Could It Be?](./content/react-to-react-native)
- [2018](./content/2018)
  - [Machine Learning with JavaScript](./content/2018/machine-learning-with-javascript)
  - [ML on the CL](./content/2018/ml-on-the-cl)
  - [How TypeScript Made Me a Better JavaScript Developer](./content/2018/improved-js-with-ts)

---

## Development

<details>
<summary>
Every new entry is added to my [source talks doc](https://raw.githubusercontent.com/kale-stew/all-talks/main/content/talks.js) in the following format:
</summary>

```js
export const AllTalks = [
  {
    // https://github.com/kale-stew/all-talks/blob/main/content/talks.js
    title: '',
    description: '',
    presentedAt: [
      {
        eventDate: '',
        eventName: '',
        eventType: '[conference | meetup}',
        eventUrl: '',
        recordedPresentationUrl: '',
        location: 'city, state' | null,
      },
    ],
    exportedSlidesUrl: '',
    hostedSlidesUrl: '',
    previewImg: '',
  },
]
```

</details>

<details>
<summary>
And then, every new talk is added to the given year's README:
</summary>

```md
<!-- Conferences -->

1. [Talk Title](./path_to_talk/README.md)

   Presented at **ConferenceName**<br/>📆 Month 00th<br/>📍 City, STATE

<!-- Meetups -->

1. [Talk Title](./path_to_talk/README.md)

   Presented at [MeetupName](https://www.meetup.com/MeetupName/events/randomhashfrommeetupdotcom)<br/>📆 Month 00th
```

</details>

## Deployment

CI handles that for us. 👨‍🚀 🚀
