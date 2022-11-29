// Adding mapbox basemap
mapboxgl.accessToken = 'pk.eyJ1IjoiYS10YW1vcnQiLCJhIjoiY2xhbWV6Y2NnMGJkMjNxbjY1eDRzMGxlNCJ9.xiRkasxOToHLdGljfIxYIA';


// ajout de l'objet carte
const map = new mapboxgl.Map({
    container: "map", // container ID
    center: [-6.8356445,33.9925272], // starting position [lng, lat]
    zoom: 17.8, // starting zoom
    pitch: 20,
    bearing: -5,
    style: 'mapbox://styles/a-tamort/clao5khuw002z14ldc46snhck', // style URL or style object
    }
);


// ajout du bouton plein ecran
map.addControl(new mapboxgl.FullscreenControl());


// les différents Halls
map.on('load', () => {
  map.addSource('stands', {
    'type': 'geojson',
    'data': "poly.geojson" ,
  })


  map.addLayer({
  'id': 'stands',
  'type': 'fill',
  'source': 'stands', // reference the data source
  'layout': {},
  'paint': {
  'fill-color': ['get','color'], // blue color fill
  'fill-opacity': 0.5
  }
  });

  map.addLayer({
    'id': 'outline',
    'type': 'line',
    'source': 'stands',
    'layout': {},
    'paint': {
    'line-color': ['get','color'],
    'line-width': 1
    }
    });


// Create a popup, but don't add it to the map yet.
const popup = new mapboxgl.Popup({
  offset: [0, -15],
  closeButton: false,
  closeOnClick: false,
  anchor: 'bottom'
  });


map.on('mouseenter', 'stands', (e) => {
  // Change the cursor style as a UI indicator.
  map.getCanvas().style.cursor = 'pointer';
  // Copy coordinates array.
  const halls = e.features[0].properties.hall;
  popup.setLngLat(e.lngLat)
  .setHTML('<center><b><h6>'+ halls + '</center></b></h6>') 
  .addTo(map);
  });

  map.on('mouseleave', 'stands', () => {
  map.getCanvas().style.cursor = '';
  popup.remove();
  });
})


// les entrées au différents Halls 
map.on('load', () => {
  map.loadImage(
    'images/entree.png',
    (error, image) => {
      if (error) throw error;
      map.addImage('custom-marker', image);
      
  map.addSource('entree', {
    'type': 'geojson',
    'data': "entree.geojson" ,
  })


  map.addLayer({
  'id': 'entree',
  'type': 'symbol',
  'source': 'entree', // reference the data source
  'layout': {
    'icon-image': 'custom-marker',
    'icon-size': 0.04
  },    
  });
})
})



// limite du festival 
map.on('load', () => {
  map.addSource('limite', {
    'type': 'geojson',
    'data': "limite.geojson" ,
  })

  map.addLayer({
  'id': 'limite',
  'type': 'line',
  'source': 'limite', 
  'layout': {'line-join': 'round',
  'line-cap': 'round'
  },
  'paint': {
    'line-color': 'black',
    'line-width': 3
    }
  });
})

  // limite des halls
  map.on('load', () => {
    map.addSource('limite_hall', {
      'type': 'geojson',
      'data': "limite_hall.geojson" ,
    })
  
    map.addLayer({
    'id': 'limite_hall',
    'type': 'line',
    'source': 'limite_hall', 
    'layout': {'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
      'line-color': 'black',
      'line-width': 2
      }
    });
  })

// your code that shows the map div
$('#map-div').show();

// detect the map's new width and height and resize it
map.resize();

