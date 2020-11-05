import React from 'react'
// import { useHistory } from 'react-router-dom'

import './Help.css'
    
import pic1 from './../img/1re_connexion/ios1.webp';
import pic2 from './../img/1re_connexion/ios2.webp';
import pic3 from './../img/1re_connexion/ios3.webp';
import pic4 from './../img/1re_connexion/ios4.webp';

import pic_android1 from './../img/1re_connexion/accès_chrome.webp';
import pic_android2 from './../img/1re_connexion/raw1.webp';
import pic_android3 from './../img/1re_connexion/raw2.webp';
import pic_android4 from './../img/1re_connexion/raw3.webp';
import pic_android5 from './../img/1re_connexion/raw4.webp';

export default function Help() {

    return (
        <section className="wrapperHelp">
            <div className="title">
                <h1>Facilitez vous la vie !</h1>
                <div className="chevron">
                    <i className="fas fa-3x fa-chevron-down"></i>
                </div>
            </div>
            <div className="wrapperContent">
                <div className="line">
                    <div className="content__line1">
                        <h2>Sur IOS</h2>
                        <p>
                            Pour les versions IOS, il vous suffit d'ouvir le navigateur Safari sur votre iPhone ou iPad. Tapez dans la barre d'adresse, l'URL de notre site puis cliquez sur l'icône Partager (carré avec une flèche pointant vers le haut),
                            une suite d'onglets s'affichent. 
                        </p>
                        <p>
                            <img src={pic1} alt="ios 1" className="center"/>
                        </p>
                        <p>
                            Appuyez sur l'onglet "Sur l'écran d'accueil" puis donnez un nom à votre raccourci
                        </p>
                        <p>
                            <img src={pic2} alt="ios 2"/>
                        </p>
                        <p>
                            Appuyez sur le bouton "Ajouter" placé dans le coin supérieur droit de l’écran pour enregistrer vos modifications
                        </p>
                        <p>
                            <img src={pic3} alt="ios 3"/>
                        </p>
                        <p>
                            L’icône se placera automatiquement sur l’écran d’accueil de votre téléphone ou de votre tablette. 
                        </p>
                        <p>
                            <img src={pic4} alt="ios 4"/>
                        </p>
                    </div>
                </div>

                

                <div className="line">
                    <div className="content__line2">
                        <h2>Sur Android</h2>
                        <p>
                            Concernant les versions Android, le processus est similaire et tout aussi simple.
                        </p>
                        <p>
                            Ouvrez l'application Google Chrome, puis rendez-vous sur notre site afin de créer un raccourci.
                        </p>
                            <img alt="Tutoriel" src={pic_android1}/>
                        <p> 
                            Appuyez sur les trois petits points du menu en haut à droite et sélectionnez "Ajouter à l'écran d'accueil". Enfin, nommez la page et appuyez sur "Ajouter".
                        </p>
                        <p>
                            <img alt="Tutoriel" src={pic_android2}/>
                        </p>
                        <p>
                            <img alt="Tutoriel" src={pic_android3}/>
                        </p>
                        <p>
                            <img alt="Tutoriel" src={pic_android4}/>
                        </p>
                        <p>
                            Un raccourci vers la page web est apparu sur l'écran d'accueil de votre smartphone, une simple pression sur l'icône vous y renvoie directement.
                        </p>
                            <img alt="Tutoriel" src={pic_android5}/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}