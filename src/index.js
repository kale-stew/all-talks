import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Card from './components/card';
import Footer from './components/footer';
import ALL_TALKS from './talks';
import './index.css';

import {
  orderByDateAsc,
  orderByDateDesc,
  orderByTitleAsc,
  orderByTitleDesc
} from './filters';

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

  @media (max-width: 1024px) {
    grid-template-columns: auto;
    margin-bottom: 2.9rem;
  }
`;

const HeaderTitle = styled('h3')`
  line-height: 18px;
  font-weight: 700;
  padding-right: 55px;

  @media (max-width: 1024px) {
    padding-right: 15px;
  }
`;

const FILTERS = [
  { name: 'Sort by Date (Newest First)', function: orderByDateAsc },
  { name: 'Sort by Date (Oldest First)', function: orderByDateDesc },
  { name: 'Sort by Title (A → Z)', function: orderByTitleAsc },
  { name: 'Sort by Title (Z → A)', function: orderByTitleDesc }
];

const App = () => {
  const [, setFilter] = useState('');
  const [filteredTalks, setTalks] = useState(ALL_TALKS);

  const handleSelect = event => {
    const chosenFilter = FILTERS.find(
      filter => filter.name === event.target.value
    );
    setFilter(chosenFilter);
    chosenFilter
      ? setTalks(chosenFilter.function(ALL_TALKS))
      : setTalks(ALL_TALKS);
  };

  return (
    <>
      <header>
        <a className="header-link" href="https://kylieis.online">
          ← head home
        </a>
        <HeaderTitle>Kylie Stewart</HeaderTitle>
      </header>
      <ContentWrapper>
        <h1>Presentations</h1>
        <h4>All of my talks, slides, and abstracts, in one place.</h4>
        <select name="filter" id="filter-select" onChange={handleSelect}>
          <option value="" default>
            Sort by...
          </option>
          {FILTERS.map(filter => {
            return (
              <option
                value={filter.name}
                key={filter.name}
                onChange={() => setFilter(filter.function)}
              >
                {filter.name}
              </option>
            );
          })}
        </select>
        <CardContainer>
          {filteredTalks.map(t => (
            <Card talk={t} key={t.eventDate} />
          ))}
        </CardContainer>
      </ContentWrapper>
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
