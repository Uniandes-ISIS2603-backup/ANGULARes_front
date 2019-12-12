let map;
let directionsService;
let directionsRenderer;
let geocoder;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 4.66421, lng: -74.07861 },
    zoom: 16
  });

  var marker0 = new google.maps.Marker({
    position: { lat: 4.66421, lng: -74.07861 },
    map: map,
    title: 'El marcador'
  });

  // Polilínea
  let mCoordinates = [
    { lat: 4.66421, lng: -74.07861 },
    { lat: 4.67909, lng: -74.07723 },
    { lat: 4.68251, lng: -74.11792 }
  ];

  let mCoordinates2 = [
    { lat: 4.76531, lng: -74.07861 },
    { lat: 34.78019, lng: -54.07723 },
    { lat: -4.78361, lng: 54.11792 },
    { lat: 5.11792, lng: 84.78361 }
  ];

  let mPath = new google.maps.Polyline({
    path: mCoordinates,
    geodesic: true,
    strokeColor: '#00ff00',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  mPath.setMap(map);

  // Polígono
  let triangle = new google.maps.Polygon({
    paths: mCoordinates2,
    geodesic: true,
    strokeColor: '#bbFFAA',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#CCFF56',
    fillOpacity: 0.25
  });
  triangle.setMap(map);

  // Directions

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    supressMarkers: true
  });

  let request = {
    origin: 'Bogota',
    destination: 'Fontibon',
    travelMode: 'DRIVING',
    provideRouteAlternatives: true,
    // waypoints: [{ location: mCoordinates[1] }]
  };

  directionsService.route(request, function (result, status) {
    console.log(result);
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    }
  });
  // Geocoding API
  // Pasando de dirección en letras a lat/lng
  geocoder = new google.maps.Geocoder();
  var address = 'address';
  geocoder.geocode({ 'location': { lat: 4.6938262, lng: -74.0337415 } }, function (results, status) {
    console.log(results);
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        title: address
      });
    } else {
      alert('El Geocode no se cargó exitosamente ' + status);
    }
  })

  directionsRenderer.setMap(map);
}
