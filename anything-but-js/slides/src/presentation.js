import React, { Component } from 'react';

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
    aqua: '#007ACC',
    black: '#111111',
    darkRed: '#7D1513',
    medRed: '#DD4B39',
    navy: '#08415C',
    offwhite: '#EFEFEF',
    orange: '#EF642B',
    primary: '#EFEFEF',
    yellow: '#F7E842'
  },
  {
    primary: 'Lato',
    secondary: 'Helvetica'
  }
);

// image assets
const images = {
  FormidaLogo: require('./assets/formidableWhite.png'),
  Functions: require('./assets/fn-notation.png'),
  Fail: require('./assets/smart-robot.gif'),
  OtherGirl: require('./assets/the-other-girl.jpg'),
  ReasonML: require('./assets/reason.png'),
  Robot: require('./assets/robot.png'),
  Supervised: require('./assets/supervised.png'),
  Tensorflow: require('./assets/tensorflow.png'),
  TypeScript: require('./assets/ts.png'),
  Unsupervised: require('./assets/big_data.jpg')
};

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
`;

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
`;

const javaScriptCode = `
let getAnswer = (review, message) => {
  switch(review) {
    case 'Bad': 
      return 'That is sad that you think: ' + message;
    case 'Neutral': 
      return 'Okay';
    case 'Awesome': 
      return 'Yes yes yes!';
  };
}
`;

