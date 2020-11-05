import React from 'react'
// import { useHistory } from 'react-router-dom'

import './BannerHome.css'

export default function BannerHome() {

    return (
        <section className="banner">
            <div className="wrapperTestLink">
                <div className="testLogiciel">
                    <p>
                        Essayer gratuitement notre logiciel
                    </p>
                </div>
                <div className="testLogiciel__button">
                    <div className="testButton">Faire le test</div>
                </div>
            </div>
        </section>
    )
}