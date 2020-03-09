import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/footer';
import * as Talks from './talks.json';
import './index.css';
import Card from './components/card';

// TODO - regex to pull the year from eventDate
// const checkYear = (date) => date;

// Talks.map(t => checkYear(t.eventDate)) === '2020' ? t : null){}

const App = () => (
  <Fragment style={{ height: '100%' }}>
    <body>
      <header />
      <div className="content">
        <h1>Kylie's Talks</h1>
        <h4>All of my talks, slides, and presentations, in one place.</h4>

        <h2>2020</h2>
        <Card talk={Talks[0]} />

        <h2>2019</h2>
        <div>{}</div>

        <h2>2018</h2>
        <div>{}</div>
      </div>
      <Footer />
    </body>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
