// Set the map view
var myMap = L.map('mapid').setView([18.7884781, 98.9813945], 14);

function locateMe() {
    // Location icon
    var locationIcon = L.icon({
        iconUrl: "https://robinmetral.github.io/coffee/img/icon-location.png",
        iconSize: [16, 16],
        iconAnchor: [8, 8]
    })

    // Location found
    function onLocationFound(e) {
        var radius = e.accuracy / 2;
        L.marker(e.latlng, {icon: locationIcon}).addTo(myMap);
        L.circle(e.latlng, radius, {
            stroke: false,
            fillColor: "#5f7889",
            fillOpacity: 0.2
        }).addTo(myMap);
    }

    // Location not found
    function onLocationError(e) {
        alert(e.message);
    }

    // Locate!
    myMap.on('locationfound', onLocationFound);
    myMap.on('locationerror', onLocationError);
    myMap.locate({setView: true, maxZoom: 16});
}

// Load the basemap
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/" target="_blank">Mapbox</a>, Coffee Bean by Gyeong Seon Hong from <a href="https://thenounproject.com/icon/1886493/" target="_blank">the Noun Project</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1Ijoicm9iaW5tZXRyYWwiLCJhIjoiY2pkMTI0bWVnMmV6dzM0bnNhZHBvMDBqeiJ9.Z0gZrvkth24hNkLkvRxg-g'
}).addTo(myMap);

// Create custom icon
var coffeeIcon = L.icon({
    iconUrl: "https://robinmetral.github.io/coffee/img/icon-coffee-bean.png",
    shadowUrl: "https://robinmetral.github.io/coffee/img/icon-coffee-bean-shadow.png",
    iconSize:     [32, 32], // size of the icon
    shadowSize:   [32, 32], // size of the shadow
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 16],  // the same for the shadow
    popupAnchor:  [0, -16] // point from which the popup should open relative to the iconAnchor
});

// Make an XMLHttpRequest to the JSON data
const request = new XMLHttpRequest();
request.open('GET', 'https://robinmetral.github.io/coffee/js/data.json', true);

request.onload = function() {
    // Begin accessing JSON data here
    const data = JSON.parse(this.response);

    // Reverse data order to fit Overpass order
    data = data.cafes.reverse();

    // Initialize and create OSM IDs array
    const osmIds = [];
    for (var i = 0; i < data.cafes.length; i++) {
        osmIds.push(data.cafes[i].osm);
    }

    // fetch() OSM data through the Overpass API
    fetch('https://www.overpass-api.de/api/interpreter?data=[out:json];node(id:' + osmIds + ');out;')
        .then(function(response) { return response.json(); })
        .then(function(jsonResponse) {
            for (var j = 0; j < jsonResponse.elements.length; j++) {
                var lat = jsonResponse.elements[j].lat;
                var lon = jsonResponse.elements[j].lon;
                L.marker([lat, lon], {icon: coffeeIcon}).addTo(myMap)
                    .bindPopup(`
                        <header><h1>${data.cafes[j].name}</h1></header>
                        <ul>
                            <li><strong>Espresso:</strong> ${data.cafes[j].espresso}</li>
                            <li><strong>Filter:</strong> ${data.cafes[j].filter}</li>
                            <li><strong>Good for working:</strong> ${data.cafes[j].working}</li>
                            <li><strong>Price range:</strong> ${data.cafes[j].price}</li>
                        </ul>
                        <footer>
                            <a href="${data.cafes[j].url}" target="_blank">Website</a> · <a href="https://www.openstreetmap.org/node/${data.cafes[j].osm}" target="_blank">OpenStreetMap</a>
                        </footer>
                    `)
                    .openPopup();
            }
        })
}

request.send();
