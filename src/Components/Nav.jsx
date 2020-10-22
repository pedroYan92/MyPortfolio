import React from 'react';
import {MenuItems} from './MenuItems';
import './nav.css';
import { useState } from 'react';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function Nav() {

  const [state, setState] = useState(false);
  const showMenu = () => setState (!state)

  return (
    <nav className='navBarItems'>
      
      <div className='navbar-logo' onClick={() => scroll.scrollToTop()}>
        Portfolio
      </div>

      <div className="menu-icon" onClick={showMenu}>
        {state ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>

      <ul className={state ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url} smooth={true} duration={1000}>
              {item.title}
              </Link>
            </li>
          )
        })}        
      </ul>

    </nav>
  );
}

export default Nav;
