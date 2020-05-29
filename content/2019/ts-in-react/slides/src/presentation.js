import React, { Component } from 'react';
import './fonts.css';

import * as codeSamples from './code-samples.js.js';

// spectacle-core tags
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  List,
  ListItem,
  Notes,
  Slide,
  Text
} from 'spectacle';

// theme
import createTheme from 'spectacle/lib/themes/default';
const theme = createTheme(
  {
    black: '#272727',
    greyPearl: '#3D518C',
    navy: '#091540',
    offWhite: '#EFF4F9',
    orange: '#F04D22',
    periwinkle: '#7692FF',
    primary: '#EFEFEF',
    teal: '#ABD2FA',
    white: '#fff'
  },
  {
    primary: 'Fira Sans',
    secondary: 'Montserrat',
    tertiary: 'Space Mono'
  }
);

// image assets
/* eslint-disable no-undef */
const images = {
  Clippy: require('./assets/clippy.jpg'),
  ClippyTweet: require('./assets/clippy-tweet.jpg'),
  FormidaLogo: require('./assets/new-formidable.png'),
  Intellisense: require('./assets/intellisense.gif'),
  OtherGirl: require('./assets/the-other-girl.jpg'),
  Refactor: require('./assets/refactoring.png'),
  TSWithReact: require('./assets/react-with-ts.png'),
  VSCode: require('./assets/vs-code.png'),
  Warning: require('./assets/warning.png')
};
/* eslint-enable no-undef */

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['slide']} theme={theme}>
        <Slide bgColor="greyPearl">
          <Heading textColor="offWhite" fit={true}>
            TypeScript in React:
          </Heading>
          <Heading textColor="offWhite" size={2}>
            <i>A Love Story</i> ❤️
          </Heading>
          <br />
          <br />
          <Image src={images.FormidaLogo} height="110px" />
          <br />
          <Heading textFont="Montserrat" textColor="periwinkle" size={6}>
            Kylie Stewart, Engineer at Formidable
          </Heading>
          <Notes>
            My goal is:
            <List>
              <ListItem>
                to give you a good starting point for using TS with React
              </ListItem>
              <ListItem>for you to look at TS in a new light</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="periwinkle">
          <Image src={images.OtherGirl} width="1000px" />
          <Notes>
            <List>
              <ListItem>You might have heard about TS</ListItem>
              <ListItem>All the rage</ListItem>
              <ListItem>New hotness</ListItem>
              <ListItem>Becoming less and less painful to init</ListItem>
            </List>
          </Notes>
        </Slide>

        {/* It's even in CRA now! */}
        <Slide bgColor="periwinkle">
          <Code style={{ color: 'white' }}>
            yarn create react-app your-app --typescript
          </Code>
          <Notes>available out of the box in CRA</Notes>
        </Slide>

        {/** WHAT IS TYPESCRIPT? */}
        <Slide bgColor="greyPearl">
          <Heading textColor="offWhite">What is TypeScript, exactly?</Heading>
          <Notes>
            <List>
              <ListItem>A superset of JavaScript</ListItem>
              <ListItem>Provides optional static type checking</ListItem>
              <ListItem>Designed for large scale, robust applications</ListItem>
              <ListItem>While still compiling down to JavaScript</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="navy">
          <Layout>
            <Fill>
              <Heading textColor="periwinkle" size={3}>
                Statically Typed
              </Heading>
              <br />
              <Heading size={5} textColor="offWhite">
                <i>Java, TypeScript, Swift</i>
              </Heading>
            </Fill>
            <Fill>
              <Heading textColor="periwinkle" size={3}>
                Dynamically Typed
              </Heading>
              <br />
              <Heading size={5} textColor="offWhite">
                <i>PHP, JavaScript, Python</i>
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            Static
            <List>
              <ListItem>type checking at compile</ListItem>
              <ListItem>every variable must be declared</ListItem>
            </List>
            Dynamic
            <List>
              <ListItem>interpreted and inferred</ListItem>
              <ListItem>no compiler to do the type checking</ListItem>
              <ListItem>run-time values</ListItem>
            </List>
          </Notes>
        </Slide>

        {/** COMPARE TO JS CODE */}
        <Slide bgColor="teal">
          <Heading textColor="navy" size={4}>
            Compared to JavaScript
          </Heading>
          <br />
          <Layout>
            <Fill>
              <CodePane
                source={codeSamples.javaScriptButton}
                theme="external"
              />
            </Fill>
            <Appear>
              <Fill>
                <CodePane
                  source={codeSamples.typescriptButton}
                  theme="external"
                />
              </Fill>
            </Appear>
          </Layout>
          <Notes>
            <List>
              <ListItem>
                We do not always know what value a variable might carry
              </ListItem>
              <ListItem>Or how much that might change</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="greyPearl">
          <Heading textColor="offWhite">What else?</Heading>
          <Notes>
            <List>
              <ListItem>We see how different the code looks from JS</ListItem>
              <ListItem>We loosely understand types</ListItem>
              <ListItem>What are features of this typed language?</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="greyPearl">
          <Heading textColor="offWhite">Interfaces</Heading>
          <br />
          <Appear>
            <CodePane
              source={codeSamples.typescriptButton}
              color="white"
              theme="light"
            />
          </Appear>
          <Notes>
            <List>
              <ListItem>A contract for your component</ListItem>
              <ListItem>will warn you if prop is missing, wrong type</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="greyPearl">
          <Heading textColor="offWhite">Unions</Heading>
          <br />
          <Appear>
            <CodePane
              source={codeSamples.buttonWithUnion}
              color="white"
              theme="light"
            />
          </Appear>
          <Notes>
            <List>
              <ListItem>A contract for your component</ListItem>
              <ListItem>will warn you if prop is missing, wrong type</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="greyPearl">
          <Heading textColor="offWhite">Enums</Heading>
          <br />
          <Appear>
            <CodePane
              source={codeSamples.buttonWithEnum}
              color="white"
              theme="light"
            />
          </Appear>
          <Notes>
            <List>
              <ListItem>A user-defined data type</ListItem>
              <ListItem>Number-based</ListItem>
              <ListItem>V safe</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="greyPearl">
          <Appear>
            <Heading textFont="Space Mono">any</Heading>
          </Appear>
          <br />
          <Image src={images.Warning} width="220px" />
          <br />
          <Notes>
            <List>
              <ListItem>trap door of sorts</ListItem>
              <ListItem>will allow literally anything</ListItem>
              <ListItem>defeats the purpose of TS</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="greyPearl">
          <Heading textColor="offWhite" size={3}>
            Object Literal Checks
          </Heading>
          <br />
          <Appear>
            <CodePane
              source={codeSamples.objectLiteralCheck}
              color="white"
              theme="light"
            />
          </Appear>
        </Slide>

        <Slide bgColor="greyPearl">
          <Heading textColor="offWhite" size={3}>
            Allowing Extraneous Props
          </Heading>
          <br />
          <Appear>
            <CodePane
              source={codeSamples.allowAnyIndex}
              color="white"
              theme="light"
            />
          </Appear>
        </Slide>

        <Slide bgColor="offWhite">
          <Image src={images.TSWithReact} width="915px" />
          <Notes>
            <List>
              <ListItem>We write the code in React using TS</ListItem>
              <ListItem>Webpack compiles it for us</ListItem>
              <ListItem>Webpack is awesome, better loaders every day</ListItem>
              <ListItem>
                Angular, Vue still work, React is just my preference
              </ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="offWhite">
          <Appear>
            <Text textColor="navy" textFont="Montserrat">
              <span role="img" aria-label="emoji">
                📦
              </span>
              {'  '}
              Create more portable code
            </Text>
          </Appear>
          <br />
          <Appear>
            <Text textColor="navy" textFont="Montserrat">
              <span role="img" aria-label="emoji">
                📓
              </span>
              {'  '}
              Write better documentation
            </Text>
          </Appear>
          <br />
          <Appear>
            <Text textColor="navy" textFont="Montserrat">
              <span role="img" aria-label="emoji">
                🛠️
              </span>
              {'  '}
              Easy refactoring
            </Text>
          </Appear>
          <br />
          <Appear>
            <Text textColor="navy" textFont="Montserrat">
              <span role="img" aria-label="emoji">
                📈
              </span>
              {'  '}
              Increase dev productivity
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="teal">
          <Heading textColor="navy" size={2}>
            TypeScript Errors
          </Heading>
          <br />
          <br />
          <Code style={{ color: 'white' }}>noImplicitAny</Code>
          <br />
          <br />
          <Code style={{ color: 'white' }}>strictNullChecks</Code>
          <Notes>
            <List>
              <ListItem>raise errors on for any types</ListItem>
              <ListItem>
                values cannot eventually turn up as null or undefined
              </ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="navy">
          <Heading textColor="teal">Write Better Component APIs</Heading>
        </Slide>

        <Slide bgColor="navy">
          <Heading textColor="teal" size={3}>
            PropTypes vs. Interfaces
          </Heading>
          <br />
          <Layout>
            <Fill>
              <CodePane
                source={codeSamples.javaScriptButtonWithPropTypes}
                color="white"
                theme="light"
              />
            </Fill>
            <Fill>
              <CodePane
                source={codeSamples.typescriptButton}
                color="white"
                theme="light"
              />
            </Fill>
          </Layout>
          <Notes>
            Differences:
            <ListItem>
              TS lets you statically type your entire codebase
            </ListItem>
            <ListItem>
              PropTypes only validate on a component-level in dev
            </ListItem>
          </Notes>
        </Slide>

        <Slide bgColor="teal">
          <Heading textColor="navy">Composing Better Props and State</Heading>
          <Notes>Might require you to move a few things around</Notes>
        </Slide>

        <Slide bgColor="teal">
          <Image src={images.Refactor} />
        </Slide>

        <Slide bgColor="teal">
          <Heading textColor="navy" size={3}>
            Extending Interfaces
          </Heading>
          <br />
          <Layout>
            <Fill>
              <CodePane
                source={codeSamples.userDataInterface}
                color="white"
                theme="light"
              />
            </Fill>
            <Appear>
              <Fill>
                <CodePane
                  source={codeSamples.extendedUserDataInterface}
                  color="white"
                  theme="light"
                />
              </Fill>
            </Appear>
          </Layout>
          <Notes>
            <List>
              <ListItem>Can be shared and extended upon</ListItem>
              <ListItem>HOC Patterns</ListItem>
              <ListItem>
                A component that wraps another component for the sake of
                extending props to it
              </ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="teal">
          <Heading textColor="navy">Interfaces x TDD</Heading>
          <br />
          <Notes>
            <List>
              <ListItem>Know what your data looks like</ListItem>
              <ListItem>Write tests around that</ListItem>
              <ListItem>Valid mock data → shared dir is nice</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="offWhite">
          <Appear>
            <Text textColor="navy" textFont="Montserrat">
              <span role="img" aria-label="emoji">
                ✅
              </span>
              {'  '}
              Create more portable code
            </Text>
          </Appear>
          <br />
          <Appear>
            <Text textColor="navy" textFont="Montserrat">
              <span role="img" aria-label="emoji">
                ✅
              </span>
              {'  '}
              Write better documentation
            </Text>
          </Appear>
          <br />
          <Appear>
            <Text textColor="navy" textFont="Montserrat">
              <span role="img" aria-label="emoji">
                ✅
              </span>
              {'  '}
              Easy refactoring
            </Text>
          </Appear>
          <br />
          <Appear>
            <Text textColor="navy" textFont="Montserrat">
              <span role="img" aria-label="emoji">
                ❓
              </span>
              {'  '}
              Increase dev speed
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="periwinkle">
          <Image src={images.Intellisense} width="800" />
          <Notes>Automatic Type Acquisition</Notes>
        </Slide>

        <Slide bgColor="periwinkle">
          <Layout>
            <Fill>
              <Image src={images.VSCode} height="420px" />
            </Fill>
            <Fill>
              <Appear>
                <Text>Reads 3rd party declaration files</Text>
              </Appear>
              <br />
              <Appear>
                <Text>Gives you cleaner errors</Text>
              </Appear>
              <br />
              <Appear>
                <Text>Helps you refactor</Text>
              </Appear>
            </Fill>
          </Layout>
          <Notes>
            <List>
              <ListItem>
                VSCode reads declaration files for all npm packages
              </ListItem>
              <ListItem>Clear cut errors</ListItem>
              <ListItem>
                Know the component API before digging into the code
              </ListItem>
              <ListItem>helps you refactor</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="periwinkle">
          <Image src={images.ClippyTweet} height="200px" />
          <br />
          <Appear>
            <Image src={images.Clippy} height="200px" />
          </Appear>
          <Notes>Obviously, not a fix-all</Notes>
        </Slide>

        {/** TRY IT YOURSELF */}
        <Slide bgColor="offWhite">
          <Heading size={3} textColor="periwinkle">
            <i>Try it for yourself!</i>
          </Heading>
          <br />

          <Text textFont="Space Mono" textColor="greyPearl" textSize="34px">
            https://typescriptcourses.com/typescript-fundamentals
          </Text>
          <br />
          <Text textFont="Space Mono" textColor="greyPearl" textSize="34px">
            https://www.typescriptlang.org/play
          </Text>
          <br />
          <Text textFont="Space Mono" textColor="greyPearl" textSize="34px">
            https://basarat.gitbooks.io/typescript
          </Text>
        </Slide>

        {/* THE FUTURE */}

        {/** FIN */}
        <Slide bgColor="periwinkle">
          <Heading>THANK YOU!</Heading>
          <br />
          <br />
          <Heading textFont="Montserrat" textColor="white" size={5}>
            @KYLIESTEW ON TWITTER
          </Heading>
          <br />
          <Code style={{ color: 'white' }}>
            github.com/kale-stew/ts-in-react
          </Code>
        </Slide>
      </Deck>
    );
  }
}
