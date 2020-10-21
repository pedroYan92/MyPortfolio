import React from 'react'
import './works.css'

function Works() {
    return (
        <div className="works__section">

            <h2 className="title__projects">PROJECTS</h2>

            <div className="cards__container">   
                <div className="card__project">
                    <a href="/">
                        <img src="" alt="" className="img__card" width="250px" height="150px"/>
                        <h3 className="card__title"> TITLE OF THE PROJECT</h3>
                        <p className="card__description"> Simple description of the project</p>
                    </a>    
                    <div className="buttons__card__position">
                        <a href="/">See more</a>
                        <a href="/">Source code</a></div>                
                </div>
                <div className="card__project">
                    <a href="/">
                        <img src="" alt="" className="img__card" width="250px" height="150px"/>
                        <h3 className="card__title"> TITLE OF THE PROJECT</h3>
                        <p className="card__description"> Simple description of the project</p>
                    </a>
                    <div className="buttons__card__position">
                        <a href="/">See more</a>
                        <a href="/">Source code</a></div>                
                </div>
                <div className="card__project">
                    <a href="/">
                        <img src="" alt="" className="img__card" width="250px" height="150px"/>
                        <h3 className="card__title"> TITLE OF THE PROJECT</h3>
                        <p className="card__description"> Simple description of the project</p>
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
