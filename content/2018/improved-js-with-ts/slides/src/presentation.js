import React, { Component } from 'react'
import './fonts.css'

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
  Text,
} from 'spectacle'

// theme
import createTheme from 'spectacle/lib/themes/default'
const theme = createTheme(
  {
    black: '#272727',
    greyPearl: '#3D518C',
    navy: '#091540',
    offWhite: '#EFF4F9',
    periwinkle: '#7692FF',
    primary: '#EFEFEF',
    teal: '#ABD2FA',
    white: '#fff',
  },
  {
    primary: 'Fira Sans',
    secondary: 'Montserrat',
    tertiary: 'Space Mono',
  }
)

// image assets
const images = {
  Autocompletion: require('./assets/autocompletion.jpg'),
  CRAWithTypeScript: require('./assets/CRA-typescript.png'),
  FormidaTeal: require('./assets/formidableTeal.png'),
  Intellisense: require('./assets/intellisense.gif'),
  ItsHappening: require('./assets/its-happening.gif'),
  OtherGirl: require('./assets/the-other-girl.jpg'),
  TSWithReact: require('./assets/react-with-ts.png'),
  VSCode: require('./assets/vs-code.png'),
}

// code samples
const userDataInterface = `
interface IWithUserDataProps {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
  nickname?: string;
}
`

const extendedUserDataInterface = `
interface IGreetingProps extends IWithUserDataProps {
  message: string;
}
`

const typescriptButton = `
interface IButtonProps {
  href: string;
  disabled?: boolean;
  large?: boolean;
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
`

const javaScriptButton = `
class Button extends Component {
  render() {
    return (
      <button {...this.props}>{children}</button>
    );
  }
}

Button.defaultProps = {
  href: '',
  disabled: false
};

export default Button;
`

const javaScriptButtonWithPropTypes = `
class Button extends Component {
  render() {
    return (
      <button {...this.props}>{children}</button>
    );
  }
}

Button.defaultProps = {
  href: '',
  disabled: false
};

Button.PropTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  disabled: PropTypes.boolean,
  large: PropTypes.boolean
};

export default Button;
`

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['slide']} theme={theme}>
        {/** TITLE SLIDE */}
        <Slide bgColor="greyPearl">
          <Heading textColor="offWhite">
            How TypeScript Made Me a Better JS Developer
          </Heading>
          <br />
          <br />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src={images.FormidaTeal} width="250px" />
            <Heading textFont="Montserrat" textColor="teal" size={5}>
              Kylie Stewart
            </Heading>
          </div>
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

        <Slide bgColor="teal">
          <Layout>
            <Fill>
              <Heading textColor="navy" size={3}>
                Statically Typed
              </Heading>
            </Fill>
            <Fill>
              <Heading textColor="navy" size={3}>
                Dynamically Typed
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
              <CodePane source={javaScriptButton} theme="external" />
            </Fill>
            <Appear>
              <Fill>
                <CodePane source={typescriptButton} theme="external" />
              </Fill>
            </Appear>
          </Layout>
          <Notes>
            <List>
              <ListItem>
                We don't always know what value a variable might carry
              </ListItem>
              <ListItem>Or how much that might change</ListItem>
              <ListItem>Not easily defined variables, at a glance</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="offWhite">
          <Heading textColor="greyPearl" size={2}>
            But How Does TypeScript Make You a Better Developer?
          </Heading>
          <Notes>
            <List>
              <ListItem>We see how different the code looks from JS</ListItem>
              <ListItem>We loosely understand types</ListItem>
              <ListItem>
                What are the hidden benefits of a TS codebase?
              </ListItem>
            </List>
          </Notes>
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
                📈
              </span>
              {'  '}
              Increase dev speed
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="navy">
          <Heading textColor="teal">Write Better Component APIs</Heading>
        </Slide>

        <Slide bgColor="navy">
          <Heading textColor="teal" size={3}>
            Using Interfaces
          </Heading>
          <br />
          <CodePane source={typescriptButton} color="white" theme="light" />
          <Notes>
            <List>
              <ListItem>A contract for your component</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="navy">
          <Heading textColor="teal" size={3}>
            PropTypes vs. Interfaces
          </Heading>
          <br />
          <Layout>
            <Fill>
              <CodePane
                source={javaScriptButtonWithPropTypes}
                color="white"
                theme="light"
              />
            </Fill>
            <Fill>
              <CodePane source={typescriptButton} color="white" theme="light" />
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
        </Slide>

        <Slide bgColor="teal">
          <Heading textColor="navy" textFont="Montserrat">
            HOC
          </Heading>
          <br />
          <Appear>
            <Heading fit={true} textColor="navy">
              <i>Higher Order Component</i>
            </Heading>
          </Appear>
          <Notes>
            <List>
              <ListItem>wrap components to expose props</ListItem>
              <ListItem>
                works well for multiple screens that need the same data: i.e.
                UserData
              </ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide bgColor="teal">
          <Heading textColor="navy" size={3}>
            Extending Interfaces
          </Heading>
          <br />
          <Layout>
            <Fill>
              <CodePane
                source={userDataInterface}
                color="white"
                theme="light"
              />
            </Fill>
            <Appear>
              <Fill>
                <CodePane
                  source={extendedUserDataInterface}
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
              <ListItem>Valid mock data -> shared dir is nice</ListItem>
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
          <Image src={images.Autocompletion} />
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

        <Slide bgColor="offWhite">
          <Image src={images.CRAWithTypeScript} />
          <br />
          <Appear>
            <Image src={images.ItsHappening} width="600px" />
          </Appear>
        </Slide>

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
            github.com/kale-stew/typescript-is-awesome
          </Code>
        </Slide>
      </Deck>
    )
  }
}
