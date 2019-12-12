var destino = { location: 'Calle 103 #22-10, Bogota' };
var origen = { location: 'Universidad de los Andes, Bogota' };
var ubicacionActual = [{location: '4.66421, -74.07861'}];
var respuestaAPI;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 4.66421, lng: -74.07861 },
		zoom: 16
	})

	var directionsService = new google.maps.DirectionsService();
	var directionsRenderer = new google.maps.DirectionsRenderer({
        supressMarkers: true
    })

	let request = {
		origin: origen.location,
		destination: destino.location,
		travelMode: 'DRIVING',
		waypoints: ubicacionActual
	};

	directionsService.route(request, function (result, status) {
		console.log(result);
		respuestaAPI = result;

		refreshProgress();
		document.getElementById('tiempoRestante').innerHTML = "Tiempo restante: " + timeRemaining();
		
		if (status == 'OK') {
            directionsRenderer.setDirections(result);
		}
		directionsRenderer.setMap(map);
	}
	)

	document.getElementById('origen').innerHTML = "Origen: " + getOrigin();
	document.getElementById('destino').innerHTML = "Destino: " + getDestination();
	document.getElementById('ubicacionActual').innerHTML = "Ubicacion actual del libro: " + getCurrentLocation();
	
};

function refreshProgress()
{
	var percentage = distToBook()/totDist()*100;
	document.getElementById('barraProgreso').style.width = percentage + "%";
	console.log(percentage);
}

function getOrigin()
{
	return origen.location;
}

function getDestination()
{
	return destino.location;
}

function getCurrentLocation()
{
	return ubicacionActual[0].location;
}

function totDist() {
	var dist = 0;

	for (i = 0; i < respuestaAPI.routes[0].legs.length; i++) {
		dist += respuestaAPI.routes[0].legs[i].distance.value;
	}

	return dist;
}

function distToBook() {
	return respuestaAPI.routes[0].legs[0].distance.value;
}

function timeRemaining() {
	return respuestaAPI.routes[0].legs[1].duration.text;
}