import React from 'react';
import {MenuItems} from './MenuItems';
import './nav.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function Nav() {

  const [state, setState] = useState(false);
  const showMenu = () => setState (!state)

  return (
    <nav className='navBarItems'>
      
      <a href='/' className='navbar-logo'>
        Portfolio
      </a>

      <div className="menu-icon" onClick={showMenu}>
        {state ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>

      <ul className={state ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
              {item.title}
              </a>
            </li>
          )
        })}        
      </ul>

    </nav>
  );
}

export default Nav;
