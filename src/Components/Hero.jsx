import React from 'react';
import './hero.css';
import imgScroll from './img/scrollMouseIcon.png';
import pedroYanImg from './img/Outline-pedroYan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



function Hero() {
  return (
    <>      
      <div className="hero__outline__frame">
        <div className='hero__section'>

          <div className="hero__img">
            <img src={pedroYanImg} alt="pedroYan"/>
          </div>

          <div className="hero__content">
            <h2>my name is</h2>
            <h1>PedroYan</h1>
            <h3>I'm a brazillian front end developer</h3>
            <h4>Find me on:</h4>
            <div className='social__media'>        
              <a href="https://github.com/pedroYan92"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/pedro-yanez-72591b1ba/"><FontAwesomeIcon icon={faLinkedin}  /></a>
              <a href="https://twitter.com/YanFrontEnd"><FontAwesomeIcon icon={faTwitter}  /></a>
              <a href="https://www.instagram.com/yanfrontend/"><FontAwesomeIcon icon={faInstagram}  /></a>
              <a href="https://www.facebook.com/pedro.yan.921677"><FontAwesomeIcon icon={faFacebook}  /></a>
              <a href="https://www.youtube.com/channel/UCWGWVabQ7miSVjW75cPxcdQ/featured"><FontAwesomeIcon icon={faYoutube}  /></a>        
            </div> 
            <div className='scrolldown__img' >
              <p>scroll down</p>
              <img src={imgScroll}  alt="img-mouse-scroll"/> 
            </div>     
         </div> 

        </div>    
      </div>
    </>
  );
}

export default Hero;
