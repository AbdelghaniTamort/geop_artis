//Carte 
var map = L.map("map",{
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: 'right'
    }}).setView([34.01364461647608, -6.841457313499234
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




//Personnalisation du marker
var marker1 = L.icon({
        iconUrl: 'images/visit.png',
        iconSize:     [30, 30], // size of the icon
        iconAnchor:   [15, 30], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
});

// const polygon = L.polygon([
// 		[34.02007, -6.837077],
// 		[34.020244, -6.837163],
// 		[34.020206, -6.837281],
// 		[34.020046, -6.837195]
// ]).addTo(map);

// const polygon2 = L.polygon([
// 		[34.01868726837825, -6.835884663626166],
// 		[34.018557213260735, -6.835814255639746],
// 		[34.01851108255149, -6.8359423311198055],
// 		[34.01864002615776, -6.836011398001722]
// ]).addTo(map);

// const polygon3 = L.polygon([
// 		[34.02098611590305, -6.835473145837082],
// 		[34.021105737163666, -6.835267760143786],
// 		[34.021273808217614, -6.8354002263515214],
// 		[34.02121711927734, -6.835520255204562],
// 		[34.021192109438715, -6.835535007354098]
// ]).addTo(map);

// const polygon4 = L.polygon([
// 		[34.003783663126896, -6.845495346944607],
// 		[34.00392374684753, -6.845457125466264],
// 		[34.003899843689325, -6.84533173219521],
// 		[34.00384091959618, -6.845347154896998],
// 		[34.00385036968934, -6.845400128524877],
// 		[34.003770321808105, -6.845424938958187]
// ]).addTo(map);

// const polygon5 = L.polygon([
// 		[34.01463718082388, -6.84694646301697],
// 		[34.01465021944152, -6.8469346654216405],
// 		[34.014752083572745, -6.8471037642880415],
// 		[34.014944402719294, -6.846938597953416],
// 		[34.01482705549523, -6.846736072566912],
// 		[34.01462088254906, -6.846921884693365]
// ]).addTo(map);


var cine = L.geoJSON(cinemas,{pointToLayer: function(feature,latlng){
  return L.marker(latlng,{icon: marker1})}}).bindPopup(function (layer) {
  return ( " <center> <img src='images/cinemas/" + layer.feature.properties.images + " 'style='width:200px;height:300x;border:2px solid black;border-radius:10px'></center>" 
  +"<br><center> <b> Cinéma: </b>" + layer.feature.properties.Cinema
  + "<br> <center> <b> Reviews: </b>" + "<a href='" + layer.feature.properties.reviews +"' target='_blank'> " + layer.feature.properties.reviews + "</a>"
  + "<br> <center> <b> Tarif moyen: </b>" + layer.feature.properties.tarif 
  + "<br> <center> <b> Nombre d'écrans: </b>" + layer.feature.properties.Nb_ecrans ) ; 
}).addTo(map);




	




