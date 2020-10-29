import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (<>
        <h2 className="contact__title">CONTACT</h2>
        <div className="contact__section" id='contact__section'>
            
        
                <div className="contact__info">                
                    <p>contact@pedroyan.com</p>
                    <p>55+(11) 97377-7604</p>
                    <h4>connect with me:</h4>
                    <div className='social__media-contact'>        
                    <a href="https://github.com/pedroYan92"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/pedro-yanez-72591b1ba/"><FontAwesomeIcon icon={faLinkedin}  /></a>
                    <a href="https://twitter.com/YanFrontEnd"><FontAwesomeIcon icon={faTwitter}  /></a>
                    <a href="https://www.instagram.com/yanfrontend/"><FontAwesomeIcon icon={faInstagram}  /></a>
                    <a href="https://www.facebook.com/pedro.yan.921677"><FontAwesomeIcon icon={faFacebook}  /></a>
                    <a href="https://www.youtube.com/channel/UCWGWVabQ7miSVjW75cPxcdQ/featured"><FontAwesomeIcon icon={faYoutube}  /></a>        
                    </div>   
                </div>

                <div className="contact__form">
                    <form name="contact" method="POST">
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" name="name" placeholder="YOUR NAME"/>
                        <input type="email" name="email" placeholder="EMAIL"/>
                        <textarea type="message" name="message" id="" cols="30" rows="10" placeholder="MESSAGE"></textarea>
                        <button type="submit">SEND</button>
                    </form>
                </div>
            
        </div>
   </> )
}

export default Contact
