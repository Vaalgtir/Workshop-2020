import React from 'react'
import { useHistory } from 'react-router-dom'

import './Nav.css'

import logo from './../img/logo.png';

export default function Nav({ page }) {
    const history = useHistory();

    function handleClickLogout() {
        history.push("/")
        window.location.reload(false);
    }
    function handleClickHelp() {
        history.push("/help")
        window.location.reload(false);
    }
    function handleClickHome() {
        history.push("/user")
        window.location.reload(false);
    }

    return (
        <div>
        {page === 'user' ? 
                <nav className="navbar">
                    <img 
                    src={logo} 
                    alt="logo"
                    onClick={handleClickLogout}
                    />
                    <h1>CarbLife</h1>
                    <div className="wrapperIcon">
                        <i 
                        className="fas fa-2x fa-flag button__help"
                        onClick={handleClickHelp}
                        ></i>
                        <i 
                        className="fas fa-3x fa-power-off button__logout"
                        onClick={handleClickLogout}
                        ></i>
                    </div>
                </nav>
            : page === 'home' ? 
                <nav className="navbar">
                    <img src={logo} alt="logo"/>
                    <h1>CarbLife</h1>
                    <div className="wrapperLink">
                        <span>
                            <div className="testButton">Inscris-toi</div>
                        </span>
                    </div>
                </nav>
            : page === 'help' ? 
            <nav className="navbar">
                <img 
                src={logo} 
                alt="logo"
                onClick={handleClickLogout}
                />
                <h1>CarbLife</h1>
                <div className="wrapperIcon">
                    <i 
                        className="fas fa-2x fa-home button__help"
                        onClick={handleClickHome}
                    ></i>
                    <i 
                    className="fas fa-3x fa-power-off button__logout"
                    onClick={handleClickLogout}
                    ></i>
                </div>
            </nav>
            : page === 'tracking' ? 
            <nav className="navbar">
                <img 
                src={logo} 
                alt="logo"
                onClick={handleClickLogout}
                />
                <h1>CarbLife</h1>
                <div className="wrapperIcon">
                    <i 
                        className="fas fa-2x fa-home button__help"
                        onClick={handleClickHome}
                    ></i>
                    <i 
                    className="fas fa-3x fa-power-off button__logout"
                    onClick={handleClickLogout}
                    ></i>
                </div>
            </nav>
            : null
            }
        </div>
    )
}