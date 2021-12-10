import React, { Component } from 'react'
import './fonts.css'

// spectacle-core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
} from 'spectacle'

// theme
import createTheme from 'spectacle/lib/themes/default'
const theme = createTheme(
  {
    aqua: '#009DDC',
    black: '#272727',
    darkRed: '#7F0011',
    medRed: '#A30015',
    orange: '#F26430',
    primary: '#EFEFEF',
    white: '#fff',
  },
  {
    primary: 'PT Mono',
    secondary: 'Helvetica',
  }
)

// image assets
const images = {
  Cart: require('./assets/shopping-cart.png'),
  Classroom: require('./assets/supervised.png'),
  Click: require('./assets/click.png'),
  CyaL8r: require('./assets/cya.png'),
  DarkTwitter: require('./assets/alt-twitter.png'),
  FormidaLogo: require('./assets/formidableWhite.png'),
  Functions: require('./assets/fn-notation.png'),
  HorseEbooks: require('./assets/horse_ebooks.png'),
  Imagination: require('./assets/imagination.gif'),
  JsHorse: require('./assets/horse_js.png'),
  NNDiagram: require('./assets/nn_diagram.png'),
  Sorry: require('./assets/sorry.png'),
  TLDR: require('./assets/tldr_types.png'),
  Throwback: require('./assets/deep-blue.jpg'),
  Tiny: require('./assets/tiny.gif'),
  Title: require('./assets/title.png'),
  Tradeoff: require('./assets/tradeoff.png'),
  Unsupervised: require('./assets/big-data.jpg'),
}

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['slide']} theme={theme}>
        {/** TITLE SLIDE */}
        <Slide bgColor="orange">
          <Image src={images.Title} width="525px" />
        </Slide>

        {/** ABOUT ME */}
        <Slide bgColor="medRed">
          <Heading textColor="white" size={2}>
            Hi!
          </Heading>
          <br />
          <Heading textColor="white" size={2}>
            I'm Kylie
          </Heading>
          <Appear>
            <Image src={images.FormidaLogo} height="360px" />
          </Appear>
          <Notes>
            Formidable is a Seattle and London-based engineering consultancy and
            open source software organization specializing in
            <ul>
              <li>React.js</li>
              <li>React Native</li>
              <li>GraphQL</li>
              <li>Node.js</li>
              <li>the extended JavaScript ecosystem</li>
            </ul>
          </Notes>
        </Slide>

        {/** AGENDA */}
        <Slide bgColor="aqua">
          <Heading textColor="white">AGENDA</Heading>
          <br />
          <br />
          <Appear>
            <Text textColor="white">WHAT IS MACHINE LEARNING?</Text>
          </Appear>
          <br />
          <Appear>
            <Text textColor="white">WHAT ARE SOME MACHINE LEARNING TYPES?</Text>
          </Appear>
          <br />
          <Appear>
            <Text textColor="white">
              WHAT ARE SOME ADVANTAGES TO USING JAVASCIPT FOR ML?
            </Text>
          </Appear>
          <br />
          <Appear>
            <Text textColor="white">=> DEMOS!</Text>
          </Appear>
        </Slide>

        {/** DEFINE MACHINE LEARNING */}
        <Slide bgColor="orange">
          <Appear>
            <BlockQuote>
              <Quote textColor="white">
                "The ability to learn without being explicitly programmed."
              </Quote>
              <br />
              <Cite textColor="white">Arthur Samuel</Cite>
            </BlockQuote>
          </Appear>
          <Notes>
            <ul>
              <li>He coined the term "machine learning" in 1959</li>
              <li>
                built one of the world's first successful self-learning programs
              </li>
              <li>=> Samuel Checkers-playing Program</li>
              <li>
                one of the first to demonstrate the fundamental concept of
                artificial intelligence
              </li>
            </ul>
          </Notes>
        </Slide>

        {/** FUNCTION NOTATION */}
        <Slide bgColor="orange">
          <Heading size={4} textColor="white">
            THINK: FUNCTION NOTATION
          </Heading>
          <br />
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

        <Slide bgColor="white">
          <Heading size={3} textColor="orange">
            MACHINE LEARNING
          </Heading>
          <Heading fit={true} textColor="orange">
            PAVES THE PATH
          </Heading>
          <Heading fit={true} textColor="orange">
            TO ARTIFICIAL INTELLIGENCE
          </Heading>
          <Notes>
            <ul>
              <li>without ML, we can't achieve AI</li>
              <li>shared data base and knowledge is important</li>
              <li>have always had access to it, but collaboration is key</li>
            </ul>
          </Notes>
        </Slide>

        {/** JS VS PYTHON */}
        <Slide bgColor="orange">
          <Layout>
            <Fill>
              <Heading size={2} textColor="white">
                <b>TF.py</b>
              </Heading>
            </Fill>
            <Fill>
              <Heading size={2} textColor="white">
                <b>TF.js</b>
              </Heading>
            </Fill>
          </Layout>
          <Notes>
            "JavaScript is not suited for machine learning"
            <br />
            <br />
            Python
            <ul>
              <li>
                already equipped with well-suited and well-supported libraries
                for neccessary tasks
              </li>
              <li>powerful C++ bindings</li>
            </ul>
            JS
            <ul>
              <li>don't have to learn a new programming language</li>
              <li>
                an accessible technology: can be used for desktop, mobile,
                backend, embedded systems
              </li>
              <li>we have the libraries</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="orange">
          <Heading size={5} textColor="white">
            <i>SO MANY POSSIBILITIES</i>
          </Heading>
          <br />
          <Appear>
            <Image width="680px" src={images.Imagination} />
          </Appear>
        </Slide>

        <Slide bgColor="orange">
          <Image width="800px" src={images.Tiny} />
        </Slide>

        {/** DEMO 1: PERSONAL PARODY ACCOUNT */}
        <Slide bgColor="aqua">
          <Heading>DEMO #1:</Heading>
          <br />
          <Heading fit={true}>YOUR OWN PERSONAL</Heading>
          <Heading fit={true}>PARODY TWITTER BOT</Heading>
          <Notes>
            <ul>
              <li>what do I mean when I say "parody account"?</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="aqua">
          <Image width="890px" src={images.HorseEbooks} />
        </Slide>

        <Slide bgColor="aqua">
          <Image width="890px" src={images.JsHorse} />
        </Slide>

        <Slide bgColor="white">
          <Heading textColor="aqua" size={3}>
            <b>MARKOV DECISION PROCESS</b>
          </Heading>
          <br />
          <br />
          <Heading textColor="aqua" fit={true}>
            A TYPE OF REINFORCEMENT LEARNING
          </Heading>
          <Notes>
            What is it?
            <ul>
              <li>goal-oriented algorithms</li>
              <li>learn how to attain a complex objective/goal</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="aqua">
          <a href="https://github.com/kale-stew/personal-parody-bot/blob/fb8d5c8875bfb1beae8f2e41fa3078a9e839cfd9/src/markov.js">
            <Image height="400px" src={images.DarkTwitter} />
          </a>
          <Notes>
            <ul>
              <li>Let's check out the code</li>
            </ul>
            <br />
            https://github.com/kale-stew/personal-parody-bot
          </Notes>
        </Slide>

        {/** SUPERVISED VS UNSUPERVISED */}
        <Slide bgColor="medRed">
          <Heading size={3} textColor="white">
            SUPERVISED
          </Heading>
          <br />
          <Image src={images.Classroom} width="600px" />

          <Notes>
            <ul>
              <li>humans teaching machines</li>
              <li>what is important and what isn't</li>
              <li>guidance</li>
              <br />
              <li>Linear Regression</li>
              <li>Classification</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="medRed">
          <Heading size={1} textColor="white">
            UNSUPERVISED
          </Heading>
          <br />
          <Image src={images.Unsupervised} width="600px" />

          <Notes>
            <ul>
              <li>set out on its own</li>
              <li>loose constraints</li>
              <li>too much data for humans to process</li>
              <br />
              <li>Exploratory analysis</li>
              <li>Anomaly detection</li>
              <li>Clustering</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="medRed">
          <Heading>TL; DR</Heading>
          <br />
          <Image src={images.TLDR} width="640px" />
          <Notes>
            <ul>
              <li>
                to better understand the learning types, we can look at the data
              </li>
              <li>discrete: individual, specific data points</li>
              <li>continuous: wide-ranging values</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="medRed">
          <Heading fit={true} textColor="offwhite">
            BIAS-VARIANCE TRADEOFF
          </Heading>
          <br />
          <Image src={images.Tradeoff} width="600px" />
          <Cite textSize="12px">http://scott.fortmann-roe.com/</Cite>
          <Notes>
            <ul>
              <li>high variance --> consistent BUT inaccurate</li>
              <li>high bias --> also bad: accurate BUT inconsistent</li>
              <li>not enough complexity, underfit</li>
              <li>too much, overfit</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="white">
          <Heading textColor="orange">DEEP LEARNING</Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading textColor="orange" size={4}>
            THEN
          </Heading>
          <br />
          <Image src={images.Throwback} width="700" />
          <br />
          <Notes>
            <ul>
              <li>Garry Kasparov</li>
              <li>1997</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="orange">
          <Heading textColor="white" size={3}>
            NOW
          </Heading>
          <br />
          <Image src={images.Sorry} width="800" />
          <br />
          <Notes>
            <ul>
              <li>Credits: Elle O'Brien</li>
              <li>Link to article is in my slides:</li>
            </ul>
            https://medium.com/@andronovhopf/i-trained-a-neural-network-on-red-lobster-tweets-and-all-it-does-is-generate-apologies-a5b032251a79
            <ul>
              <li>circles back to the accessibility of JS</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="orange">
          <Heading textColor="white">NEURAL NETWORKS</Heading>
          <Notes>
            <ul>
              <li>inspired by the structure and function of the brain</li>
              <li>
                ANNs are algorithms that mimic the biological structure of the
                brain
              </li>
              <li>"neurons" => discrete layers, connect to other neurons</li>
              <li>each layer focuses on a specific feature</li>
              <li>depth, not width, of understanding is the goal</li>
            </ul>
          </Notes>
        </Slide>

        {/** DEFINE NEURAL NETWORK TYPES */}
        <Slide bgColor="offwhite">
          <Layout>
            <Fill>
              <Heading textColor="medRed">ANN</Heading>
              <Appear>
                <Text textColor="medRed">ARTIFICIAL NEURAL NETWORK</Text>
              </Appear>
            </Fill>
            <Fill>
              <Heading textColor="medRed">CNN</Heading>
              <Appear>
                <Text textColor="medRed">CONVOLUTIONAL NEURAL NETWORK</Text>
              </Appear>
            </Fill>
          </Layout>
          <Notes>CNN assumes data is an image</Notes>
        </Slide>

        {/** MANY LAYERS */}
        <Slide bgColor="orange">
          <Image src={images.NNDiagram} />
          <Notes>
            <ul>
              <li>a bunch of little maps</li>
              <li>teach themselves purely by looking at data</li>
              <li>
                capable of learning in a nonlinear way --> they can spot
                non-obvious features
              </li>
              <li>pooling --> parses into more digestible form</li>
            </ul>
          </Notes>
        </Slide>

        {/** DEMO 3 & 4: SMART SHOPPING CART */}
        <Slide bgColor="orange">
          <Heading textColor="white" size={2}>
            DEMO!
          </Heading>
          <br />
          <br />
          <a href="http://caza.la/synaptic/#/">
            <Image height="300px" src={images.Click} />
          </a>
        </Slide>

        <Slide bgColor="orange">
          <Heading textColor="white" size={2}>
            ANOTHER DEMO
          </Heading>
          <br />
          <br />
          <a href="http://caza.la/synaptic/#/self-organizing-map">
            <Image height="300px" src={images.Click} />
          </a>
        </Slide>

        <Slide bgColor="orange">
          <Heading textColor="white" size={2}>
            ONE MORE DEMO
          </Heading>
          <br />
          <br />
          <a href="http://caza.la/synaptic/#/paint-an-image">
            <Image height="300px" src={images.Click} />
          </a>
        </Slide>

        {/** SHOUTS OUT TO... */}
        <Slide bgColor="white">
          <Heading textColor="orange" fit={true}>
            SHOUTOUT TO
          </Heading>
          <br />
          <List textAlign="center" textSize={72}>
            TENSORFLOW.JS
            <br />
            SYNAPTIC
            <br />
          </List>
        </Slide>

        {/** FIN */}
        <Slide bgColor="medRed">
          <Layout>
            <Fill>
              <Image width="350px" src={images.CyaL8r} />
            </Fill>
            <Fill>
              <br />
              <br />
              <Heading textColor="white">THANK YOU!</Heading>
            </Fill>
          </Layout>
          <br />
          <br />
          <Heading textColor="white" size={6}>
            @KYLIESTEW ON TWITTER
          </Heading>
          <br />
          <Heading textColor="white" fit={true}>
            GITHUB.COM/KALE-STEW/ML-ON-THE-CL
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
