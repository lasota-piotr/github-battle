import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Battle',
      url: '/battle',
    },
    {
      name: 'Popular',
      url: '/popular',
    },
  ];
  return (
    <nav className="c-nav">
      <ul className="o-list-bare o-flex">
        {
          links.map(link => (
            <li>
              <NavLink to={link.url} exact activeClassName="is-active" className="c-nav__link">
                {link.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Nav;
