import React from 'react'
import './works.css'

function Works() {
    return (
        <div className="works__section" id="works__section">

            <h2 className="title__projects">PROJECTS</h2>

            <div className="cards__container">   
                <div className="card__project">
                    <a href="/">
                        <img src="" alt="" className="img__card" width="250px" height="150px"/>
                        <h3 className="card__title"> Website</h3>
                        <p className="card__description"> A simple website with cool animations</p>
                    </a>    
                    <div className="buttons__card__position">
                        <a href="/">See more</a>
                        <a href="/">Source code</a></div>                
                </div>
                <div className="card__project">
                    <a href="/">
                        <img src="" alt="" className="img__card" width="250px" height="150px"/>
                        <h3 className="card__title"> API Google books project</h3>
                        <p className="card__description"> An App where you can search Google books</p>
                    </a>
                    <div className="buttons__card__position">
                        <a href="/">See more</a>
                        <a href="/">Source code</a></div>                
                </div>
                <div className="card__project">
                    <a href="/">
                        <img src="" alt="" className="img__card" width="250px" height="150px"/>
                        <h3 className="card__title"> Instant Product Register App</h3>
                        <p className="card__description"> A simple App to include fake items in the page</p>
                    </a>
                    <div className="buttons__card__position">
                        <a href="/">See more</a>
                        <a href="/">Source code</a></div>                
                </div>
            </div>
              
            
        </div>
    )
}

export default Works
