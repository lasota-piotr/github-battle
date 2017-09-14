import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="c-nav">
    <ul className="o-list-bare o-flex">
      <li>
        <NavLink to="/" exact activeClassName="is-active" className="c-nav__link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/battle" exact activeClassName="is-active" className="c-nav__link">
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink to="/popular" exact activeClassName="is-active" className="c-nav__link">
          Popular
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
