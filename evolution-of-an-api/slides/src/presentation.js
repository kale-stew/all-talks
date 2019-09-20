import React, { Component } from "react";

import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Notes,
  Slide,
  Text,
  Code,
  List,
  ListItem
} from "spectacle";

import createTheme from "spectacle/lib/themes/default";
const theme = createTheme(
  {
    black: "#130119",
    blue: "#006AE1",
    pink: "#E10098",
    purple: "#7700E1",
    storm: "#111111",
    white: "#EFEFEF"
  },
  {
    primary: "Lato",
    secondary: "Source Sans Pro"
  }
);

const images = {
  Amazon: require("./assets/amazon.png"),
  Baby: require("./assets/baby.png"),
  Boom: require("./assets/boom.png"),
  Facebook: require("./assets/facebook.png"),
  Flickr: require("./assets/flickr.png"),
  FormidaLogo: require("./assets/formidable.png"),
  GraphQL: require("./assets/graphql.png"),
  Programmable: require("./assets/pweb.png"),
  SampleServer: require("./assets/test-server.png"),
  Salesforce: require("./assets/salesforce.png"),
  Spiderman: require("./assets/types.jpeg"),
  Twitter: require("./assets/twitter.png"),
  eBay: require("./assets/ebay.png")
};

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={["fade"]} theme={theme}>
        <Slide bgColor="pink">
          <Heading textColor="white" size={3}>
            The Evolution of an API:
          </Heading>
          <Heading textColor="white" size={3}>
            <i>A Case for GraphQL</i>
          </Heading>
          <br />
          <br />
          <br />
          <Heading textColor="white" size={5}>
            UtahJS 2019 · Kylie Stewart
          </Heading>
        </Slide>
        <Slide bgColor="pink">
          <Text textColor="white" size={1}>
            Hi! I'm Kylie
          </Text>
          <br />
          <Appear>
            <Image src={images.FormidaLogo} height={"175px"} />
          </Appear>
          <Appear>
            <Heading size={5} textColor="white">
              <i>We're hiring!</i>
            </Heading>
          </Appear>
          <Notes>
            {
              "Formidable is a Seattle and London-based engineering consultancy and open source software organization specializing in React.js, React Native, GraphQL, Node.js, and the extended JavaScript ecosystem."
            }
          </Notes>
        </Slide>
        {/** WHAT IS AN API? */}
        <Slide bgColor="purple">
          <Heading textColor="white" size={3}>
            What is an API?
          </Heading>
          <br />
          <Appear>
            <Heading textColor="white">←</Heading>
          </Appear>
          <Notes>Let's start at the beginning</Notes>
        </Slide>
        <Slide bgColor="purple">
          <Appear>
            <Heading size={3} textColor="white">
              <span style={{ color: "orange" }}>A</span>pplication
            </Heading>
          </Appear>
          <br />
          <Appear>
            <Heading size={3} textColor="white">
              <span style={{ color: "orange" }}>P</span>rogramming
            </Heading>
          </Appear>
          <br />
          <Appear>
            <Heading size={3} textColor="white">
              <span style={{ color: "orange" }}>I</span>nterface
            </Heading>
          </Appear>
          <Notes>
            <ul>
              <li>the way software communicates w other software</li>
              <li>we know it, we use them all the time</li>
              <li>but what did they look like before?</li>
            </ul>
          </Notes>
        </Slide>
        {/** HTTP REQUEST EXAMPLES */}
        <Slide bgColor="purple">
          <Heading>📚History of APIs</Heading>
          <Notes>
            "Understanding where we come from is critical to knowing where we
            are going"
          </Notes>
        </Slide>
        <Slide bgColor="purple">
          <BlockQuote
            textColor="white"
            style={{ width: "825px", fontFamily: "Source Sans Pro" }}
          >
            "The concept of an API pre-dates even the advent of personal
            computing, let alone the Web, ... The principal of a well documented
            set of publicly addressable "entry points" that allow an application
            to interact with another system has been an essential part of
            software development since the earliest days of utility data
            processing."
          </BlockQuote>
          <br />
          <Cite>Martin Bartlett</Cite>
        </Slide>
        {/** WHAT MAKES A *GOOD* API? */}
        <Slide bgColor="white">
          <Heading textColor="purple" fit={true}>
            Successes and Failures
          </Heading>
          <br />
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <Appear>
              <Image src={images.Twitter} height="75px" />
            </Appear>
            <Appear>
              <Image src={images.eBay} height="75px" />
            </Appear>
            <Appear>
              <Image src={images.Salesforce} height="75px" />
            </Appear>
            <Appear>
              <Image src={images.Amazon} height="75px" />
            </Appear>
          </div>

          <Notes>
            <ul>
              <li>winners and losers</li>
              <li>distributed systems</li>
              <li>the web itself</li>
              <li> ew challenges and complications</li>
            </ul>
          </Notes>
        </Slide>
        {/** BUT HOW HAS THIS CHANGED OVER TIME? */}
        <Slide bgColor="white">
          <Code textColor="purple">February 7th, 2000</Code>
          <br />
          <br />
          <Image src={images.Salesforce} height="150px" />
          <br />
          <Appear>
            <Image src={images.Baby} />
          </Appear>
          <Notes>
            <ul>
              <li>
                launched as an 'enterprise-class, web-based, sales force
                automation as a "Internet as a service"''
              </li>
              <li>
                the first cloud provider to take an enterprise class web
                application and API
              </li>
              <li>essentially our first introduction to SaaS</li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="white">
          <Code textColor="purple">November 20th, 2000</Code>
          <br />
          <br />
          <Image src={images.eBay} width="250px" />
          <br />
          <Appear>
            <Heading size={4} textColor="purple">
              eBay Developers Program
            </Heading>
          </Appear>
          <Notes>
            <ul>
              <li>
                created as a response to the trend of applications relying on
                its site
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="white">
          <Code textColor="purple">2003</Code>
          <br />
          <br />
          <Heading size={4} textColor="purple">
            del.icio.us
          </Heading>
          <br />
          <Appear>
            <Code>http://del.icio.us/tag/[tag name]/</Code>
          </Appear>
          <br />
          <br />
          <Appear>
            <Image src={images.Boom} />
          </Appear>
          <Notes>
            <ul>
              <li>
                was a social bookmarking service for storing, sharing &
                discovering bookmarks online
              </li>
              <li>if you wanted an RSS feed, you could replace the tag</li>
              <li>game changer</li>
              <li>
                1st example of delivering HTML content, alongside machine
                readable like RSS and XML... all from the web
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="white">
          <Code textColor="purple">2004 - 2006</Code>
          <br />
          <br />
          <Appear>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Image src={images.Twitter} height="150px" />
              <Image src={images.Facebook} height="150px" />
              <Image src={images.Flickr} height="150px" />
            </div>
          </Appear>
          <br />
          <Notes>
            <ul>
              <li>
                Flickr was the OG social site that evolved into a photo sharing
                app
              </li>
              <li>their API got them acquired</li>
              <li>8/15/06 FB launches their development platform</li>
              <li>9/20/06 Twitter launches their public API</li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="blue">
          <Heading size={3} textColor="white">
            <i>APIs need to...</i>
          </Heading>
          <br />
          <br />
          <Appear>
            <Heading textColor="white" size={4}>
              ✅ be scalable
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="white" size={4}>
              ✅ deliver meaninful services
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="blue">
          <Code textColor="white">July 2005</Code>
          <Heading size={3} textColor="white">
            ProgrammableWeb
          </Heading>
          <br />
          <Appear>
            <Image src={images.Programmable} />
          </Appear>
          <Notes>
            <ul>
              <li>John Musser</li>
              <li>wanted to build a "reference" for the modern web</li>
              <li>summated REST as best practice</li>
              <li>
                compiled a list of every public API available on the internet
              </li>
              <li>screenshot is from 2005</li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="blue">
          <Appear>
            <Heading size={3} textColor="white">
              <span style={{ color: "orange" }}>Re</span>presentational
            </Heading>
          </Appear>
          <br />
          <Appear>
            <Heading size={3} textColor="white">
              <span style={{ color: "orange" }}>S</span>tate
            </Heading>
          </Appear>
          <br />
          <Appear>
            <Heading size={3} textColor="white">
              <span style={{ color: "orange" }}>T</span>ransfer
            </Heading>
          </Appear>
          <Notes>
            <ul>
              <li>
                using constructs that are familiar to anyone who is accustomed
                to using the internet's HTTP
              </li>
              <li>standard HTTP status codes</li>
              <li>language agnostic</li>
              <li>
                security can still be mixed in: Secure Sockets Layer (SSL)
                encryption and Transport Layer Security (TLS)
              </li>
              <li>
                cons: they must be stateless, state is managed by the client ***
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="blue">
          <Appear>
            <Heading size={3} textColor="white">
              <span style={{ color: "orange" }}>S</span>ingle
            </Heading>
          </Appear>
          <br />
          <Appear>
            <Heading size={3} textColor="white">
              <span style={{ color: "orange" }}>O</span>bject
            </Heading>
          </Appear>
          <br />
          <Appear>
            <Heading size={3} textColor="white">
              <span style={{ color: "orange" }}>A</span>ccess
            </Heading>
          </Appear>
          <br />
          <Appear>
            <Heading size={3} textColor="white">
              <span style={{ color: "orange" }}>P</span>rotocol
            </Heading>
          </Appear>
          <Notes>
            <ul>
              <li>
                using constructs that are familiar to anyone who is accustomed
                to using the internet's HTTP
              </li>
              <li>standard HTTP status codes</li>
              <li>language agnostic</li>
              <li>
                security can still be mixed in: Secure Sockets Layer (SSL)
                encryption and Transport Layer Security (TLS)
              </li>
              <li>
                cons: they must be stateless, state is managed by the client ***
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="blue">
          <Heading size={3} textColor="white">
            🚀 <i>And Beyond!</i>
          </Heading>
          <br />
          <List textAlign="center" textColor="white">
            <Appear>
              <ListItem>Amazon s3</ListItem>
            </Appear>
            <Appear>
              <ListItem>Google Maps</ListItem>
            </Appear>
            <Appear>
              <ListItem>Foursquare</ListItem>
            </Appear>
            <Appear>
              <ListItem>Twilio</ListItem>
            </Appear>
          </List>
          <Notes>
            <ul>
              <li>John Musser</li>
              <li>wanted to build a "reference" for the modern web</li>
              <li>summated REST as best practice</li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="pink">
          <Heading>
            Now: <i>GraphQL</i>
          </Heading>
          <br />
          <br />
          <Image src={images.GraphQL} width="250px" />
        </Slide>

        <Slide bgColor="pink">
          <Image src={images.SampleServer} />
          <Notes>
            A GraphQL query is a string that is sent to a server to be
            interpreted and fulfilled, which then returns JSON back to the
            client.
          </Notes>
        </Slide>

        <Slide bgColor="pink">
          <Heading textColor="white" size={3}>
            Important Pros
          </Heading>
          <br />
          <List>
            <Appear>
              <ListItem size={4} textColor="white">
                The client specifies exactly what it needs
              </ListItem>
            </Appear>
            <br />
            <Appear>
              <ListItem size={4} textColor="white">
                Easier to aggregate data from variable sources
              </ListItem>
            </Appear>
            <br />
            <Appear>
              <ListItem size={4} textColor="white">
                Types define your data ⭐
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="purple">
          <Image src={images.Spiderman} />
          <br />
          <Cite>@emmabrillhart</Cite>
        </Slide>

        <Slide bgColor="pink">
          <Heading textColor="white" size={3}>
            Remember <span style={{ color: "#ff96dc" }}>REST</span> vs{" "}
            <span style={{ color: "#ff96dc" }}>SOAP</span>?
          </Heading>
          <Notes>GraphQL handles this differently, using...</Notes>
        </Slide>

        <Slide bgColor="pink">
          <Heading>
            Say hello to <span style={{ color: "#ff96dc" }}>resolvers</span>
          </Heading>
          <Notes>
            <ul>
              <li>
                each field in a GraphQL query as a function or method of the
                previous type which returns the next type
              </li>
              <li>obj - the previous object</li>
              <li>args - arguments provided to the query</li>
              <li>context - a value provided to every resolver</li>
              <li>
                info - a value that holds field-specific info relevant to the
                current query
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="blue">
          <Heading size={3} textColor="white">
            Getting Started with GraphQL
          </Heading>
          <br />
          <Code textColor="white">github.com/kale-stew/sample-server</Code>
          <br />
          <br />
          <Code textColor="white">github.com/kale-stew/talks</Code>
        </Slide>

        <Slide bgColor="purple">
          <Heading textColor="white">
            <i>Thank you!</i>
          </Heading>
          <br />
          <br />
          <Heading size={5} textColor="white">
            @kyliestew on Twitter
          </Heading>
          <Heading size={5} textColor="white">
            @kale-stew on Github
          </Heading>
          <br />
          <Image src={images.FormidaLogo} height="80px" />
        </Slide>
      </Deck>
    );
  }
}
