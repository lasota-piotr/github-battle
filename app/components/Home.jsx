import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main>
    <div
      className="c-hero
                 o-flex o-flex--column o-flex--align-items-center o-flex--justify-content-center"
    >
      <div className="o-flex o-flex--column o-flex--align-items-center">
        <h1 className="c-title u-margin-bottom">Github Battle: Battle your friends... and
          stuff
        </h1>
        <Link to="/battle">
          <button className="c-button c-button--large">Battle</button>
        </Link>
      </div>
    </div>
  </main>
);

export default Home;
