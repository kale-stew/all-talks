const talks = [
  {
    title: 'Demystifying urql With urql-devtools',
    description:
      'Using urql-devtools to better understand urql as a GraphQL client.',
    event: [
      {
        eventName: 'GraphQL Denver',
        eventDate: '5/26/2020',
        eventType: 'meetup'
      },
      {
        eventName: 'RESTLess London',
        eventDate: '7/16/2020',
        eventType: 'meetup'
      }
    ],
    exportedSlidesUrl:
      'https://github.com/kale-stew/getting-to-know-urql/blob/master/final.pdf',
    hostedSlidesUrl: 'https://kylieis.online/getting-to-know-urql',
    recordedPresentationUrl: ''
  },
  {
    title: 'Machine Learning on the Command Line',
    description:
      'Using Node.js to create scripts that utilize popular machine learning algorithms.',
    event: [
      {
        eventDate: '6/28/2018',
        eventName: 'js.la',
        eventType: 'meetup'
      }
    ],
    exportedSlidesUrl:
      'https://github.com/kale-stew/ml-on-the-cl/blob/master/final.pdf',
    hostedSlidesUrl: 'https://kale-stew.github.io/ml-on-the-cl',
    recordedPresentationUrl: 'https://youtu.be/MzrDy4s8MF8'
  },
  {
    title: 'How TypeScript Made Me a Better JavaScript Developer',
    description:
      'An overview of helpful patterns for writing TypeScript, and how they apply to a similarly-structured JavaScript code base.',
    event: [
      {
        eventDate: '10/25/2018',
        eventName: 'Formidable Denver Open House',
        eventType: 'meetup'
      }
    ],
    exportedSlidesUrl:
      'https://github.com/kale-stew/typescript-is-awesome/blob/master/final.pdf',
    hostedSlidesUrl: 'https://kale-stew.github.io/typescript-is-awesome/',
    recordedPresentationUrl: null
  },
  {
    title: 'React to React Native: How Hard Could It Be?',
    description:
      "Comparing the browser framework to it's native companion, and contrasting the development approaches.",
    event: [
      {
        eventDate: '11/15/2019',
        eventName: 'RVA.js',
        eventType: 'conference'
      },
      {
        eventDate: '5/28/2019',
        eventName: 'DenverScript',
        eventType: 'meetup'
      }
    ],
    exportedSlidesUrl: '',
    hostedSlidesUrl: 'https://kylieis.online/react-to-react-native',
    recordedPresentationUrl: 'https://www.youtube.com/watch?v=i3DYPaHXLeo'
  },
  {
    title: 'Evolution of an API: A Case for GraphQL',
    description:
      'A discussion of API development over the years, and how GraphQL has evolved to address the problems that have arisen in that time.',
    event: [
      {
        eventDate: '9/20/2019',
        eventName: 'UtahJS',
        eventType: 'conference'
      }
    ],
    exportedSlidesUrl:
      'https://github.com/kale-stew/talks/blob/master/content/2019/evolution-of-an-api/final.pdf',
    hostedSlidesUrl: '',
    recordedPresentationUrl: 'https://www.youtube.com/watch?v=RhQx579OTVc'
  },
  {
    title: 'TypeScript in React: A Love Story',
    description:
      'An overview of practices my team found beneficial while integrating TypeScript into a React monorepo.',
    event: [
      {
        eventDate: '4/16/2019',
        eventName: 'React Denver',
        eventType: 'meetup'
      }
    ],
    exportedSlidesUrl:
      'https://github.com/kale-stew/ts-in-react/blob/master/final.pdf',
    hostedSlidesUrl: 'https://kale-stew.github.io/ts-in-react/',
    recordedPresentationUrl: 'https://youtu.be/iBlGIS-UQsw?t=1638'
  },
  {
    title: 'Using JavaScript to Teach Machines How to do Cool Things',
    description:
      "A gentle introduction to machine learning - defining basic algorithms and discussing why we wouldn't usually use JS to implement them.",
    event: [
      {
        eventDate: '4/28/2018',
        eventName: 'Zeit Day',
        eventType: 'conference'
      }
    ],
    exportedSlidesUrl:
      'https://github.com/kale-stew/zeit-day-2018/blob/master/final.pdf',
    hostedSlidesUrl: 'https://kale-stew.github.io/zeit-day-2018/',
    recordedPresentationUrl: 'https://youtu.be/QaV7a64mUYE'
  }
];

export default talks;
