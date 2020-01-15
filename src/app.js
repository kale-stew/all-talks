import React, { Fragment } from 'react';
import Footer from './components/footer';
import './index.css';

export default function App() {
  return (
    <Fragment style={{ height: '100%' }}>
      <body>
        <header />
        <div className="content">
          <h1>Talks!</h1>
        </div>
        <Footer />
      </body>
    </Fragment>
  );
}
