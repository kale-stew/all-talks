import React from 'react';
import { render } from 'react-dom';

import { Deck, FlexBox, Markdown, FullScreen, Progress, Box } from 'spectacle';

import mdContent from './slides.md';

const theme = {};

const template = () => (
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
  <Deck loop theme={theme} template={template}>
    <Markdown containsSlides>{mdContent}</Markdown>
  </Deck>
);

render(<Presentation />, document.getElementById('root'));
