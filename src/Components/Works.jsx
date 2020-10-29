import React from 'react'
import './works.css'
import website from './img/website.png';
import searchBooks from './img/searchBooks.png';
import instant from './img/ProductRegisterApp.png';

function Works() {
    return (
        <div className="works__section" id="works__section">

            <h2 className="title__projects">PROJECTS</h2>

            <div className="cards__container">   
                <div className="card__project">
                    <a href="https://arcotec-site.netlify.app/">
                        <img src={website} alt="" className="img__card" width="250px" height="150px"/>
                        <h3 className="card__title"> Website</h3>
                        <p className="card__description"> A simple website with cool animations</p>
                    </a>    
                    <div className="buttons__card__position">
                        <a href="https://arcotec-site.netlify.app/">See more</a>
                        <a href="https://github.com/pedroYan92/pedroYan92.github.io">Source code</a></div>                
                </div>
                <div className="card__project">
                    <a href="https://searchbooksgoogle.netlify.app/">
                        <img src={searchBooks} alt="" className="img__card" width="250px" height="150px"/>
                        <h3 className="card__title"> API Google books project</h3>
                        <p className="card__description"> An App where you can search Google books</p>
                    </a>
                    <div className="buttons__card__position">
                        <a href="https://searchbooksgoogle.netlify.app/">See more</a>
                        <a href="https://github.com/pedroYan92/Search-Book-project">Source code</a></div>                
                </div>
                <div className="card__project">
                    <a href="https://productregister-app.netlify.app/">
                        <img src={instant} alt="" className="img__card" width="250px" height="150px"/>
                        <h3 className="card__title"> Instant Product Register App</h3>
                        <p className="card__description"> A simple App to include fake items in the page</p>
                    </a>
                    <div className="buttons__card__position">
                        <a href="https://productregister-app.netlify.app/">See more</a>
                        <a href="https://github.com/pedroYan92/register-items-project">Source code</a></div>                
                </div>
            </div>
              
            
        </div>
    )
}

export default Works
