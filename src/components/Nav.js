import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../App.css';

function Nav() {
  return (
    <nav className="header">
      <div className="wrapper">
        <div className="headerbox">
          <ul className="menubar">
            <li className="menubar__item">
              <NavLink exact to="/" activeClassName="active">Main</NavLink>
            </li>

            <li className="menubar__item">
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;