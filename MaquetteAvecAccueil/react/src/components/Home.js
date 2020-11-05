import React from 'react'
// import { useHistory } from 'react-router-dom'

import './Home.css'

import pic1 from './../img/index__content/generer_une_action_interet__retouche.jpg';
import pic2 from './../img/index__content/calendrier__retouche.jpg';
import pic3 from './../img/index__content/transferer_contact__retouche.jpg';

export default function Home() {

    return (
        <main>
            <section>
                <div className="title">
                    <h1>Une applications permettant de sauver la planète</h1>
                    <div className="chevron">
                        <i className="fas fa-3x fa-chevron-down"></i>
                    </div>
                </div>
                <div className="wrapperContent">
                    <div className="line">
                        <img src={pic1}
                            alt="Génération d'action - Exemple" className="img__line1"/>
                        <div className="content__line1">
                            <h2>Quelle est mon empreinte carbone ?</h2>
                            <p>
                                Il est possible d'estimer son empreinte carbone 
                                en analysant son comportement d'achat et ses habitudes de consommation.
                            </p>
                            <p>
                                Il sera facilement perceptible si un mode de vie est 
                                durable ou s'il faut changer certains comportements afin de réduire son empreinte. 
                            </p>
                            <p>
                                Les émissions liées à l'utilisation de ces objets, 
                                de la production jusqu'à leur élimination, ont été recensées par
                                 l'Agence de l'Environnement et de la Maîtrise de l'Énergie.
                            </p>
                        </div>
                    </div>
    
                    <div className="dropdownArticle">
                        Dans les grandes lignes, 
                        le logement représente 27 % des émissions de gaz à effet de
                         serre dans l'empreinte carbone des français au quotidien, 
                         suivi de près par le transport (25 %) et l'alimentation (19 %).
                    </div>
                    <p className="dropdownArticleButton"><span>Lire plus </span><i className="fas fa-chevron-down"></i></p>
    
                    <div className="line">
                        <div className="content__line2">
                            <h2>Empreinte carbone en France et dans le monde</h2>
                            <p>
                                On estime qu’en 2017, l'empreinte
                                 carbone moyenne d'un français était de 11,2 Teq CO2 par habitant.
                            </p>
                            <p>
                                Ce chiffre comprend donc les émissions directes
                                 (liées notamment à notre production) et les émissions indirectes liées à nos importations.
                            </p>
                        </div>
                        <img src={pic2} alt="Calendrier - Exemple"
                            className="img__line2"/>
                    </div>
    
                     <div className="dropdownArticle">
                        Tous les modes de vie n'ont pas le même impact environnemental.
                         Les pays occidentaux et en voie de développement sont majoritairement en tête de classement
                          des pays les plus grands pollueurs, du fait de leurs habitudes de consommations.
                    </div> 
                    <p className="dropdownArticleButton"><span>Lire plus </span><i className="fas fa-chevron-down"></i></p>
    
                    <div className="line">
                        <img src={pic3}
                            alt="Transfere de contact - Exemple" className="img__line3"/>
                        <div className="content__line3">
                            <h2>Comment réduire son empreinte carbone au quotidien ?</h2>
                            <p>
                                Adapter son régime alimentaire
                            </p>
                            <p>
                                Dans son logement au quotidien
                            </p>
                            <p>
                                Se déplacer au quotidien et pour voyager en limitant les émissions de carbonne
                            </p>
                        </div>
                    </div>
    
                     <div className="dropdownArticle">
                        Si l'on veut limiter le dérèglement climatique, il est essentiel d'agir au quotidien et autour de soi
                        . De nombreux leviers existent afin de réduire notre impact au quotidien. 
                        Certaines mesures peuvent être particulièrement avantageuses au niveau financier et écologique,
                         tandis que d'autres ne demandent que peu d'efforts supplémentaires.
                    </div> 
                    <p className="dropdownArticleButton"><span>Lire plus </span><i className="fas fa-chevron-down"></i></p>
                </div>
            </section>
        </main>
    )
}