# Conference Talks and Other Presentations

#### by Kylie Czajkowski

This is a consolidated source of the many demo projects, slides, abstracts, and other resources I have spun up since I started giving presentations in 2018.

If you would like a different navigation experience, there is a hosted blog version of this content at [kylieis.online/talks](https://www.kylieis.online/talks).

_Inspired by [Jason Lengstorf](https://lengstorf.com/)'s own [`presentations` repo](https://github.com/jlengstorf/presentations/)._

## What’s In This Repo?

- [Bio and details](#about-kylie)
- [Technical session slides, details, and videos (when available)](#talk-content)

## About Kylie

(This is what I send to people as my bio.)

### Short version

> Kylie Czajkowski is an engineer and occasional speaker. She is passionate about building quality developer tools and high-performing applications, as well as hiking with her husband and dog. She lives in San Francisco, California.

## Talk Content

- [2025](./content/2025)
  - [MCP: Going Beyond Task Execution](./content/2025/mcp-and-agent-workflows)
- [2023](./content/2023)
  - [Performant Experimentation at Scale](./content/2023/performant-ab-testing)
- [2020](./content/2020)
  - [Demystifying `urql` using `urql-devtools`](./content/2020/urql-devtools)
- [2019](./content/2019)
  - [TypeScript + React: A Love Story ❤️](./content/2019/ts-in-react)
  - [React to React Native: How Hard Could It Be?](./content/2019/react-to-react-native)
  - [Evolution of an API: A Case for GraphQL](./content/2019/evolution-of-an-api)
  - [React to React Native: How Hard Could It Be?](./content/2019/react-to-react-native)
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
    "id": "directory-slug",
    "title": "",
    "description": "",
    "presentedAt": [
      {
        "eventDate": "",
        "eventName": "",
        "eventType": "conference | meetup",
        "eventUrl": "",
        "recordedPresentationUrl": "",
        "location": "city, state" | null,
      },
    ]
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
