// Ajout de la carte 
var map = L.map("map",{
    fullscreenControl: true,
    }).setView([34.0207898, -6.847685879
    ], 13);


// Ajout des basemaps
new L.basemapsSwitcher([
  {
    layer: L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map), //DEFAULT MAP
    icon: './assets/img/img1.png',
    name: '<center>Open Street Maps</center>'
  },
  {
    layer: L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"),
    icon: './assets/img/img2.png',
    name: 'Satellite'
  },
  {
    layer: L.tileLayer("https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"),
    icon: './assets/img/img3.png',
    name: '<center> Google Maps </center>'
  },
], { position: 'topright' }).addTo(map);



// definition du premier marker
var new_marker = L.icon({
  iconUrl: 'images/destination.png',
  iconSize:     [38, 38], // size of the icon
  iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
});

// definition du deuxieme marker 
var new_marker2 = L.icon({
  iconUrl: 'images/pin.png',
  iconSize:     [38, 38], // size of the icon
  iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

// Ajout des fresques de la 7eme edition de JIDAR 
var fresque1 = L.geoJSON(fresque_2022,{pointToLayer: function(feature,latlng){
  return L.marker(latlng,{icon: new_marker})}}).bindPopup(function (layer) {
  return ( " <center> <img src='images/" + layer.feature.properties.Image 
  + "' style='width:200px;height:300x;border:2px solid red;border-radius:10px'></center>" 
  +"<br><center> <b> Nom de l'artiste: </b>" + layer.feature.properties.Artiste 
  + '<br> <center> <b> Nationalité: </b>' + layer.feature.properties.Nationalité
  + '<br> <center> <b> Date de réalisation: </b>' + layer.feature.properties.Date_de_réalisation ) ; 
}).addTo(map);

// Ajout des fresques de la 6eme edition de JIDAR
var fresque2 = L.geoJSON(fresque_2021,{pointToLayer: function(feature,latlng){
  return L.marker(latlng,{icon: new_marker2})}}).bindPopup(function (layer) {
  return ( "</b> <center> <img src='images/" + layer.feature.properties.Image 
  + "' style='width:200px;height:300x;border:2px solid #000000;border-radius:10px;'></center>" 
  +"<br><center> <b> Nom de l'artiste: </b>" + layer.feature.properties.Artiste 
  + '<br> <center> <b> Nationalité: </b>' + layer.feature.properties.Nationalité
  + '<br> <center> <b> Date de réalisation: </b>' + layer.feature.properties.Date_de_réalisation ) ; 
}).addTo(map);


// Ajout du contrôleur des calques 
// var baseMaps = {
//   "Google Maps" : google_maps,
//   "Satellite" : satellite,
//   "OpenStreetMap": osm
// }

var overlays = { 
  "7ème édition" : fresque1 , 
  "6ème édition" : fresque2
}

var layerControl = L.control.layers(overlays).addTo(map);

// ajout d'un bouton qui permet d'afficher un maker sur la position de l'utilisateur
// L.geolet({ position: 'bottomleft',
//            title : 'Trouver votre position actuelle'  
//          }).addTo(map);

// routing machine 
// L.Routing.control({
//   waypoints: [
//       L.latLng(34.00619336705775, -6.860141103092505),
//       L.latLng(33.983216870382776, -6.844692616478854)
//   ],
//   routeWhileDragging: true
// }).addTo(map);


