const reasonMLCode = `
type review =
  | Bad(string)
  | Neutral
  | Awesome;

let getAnswer = review =>
  switch (review) {
  | Bad(comment) => "That is sad that you think: " ++ comment
  | Neutral => "Okay"
  | Awesome => "Yes yes yes!"
  };
`;

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['fade']} theme={theme}>
        <Slide bgColor="yellow">
          <Heading textColor="black">Anything but JavaScript</Heading>
        </Slide>

        {/** ABOUT ME */}
        <Slide bgColor="darkRed">
          <Heading textColor="offwhite" size={2}>
            Hi! I'm Kylie
          </Heading>
          <Image src={images.FormidaLogo} height="400px" />
          <Notes>
            {
              'Formidable is a Seattle, Denver, and London-based engineering consultancy and open source software organization specializing in React.js, React Native, GraphQL, Node.js, and the extended JavaScript ecosystem.'
            }
          </Notes>
        </Slide>

        {/** TYPESCRIPT */}
        <Slide bgColor="offwhite">
          <Heading textColor="aqua">TypeScript</Heading>
          <br />
          <Image src={images.TypeScript} width="400px" />
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
        <Slide bgColor="aqua">
          <Heading textColor="offwhite" size={3}>
            What is it?
          </Heading>
          <List
            textColor="offwhite"
            style={{ listStyle: 'none', textAlign: 'center' }}
          >
            <Appear>
              <ListItem>A superset of JavaScript</ListItem>
            </Appear>
            <Appear>
              <ListItem>Provides optional static type checking</ListItem>
            </Appear>
            <Appear>
              <ListItem>Designed for large scale, robust applications</ListItem>
            </Appear>
            <Appear>
              <ListItem>... while still compiling down to JavaScript</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="aqua">
          <Layout>
            <Fill>
              <Heading textColor="offwhite" size={3}>
                Statically Typed
              </Heading>
            </Fill>
            <Fill>
              <Heading textColor="offwhite" size={3}>
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
        <Slide bgColor="offwhite">
          <Heading textColor="aqua" size={4}>
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
        <Slide bgColor="aqua">
          <Heading textColor="offwhite" size={2}>
            Resources
          </Heading>
          <List textColor="offwhite">
            <ListItem>https://basarat.gitbooks.io/typescript/</ListItem>
            <ListItem>https://www.typescriptlang.org/play/</ListItem>
            <ListItem>
              https://typescriptcourses.com/typescript-fundamentals
            </ListItem>
          </List>
        </Slide>

        {/** REASON ML */}
        <Slide bgColor="offwhite">
          <Heading textColor="medRed">ReasonML</Heading>
          <br />
          <Image src={images.ReasonML} />
        </Slide>
        <Slide bgColor="medRed">
          <Heading textColor="offwhite" size={3}>
            What is it?
          </Heading>
          <List
            textColor="offwhite"
            style={{ listStyle: 'none', textAlign: 'center' }}
          >
            <Appear>
              <ListItem>Statically typed</ListItem>
            </Appear>
            <br />
            <Appear>
              <ListItem>Functional</ListItem>
            </Appear>
            <br />
            <Appear>
              <ListItem>Based on OCaml</ListItem>
            </Appear>
            <br />
            <Appear>
              <ListItem>Compiles to JavaScript</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="medRed">
          <Heading textColor="offwhite" size={1}>
            OCaml
          </Heading>
          <br />
          <List textColor="offwhite">
            <Appear>
              <ListItem>Statically typed</ListItem>
            </Appear>
            <Appear>
              <ListItem>Pattern matching</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="medRed">
          <Heading textColor="offwhite" fit={true}>
            Functional Programming
          </Heading>
          <List textColor="offwhite">
            <Appear>
              <ListItem>Seperate concerns</ListItem>
            </Appear>
            <Appear>
              <ListItem>Avoid mutable objects</ListItem>
            </Appear>
            <Appear>
              <ListItem>Limit side effects</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="offwhite">
          <Heading textColor="aqua" size={4}>
            Compared to JavaScript
          </Heading>
          <br />
          <Layout>
            <Fill>
              <CodePane source={javaScriptCode} theme="external" />
            </Fill>
            <Appear>
              <Fill>
                <CodePane source={reasonMLCode} theme="external" />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide bgColor="medRed">
          <Heading textColor="offwhite" size={2}>
            Resources
          </Heading>
          <List textColor="offwhite">
            <ListItem>https://reasonml.github.io/docs/en/what-and-why</ListItem>
            <ListItem>
              https://jaredforsyth.com/posts/a-reason-react-tutorial/
            </ListItem>
            <ListItem>
              https://egghead.io/courses/get-started-with-reason
            </ListItem>
          </List>
        </Slide>

        {/** MACHINE LEARNING */}
        <Slide bgColor="orange">
          <Heading textColor="offwhite">Machine Learning</Heading>
          <br />
          <Image src={images.Robot} width="300px" />
        </Slide>

        <Slide bgColor="offwhite">
          <Text textColor="orange">What is Machine Learning, anyway?</Text>
          <br />
          <Appear>
            <Image src={images.Fail} />
          </Appear>
          <Notes>
            <List>
              <ListItem>we interact with it regularly</ListItem>
              <ListItem>infer from the name</ListItem>
              <ListItem>
                have always had access to it, but collaboration is key
              </ListItem>
              <ListItem>shared knowledge</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="orange">
          <Heading size={4} textColor="offwhite">
            Think: Function Notation
          </Heading>
          <Text textColor="orange">placeholder</Text>
          <Appear>
            <Image src={images.Functions} />
          </Appear>
          <Notes>
            <List>
              <ListItem>list of inputs, x</ListItem>
              <ListItem>list of outputs, y</ListItem>
              <ListItem>we would normally write the func</ListItem>
              <ListItem>
                instead, we are training the machine to approximate the function
                that converts x to y
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="orange">
          <Heading fit={true}>Supervised Learning</Heading>
          <br />
          <Layout>
            <Fill>
              <Image src={images.Supervised} height={'400px'} />
            </Fill>
            <Fill>
              <List textColor="offwhite">
                <ListItem>Humans</ListItem>
                <ListItem>Linear Regression</ListItem>
                <ListItem>Classification</ListItem>
              </List>
            </Fill>
          </Layout>
          <Notes>
            <List>
              <ListItem>humans teaching machines</ListItem>
              <ListItem>what is important and what isn't</ListItem>
              <ListItem>guidance</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="orange">
          <Heading fit={true}>Unsupervised Learning</Heading>
          <br />
          <Layout>
            <Fill>
              <List textColor="offwhite">
                <ListItem>Great for big data</ListItem>
                <ListItem>Exploratory analysis</ListItem>
                <ListItem>Anomaly detection</ListItem>
                <ListItem>Clustering</ListItem>
              </List>
            </Fill>
            <Fill>
              <Image src={images.Unsupervised} />
            </Fill>
          </Layout>
          <Notes>
            <List>
              <ListItem>set out on its own</ListItem>
              <ListItem>loose constraints</ListItem>
              <ListItem>too much data for humans to process</ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide bgColor="offwhite">
          <Image src={images.Tensorflow} />
        </Slide>
        <Slide bgColor="orange">
          <Heading textColor="offwhite" size={2}>
            Resources
          </Heading>
          <List textColor="offwhite">
            <ListItem>https://botnik.org/</ListItem>
            <ListItem>https://github.com/BrainJS/brain.js</ListItem>
            <ListItem>https://github.com/tensorflow/tfjs-examples</ListItem>
            <ListItem>http://caza.la/synaptic/#/</ListItem>
          </List>
        </Slide>

        <Slide bgColor="darkRed">
          <Heading textColor="offwhite" size={2}>
            Thank you!
          </Heading>
          <br />
          <br />
          <Code style={{ color: 'white' }}>
            kale-stew.github.io/anything-but-js
          </Code>
        </Slide>
      </Deck>
    );
  }
}
