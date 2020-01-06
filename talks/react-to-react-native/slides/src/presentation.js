import React, { Component } from 'react';
import './fonts.css';

import * as CodeSamples from './code-samples';

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
  Notes,
  Slide,
  Text
} from 'spectacle';

// theme
import createTheme from 'spectacle/lib/themes/default';
const theme = createTheme(
  {
    black: '#272727',
    teal: '#30A7DB',
    navy: '#091540',
    offWhite: '#EFF4F9',
    green: '#26C145',
    orange: '#F04D20',
    primary: '#EFEFEF',
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
  BrowserSample: require('./assets/in-browser.png'),
  CopyPaste: require('./assets/copy-paste.gif'),
  FormidaLogo: require('./assets/new-formidable.png'),
  NativeSample: require('./assets/in-react-native.png'),
  React: require('./assets/react.png'),
  Roadmap: require('./assets/roadmap.png'),
  SimpleTodo: require('./assets/todo.gif'),
  StackNav: require('./assets/stack-navigator.gif'),
  TabNav: require('./assets/tab-navigator.gif')
};
/* eslint-enable no-undef */

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['slide']} theme={theme}>
        <Slide bgColor="teal">
          <Heading textColor="offWhite" fit={true}>
            React to React Native:
          </Heading>
          <Heading textColor="offWhite" fit={true}>
            <i>How Hard Could It Be?</i>
          </Heading>
          <br />
          <br />
          <Image src={images.FormidaLogo} height="110px" />
          <br />
          <Heading textFont="Montserrat" textColor="navy" size={6}>
            Kylie Stewart
          </Heading>
          <Heading textFont="Montserrat" textColor="navy" size={6}>
            Software Engineer at Formidable
          </Heading>
          <Notes>
            My goal is:
            <ul>
              <li>to introduce you to React, if you're unfamiliar</li>
              <li>something else i think</li>
            </ul>
          </Notes>
        </Slide>

        {/** WHAT IS REACT? */}
        <Slide bgColor="teal">
          <Heading size={3} textColor="offWhite">
            What is React?
          </Heading>
          <br />
          <Image src={images.React} width="330px" />
          <Notes>javascript library for building user interfaces</Notes>
        </Slide>

        {/** WHY?? */}
        <Slide bgColor="teal">
          <Heading size={4} textColor="offWhite">
            But why use it?
          </Heading>
          <br />
          <Appear>
            <Text textColor="offWhite">JSX</Text>
          </Appear>
          <Appear>
            <Text textColor="offWhite">virtual DOM</Text>
          </Appear>
          <Appear>
            <Text textColor="offWhite">component interfaces</Text>
          </Appear>
          <Notes>
            it's just JS! the DOM is hard, component interfaces are cool
          </Notes>
        </Slide>

        {/** WHAT IS REACT NATIVE */}
        <Slide bgColor="teal">
          <Heading fit={true}>What is React Native?</Heading>
        </Slide>

        {/** CHALLENGES */}
        <Slide bgColor="navy">
          <Heading>Our Starting Point</Heading>
          <br />
          <Image src={images.SimpleTodo} width="550px" />
        </Slide>

        <Slide bgColor="navy">
          <Heading fit={true}>"Can I just copy and paste the code?"</Heading>
          <br />
          <Image src={images.CopyPaste} width="350px" />
          <br />
        </Slide>

        {/** #1: STRUCTURE */}
        <Slide bgColor="orange">
          <Heading fit={true} textColor="offWhite">
            Challenge #1: API 🔨
          </Heading>
          <br />
          <Layout>
            <Fill>
              <Appear>
                <CodePane
                  source={CodeSamples.TodoBeforeNative}
                  color="white"
                  theme="light"
                />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane
                  source={CodeSamples.TodoAfterNative}
                  color="white"
                  theme="light"
                />
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        {/** #2: STYLES */}
        <Slide bgColor="green">
          <Heading>Challenge #2: Styling 💅🏻</Heading>
        </Slide>

        <Slide bgColor="green">
          <Heading textColor="offWhite" size={4}>
            Before
          </Heading>
          <br />
          <Image src={images.BrowserSample} />
        </Slide>

        <Slide bgColor="green">
          <Heading textColor="offWhite" size={4}>
            Before
          </Heading>
          <br />
          <Layout>
            <Fill>
              <CodePane
                source={CodeSamples.AppJSSnippet}
                color="white"
                theme="light"
              />
            </Fill>
            <Fill>
              <CodePane
                source={CodeSamples.AppCSS}
                color="white"
                theme="light"
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="green">
          <Heading textColor="offWhite" size={4}>
            After
          </Heading>
          <br />
          <Layout>
            <Fill>
              <Image src={images.NativeSample} width="280px" />
            </Fill>
            <Fill>
              <CodePane
                source={CodeSamples.Native}
                color="white"
                theme="light"
              />
            </Fill>
          </Layout>
        </Slide>

        {/** #3: NAVIGATION */}
        <Slide bgColor="navy">
          <Heading>Challenge #3: Navigation 📍</Heading>
        </Slide>

        <Slide bgColor="navy">
          <Heading textColor="offWhite" size={4}>
            Tab Navigator
          </Heading>
          <br />
          <Layout>
            <Fill>
              <Image src={images.TabNav} width="330px" />
            </Fill>
            <Fill>
              <CodePane
                source={CodeSamples.TabNavigator}
                color="white"
                theme="light"
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="navy">
          <Heading textColor="offWhite" size={4}>
            Stack Navigator
          </Heading>
          <br />
          <Layout>
            <Fill>
              <Image src={images.StackNav} width="330px" />
            </Fill>
            <Fill>
              <CodePane
                source={CodeSamples.StackNavigator}
                color="white"
                theme="light"
              />
            </Fill>
          </Layout>
        </Slide>

        {/** #5: ENVIRONMENT */}
        <Slide bgColor="teal">
          <Heading>Challenge #4: Environment 🏠</Heading>
        </Slide>

        <Slide bgColor="teal">
          <Appear>
            <Text textColor="offWhite">Before</Text>
          </Appear>
          <Appear>
            <CodePane
              source={CodeSamples.EnvBefore}
              color="white"
              theme="light"
            />
          </Appear>
          <br />

          <Appear>
            <Text textColor="offWhite">After</Text>
          </Appear>
          <Appear>
            <CodePane
              source={CodeSamples.EnvAfter}
              color="white"
              theme="light"
            />
          </Appear>
        </Slide>

        {/** THE FUTURE */}
        <Slide bgColor="green">
          <Heading size={4}>✨ The Future ✨</Heading>
          <br />
          <Image src={images.Roadmap} height="400px" />
          <br />
          <Code style={{ color: 'white' }}>
            https://github.com/facebook/react-native/wiki/Roadmap
          </Code>
          <Notes>no more broken versions!</Notes>
        </Slide>

        {/** FIN */}
        <Slide bgColor="orange">
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
