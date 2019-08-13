import React, { Component } from "react";

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
  Text
} from "spectacle";

// theme
import createTheme from "spectacle/lib/themes/default";
const theme = createTheme(
  {
    aqua: "#3A9BB9",
    black: "#111111",
    darkRed: "#7D1513",
    medRed: "#CC2936",
    navy: "#08415C",
    offwhite: "#EFEFEF",
    primary: "#EFEFEF"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

// image assets
const images = {
  FormidaLogo: require("./assets/formidableWhite.png")
};

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={["fade"]} theme={theme}>
        {/** ABOUT ME */}
        <Slide bgColor="darkRed">
          <Text textColor="offwhite" fit={true}>
            Hi! I'm Kylie
          </Text>
          <Image src={images.FormidaLogo} height="300px" />
          <Appear>
            <Heading size={5} textColor="offwhite">
              <i>We're hiring!</i>
            </Heading>
          </Appear>
          <Notes>
            {
              "Formidable is a Seattle and London-based engineering consultancy and open source software organization specializing in React.js, React Native, GraphQL, Node.js, and the extended JavaScript ecosystem."
            }
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
