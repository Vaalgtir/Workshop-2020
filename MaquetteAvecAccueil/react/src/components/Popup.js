import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

import './Popup.css'

export default function Popup() {
    const [userMail, setUserMail] = useState("")
    const [pwd, setPwd] = useState("")
    // const [warningFeedback, setWarning] = useState()

    return (
        <div>
        <div id="connexion" className="containerPopup">
            <i className="fas fa-times"></i>
            <div className="wrapperPopup">
                <div className="disclaimer">Connexion !</div>
                <form 
                className="wrapperInput"
                >
                    {/* <span className="warningMessage">{warningFeedback}</span> */}

                    <div className="wrapperLabelContent">
                    <input 
                        type="text" 
                        name="loginMail" 
                        id="loginMail"
                        value={userMail}
                        onChange={event => setUserMail(event.target.value)}
                    />
                    <label htmlFor="loginMail">
                        <span>
                            E-mail
                        </span>
                    </label>
                    
                    </div>
                    <div className="wrapperLabelContent">
                        <input 
                            type="password" 
                            name="loginPassword" 
                            id="loginPassword"
                            value={pwd}
                            onChange={event => setPwd(event.target.value)}
                        />
                        <label htmlFor="loginPassword">
                            <span>
                                Password
                            </span>
                        </label>
                        
                    </div>
                    
                </form>
                <div className= "wrapperButton">
                    <div 
                        id="inscriptionButton" 
                        className="submitButton"
                    >Inscription</div>
                    <div 
                        id="loginSubmit" 
                        className="submitButton"
                    >Connexion</div>
                </div>
            </div>
        </div>

        <div id="inscription" className="containerPopup">
            <i className="fas fa-times"></i>
            <div className="wrapperPopup">
                <div className="disclaimer">Inscription !</div>
                <form className="wrapperInput">
                    <div className="wrapperLabelContent">
                        <input type="text" name="prenom" id="prenom"/>
                        <label htmlFor="prenom">
                            <span>
                                Prénom
                            </span>
                        </label>
                        
                    </div>
                    <div className="wrapperLabelContent">
                        <input type="text" name="nom" id="nom"/>
                        <label htmlFor="nom">
                            <span>
                                Nom
                            </span>
                        </label>
                        
                    </div>
                    
                    <div className="wrapperLabelContent">
                        <input type="text" name="mail" id="mail"/>
                        <label htmlFor="mail">
                            <span>
                                E-mail
                            </span>
                        </label>
                        
                    </div>
                    <div className="wrapperLabelContent">
                        <input type="password" name="password" id="password"/>
                        <label htmlFor="password">
                            <span>
                                Password
                            </span>
                        </label>
                        
                    </div>
                    <div className="wrapperLabelContent">
                        <input type="password" name="confirmPassword" id="confirmPassword"/>
                        <label htmlFor="confirmPassword">
                            <span>
                                Confirm password
                            </span>
                        </label>
                        
                    </div>
                </form>
                <div className="wrapperButton">
                    <div id="inscriptionSubmit" className="submitButton">Inscription</div>
                </div>
            </div>
        </div>

        </div>
    )
}