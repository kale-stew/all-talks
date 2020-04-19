import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Card from './components/card';
import Footer from './components/footer';
import talks from './talks.json';
import './index.css';

/**
 * Strategy
 * ========
 * - Allow for a variety of sorts
 *    - [ ] Title, A → Z
 *    - [ ] Title, Z → A
 *    - [ ] Date, newest first
 *    - [ ] Date, oldest first
 * - [ ] Search bar by Title, Date, or Topic
 * - [ ] Modal onClick
 *    - [ ] Cover
 *    - [ ] Icon
 *    - [ ] Title
 *    - [ ] Short description
 *    - [ ] Long description
 *    - [ ] YouTube link
 *    - [ ] Live slide link
 *    - [ ] Further reading - [{ text, href }]
 */

const ContentWrapper = styled('div')`
  height: 100%;
  padding: 0.6rem 1.5rem;
`;

const CardContainer = styled('div')`
  margin-top: 2.9rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  grid-row-gap: 2.3rem;

  @media (max-width: 760px) {
    grid-template-columns: auto;
    margin-bottom: 2.9rem;
  }
`;

const App = () => (
  <>
    <header />
    <ContentWrapper>
      <h1>Presentations</h1>
      <h4>All of my talks, slides, and abstracts; in one place.</h4>
      <CardContainer>
        {talks.map(t => (
          <Card talk={t} key={t.eventDate} />
        ))}
      </CardContainer>
    </ContentWrapper>
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
