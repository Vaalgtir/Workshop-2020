import React, { useEffect } from 'react'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'

import './Tracking.css'

export default function Tracking() {

    return (
        <div >
            <h3 class="text-success"> Session Tracking</h3>
            
            <div class="wrapperForm">
                <h4>Moyen de Locomotion</h4>
                <div class="card" id="locomotion">
        
                    <button type="button" class="btn btn-warning">Bus</button>
                    <button type="button" class="btn btn-warning">Voiture</button>
                    <button type="button" class="btn btn-warning">Moto</button>
                    <button type="button" class="btn btn-warning">Scooter</button>
        
                </div>
                <div class="blackBar"></div>
                <h4>Type de Carburant</h4>
                <div class="card" id= "carburant">
                    
                    <div class="card-body">
                        <button type="button" class="btn btn-warning">diesel</button>
                        <button type="button" class="btn btn-warning">essence</button>
                        <button type="button" class="btn btn-warning">lpg</button>
                        <button type="button" class="btn btn-warning">ethanol</button>
                    </div>
                    
                </div>
                <div class="blackBar"></div>
                <h4>Type de Trajets</h4>
                <div class="card" id= "type_trajet">
                    <button type="button" class="btn btn-warning">ville</button>
                    <button type="button" class="btn btn-warning">campagne</button>
                    <button type="button" class="btn btn-warning">autoroute</button>
                </div>
            </div>
            <div class="blackBar"></div>
            <div class="card" id="action">
                <button type="button" class="btn" id="start">Start</button>
                <button type="button" class="btn" id="pause">Pause</button>
                <button type="button" class="btn" id="reset">Reset</button>
                <div class="wrapperOptionTimer">
                    <button type="button" class="btn" id="returnToSettings">Revenir aux options</button>
                    <button type="button" class="btn" id="returnToHome">Arrêter la course</button>
                </div>
            </div>
            
            <div class="wrapperMap">
                <div class="container">
                    
                    <div id="map-e">
                        
                    </div>
                </div>
                <br/>
                <p class="p" id="p">Distance: 0km</p>
                <div class="tim">
                    <p>Durée: </p>
                    <span >0 h</span> :
                    <span >0 min</span> :
                    <span >0 s</span> :
                    <span >0 ms</span>
                    
                </div>
                <br/>
                <p class="p">Empreinte carbone : </p>
            </div>
        
        </div>
    )
}