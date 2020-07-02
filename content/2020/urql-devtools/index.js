import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @TODO
 * - [ ] Beef up intro slide
 * - [ ] Add an outro slide with links
 * - [ ] Add introductory urql slides
 * - [ ] Direct link to demo
 * - [ ] Host these
 */

import mdContent from './slides.md';

import {
  Box,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  Markdown,
  Progress,
  Slide
} from 'spectacle';

const theme = {
  fonts: {
    header: 'Fira Sans, sans-serif',
    text: 'Fira Sans, sans-serif'
  },
  colors: {
    primary: '#fff',
    secondary: '#8096ff',
    tertiary: '#343434',
    quartenary: '#fff'
  }
};

const template = props => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck
    theme={theme}
    template={template}
    transitionEffect="fade"
    style={{ textAlign: 'center' }}
  >
    <Slide>
      <Heading color="primary">Demystifying urql Using DevTools</Heading>
      <br />
      <br />
      <Image
        src="https://raw.githubusercontent.com/FormidableLabs/formidable-oss-badges/master/src/assets/featuredLogos/urql.svg"
        width="350px"
        style={{
          alignSelf: 'center'
        }}
      />
    </Slide>
    <Markdown containsSlides>{mdContent}</Markdown>
    <Slide>
      <br />
      <br />
      <Heading color="primary">Demo Time</Heading>
      <br />
      <Image
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/female-technologist_1f469-200d-1f4bb.png"
        height="125px"
        style={{
          alignSelf: 'center',
          marginTop: '25px'
        }}
      />
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
