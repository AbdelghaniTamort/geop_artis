// Ajout de la carte 
var map = L.map("map",{
  fullscreenControl: true,
  }).setView([34.01273536355745, -6.83842047283649
  ], 15);


new L.basemapsSwitcher([
  {
    layer: L.tileLayer("https://api.mapbox.com/styles/v1/a-tamort/clao5t81w001v14rctk7m6843/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYS10YW1vcnQiLCJhIjoiY2xhbWV6Y2NnMGJkMjNxbjY1eDRzMGxlNCJ9.xiRkasxOToHLdGljfIxYIA").addTo(map), //DEFAULT MAP
    icon: './assets/img/img4.png',
    name: 'MapBox'
  },
  {
    layer: L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      ),
    icon: './assets/img/img1.png',
    name: '<center>Open Street Maps</center>'
  },
  {
    layer: L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"),
    icon: './assets/img/img2.png',
    name: '<center> Satellite </center>'
  },
], { position: 'topright' }).addTo(map);


//FONCTION QUI CHANGE LE RAYON
function setSizeIcon(attr){
  return rayon=Math.sqrt(attr*0.01/Math.PI);
};


//IMPORT DES CENTROIDES
var Centro = L.geoJSON(nb_entrees_1, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng,{
      radius : setSizeIcon(feature.properties.Nombre), 
      color : '#ad0808',
      fillOpacity: 1,
      fillColor: 'red'
    }).bindPopup("Nombre d'entrées : " + feature.properties.Nombre);
  }
}).addTo(map) ;




//TITRE + LEGENDE :
var titre = L.control();

titre.onAdd = function (map) {
  var divTitre = L.DomUtil.create('div', 'titre'); 
  divTitre.innerHTML = "<h4>Nombre d'entrées par cinéma lors de l'année 2019</h4>";
  return divTitre;
};

titre.addTo(map); 

// var legend = L.control({position: 'bottomleft'}); 

// legend.onAdd = function (map) {
//  var divLeg = L.DomUtil.create('div', 'info legend');
//  divLeg.innerHTML +='Nombre d\'individus<br><img  src="images.png">';
//  return divLeg;
// }; 

// legend.addTo(map);
