import React, { useEffect } from 'react'
// import axios from 'axios'
import { useHistory } from 'react-router-dom'

import './UserPage.css'

import pic1 from './../img/friends_pdp/téléchargement.jpg';
import pic2 from './../img/friends_pdp/téléchargement(1).jpg';
import pic3 from './../img/friends_pdp/images(2).jpg';
import pic4 from './../img/friends_pdp/images.jpg';
import pic5 from './../img/friends_pdp/images(1).jpg';
import pic6 from './../img/friends_pdp/images(3).jpg';

export default function UserPage() {
    const history = useHistory();


    // useEffect(() => {
    //     onLoad()
    //     // eslint-disable-next-line
    // }, [])

    // function onLoad() {
    //     const api = 'http://localhost/Backend_Workshop/data.php'

    //     axios.post(api,{
    //         action: "allData"
    //     })
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    function handleTracking() {
        history.push('/tracking')
        window.location.reload(false);
    }

    return (

        <section className="wrapperUserPage">
            <div className="col__friend">
                <h3>Vos Amis<i className="fas fa-user-friends"></i></h3>
                <div className="friend__list">
                    <ul>
                        <li> <img src={pic1}/>Fred</li>
                        <li> <img src={pic2}/> Alphonse</li>
                        <li> <img src={pic3}/>Laure</li>
                        <li><img src={pic4}/>Nathan</li>
                        <li><img src={pic5}/>Tanguy</li>
                        <li><img src={pic6}/>Faustine</li>
                    </ul>
                </div>
            </div>
        
            <div id="infoPerso">
                <h3>Du 26 Octobre 2020 au 02 Novembre 2020</h3>
                <div className="col__stat">
                
                    <div className="trajet trajet__motor bg-secondary">
                        <h4>Empreinte Carbonne</h4>
                        <span>12kg </span>
                    </div>
                    <div className="trajet trajet__doux bg-secondary">
                        <h4>Score Carbone</h4>
                        <span>23</span>
                    </div>
                    <div className="mesure mesure__scoreC bg-danger">
                        <h4>Vos Trajets Motorisés</h4>
                        <span>112kg</span>
                    </div>
                    <div className="mesure mesure__empreinteC bg-success">
                        
                        <h4>Vos Trajets Doux</h4>
                        <span>12</span>
                    </div>


                </div>
                <div className="wrapperTestBtn">
                    <div className="testButton">
                        Lancez-vous des défis !
                    </div>
                    <div 
                    className="testButton"
                    // onClick={handleTracking}
                    >
                        Commencez une course !
                    </div>
                </div>
            </div>    
        </section>
    )
}