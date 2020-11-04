/*la fonction getElementByTagName renvoie une liste des éléments portant le nom de balise donné ici "span".*/
var sp = document.querySelectorAll(".tim span");
var btn_start=document.getElementById("start");
var btn_stop=document.getElementById("stop");
var travelBtns = document.querySelectorAll("#locomotion .btn");
var t;
var ms=0,s=0,mn=0,h=0;
window.lat = 45.7596625;
window.lng = 4.8250668;
var travelmode = "a_pied";

for (var i = 0; i < travelBtns.length; i++) {
  travelBtns[i].onclick = function(element){
    travelmode = element.target.textContent;
  };
}
    
// VALEUR DE DEPART POUR TEST CAR PAS SUR TEL
//window.latStart et  window.lngStart = origine
//window.lat et window.lng =  actuel et fin
//SI user->actual_trajet_id != NULL:
//      origine = trajet.origine.split(',');
//      window.latStart = origine[0];
//      window.lngStart = origine[1]; 
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition (
        (position) =>{
            window.latStart = 45.7696625;   
            window.lngStart = 4.8250668;
            window.lat = position.coords.latitude;
            window.lng = position.coords.longitude;

        }
    );
}
setInterval (function () {updatePosition (getLocation ())}, 1000);
let map;
let mark;
initialize = function() {
    map  = new google.maps.Map(document.getElementById('map-e'), {center:{lat:lat,lng:lng},zoom:12});
    mark = new google.maps.Marker({position:{lat:lat, lng:lng}, map:map});
};
window.initialize = initialize;
let redraw = function(payload) {
    lat = payload.message.lat;
    lng = payload.message.lng;
    map.setCenter({lat:lat, lng:lng, alt:0});
    mark.setPosition({lat:lat, lng:lng, alt:0});
};
var pnChannel = "map-channel";
var pubnub = new PubNub({
    publishKey:   'pub-c-d3125050-83a8-401f-a1b6-41f711c586db',
    subscribeKey: 'sub-c-e6d3ec84-1d10-11eb-9f1e-baa67f46029c'
});
pubnub.subscribe({channels: [pnChannel]});
pubnub.addListener({message:redraw});

setInterval(function() {
    pubnub.publish({channel:pnChannel, message:{lat:window.lat, lng:window.lng}});
}, 1000);




/*La fonction "start" démarre un appel répétitive de la fonction update_chrono par une cadence de 100 milliseconde en utilisant setInterval et désactive le bouton "start" */
function start(){
    t =setInterval(update_chrono,100);
    btn_start.disabled=true;
    getLocation ();
    //AJOUTER REQUETE TRAJET START

}


/*La fonction update_chrono incrémente le nombre de millisecondes par 1 <==> 1*cadence = 100 */
function update_chrono(){
    ms+=1;
    /*si ms=10 <==> ms*cadence = 1000ms <==> 1s alors on incrémente le nombre de secondes*/
    if(ms==10){
        ms=1;
        s+=1;
    }
    /*on teste si s=60 pour incrémenter le nombre de minute*/
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;
    }
    /*afficher les nouvelle valeurs*/
    sp[0].innerHTML=h+" h";
    sp[1].innerHTML=mn+" min";
    sp[2].innerHTML=s+" s";
    sp[3].innerHTML=ms+" ms";

}

/*on arrête le "timer" par clearInterval ,on réactive le bouton start */
function stop(){
    clearInterval(t);
    btn_start.disabled=false;
    var distanceService = new google.maps.DistanceMatrixService();
    if (travelmode == "Bus" || travelmode == "Voiture" || travelmode == "Moto" || travelmode == "Scooter")
    {
        var tmpTravelMode = 'DRIVING';
    }
    else if (travelmode == "a_pied")
    {
        var tmpTravelMode = 'WALKING';
    }
    else if (travelmode == "velo")
    {
        var tmpTravelMode = 'BICYCLING';
    }
 

    distanceService.getDistanceMatrix({
        origins:[window.latStart + ","+ window.lngStart],
        destinations: [window.lat + ","+ window.lng],
        travelMode: tmpTravelMode,//DRIVING, BICYCLING, TRANSIT, WALKING
        unitSystem: google.maps.UnitSystem.METRIC,
        durationInTraffic: true,
        avoidHighways: false,
        avoidTolls: false
    },
    function (response, status){
        if (status !== google.maps.DistanceMatrixStatus.OK) {
            console.log('Error:', status);
        } else {
            console.log(response);
            document.getElementById("p").innerHTML = "Distance: " + response.rows[0].elements[0].distance.text;
            //AJOUTER REQUETE TRAJET END
        }
    });

}

/*dans cette fonction on arrête le "timer" ,on réactive le bouton "start" et on initialise les variables à zéro */
function reset(){
    clearInterval(t);
    btn_start.disabled=false;
    ms=0,s=0,mn=0,h=0;
    /*on accède aux différents span par leurs indice*/
    sp[0].innerHTML=h+" h";
    sp[1].innerHTML=mn+" min";
    sp[2].innerHTML=s+" s";
    sp[3].innerHTML=ms+" ms";

    // AJOUTER LA REQUETE TRAJET RESET
}
//Source : www.exelib.net



function updatePosition (position) {
    if (position) {
        window.lat = position.coords.latitude;
        window.lng = position.coords.longitude;
    }
}

function updateStart(position){
    if (position)
    {
        window.latStart = position.coords.latitude;
        window.lngStart = position.coords.longitude; 
    }
}

function getLocation () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition (updatePosition);
    }
    return null;
};


function currentLocation () {
    return {lat: window.lat, lng: window.lng};
};
