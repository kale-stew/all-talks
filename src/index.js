import React from 'react';
import ReactDOM from 'react-dom';

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

const App = () => (
  <>
    <header />
    <div className="content">
      <h1>Presentations</h1>
      <h4>All of my talks, slides, and abstracts; in one place.</h4>
      {talks.map(t => (
        <Card talk={t} key={t.eventDate} />
      ))}
    </div>
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
