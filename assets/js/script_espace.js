var map = L.map("map",{
    fullscreenControl: true}).setView([34.02010957, -6.837163629
    ], 15);


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


// definition du marker      
 var new_marker = L.icon({
        iconUrl: 'images/location-pin.png',
        iconSize:     [38, 38], // size of the icon
        iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
      });

// Ajout du fichier geojson contenant les espaces creatifs de rabat  
var espaces = L.geoJSON(espaces,{pointToLayer: function(feature,latlng){
    return L.marker(latlng,{icon: new_marker})}}).bindPopup(function (layer) {
    return ( " <center> <img src='images/espaces/" + layer.feature.properties.Image + "' style='width:200px;height:300x;border:2px solid #000000;border-radius:25px;'></center>" 
    +"<br><u><center> <h6><b> Nom de l'espace créatif ou artistique: </b> </h6></u>" + layer.feature.properties.Espace_creatif 
    + "<br> <u> <center> <h6><b> Description:</b> </h6></u>" + layer.feature.properties.Description
    +'<u> <center> <h6> <b>Contact: </b></h6></u>' 
    + '<b> Site web: </b>' + "<a href='"+ layer.feature.properties.Site_web + "' target='_blank'> " + layer.feature.properties.Site_web + "</a>"
    + '<br> <b> Téléphone: </b>' + layer.feature.properties.Téléphone ) ; 
  }).addTo(map);  


// var baseMaps = {
//     "Google Maps": google_maps,
//     "Satellite" : satellite,
//     "OpenStreetMap": osm, 
//   }
  var overlays = { 
    "Espaces créatifs" : espaces 
    
  }
var layerControl = L.control.layers(overlays).addTo(map);
