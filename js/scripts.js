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

// Add location icon

// Make an XMLHttpRequest to the JSON data
const requestCoffeeShops = new XMLHttpRequest();
requestCoffeeShops.open('GET', 'https://robinmetral.github.io/coffee/js/data.json', true);

requestCoffeeShops.onload = function() {
    // Begin accessing JSON data here
    const data = JSON.parse(this.response);

    // Print cafe markers
    const cafes = data.cafes.map(cafe => {
        console.log(cafe.name);

        // Make a XMLHttpRequest to the OSM API
        const requestLatLon = new XMLHttpRequest();
        requestLatLon.open('GET', 'https://www.openstreetmap.org/api/0.6/node/${cafe.osm}', true);
        const osmData = requestLatLon.responseXML;
        const osmNode = osmData.getElementsByTagName("node")[0];
        const osmLat = osmNode.getAttribute("lat");
        const osmLon = osmNode.getAttribute("lon");

        L.marker([osmLat, osmLon], {icon: coffeeIcon}).addTo(myMap)
            .bindPopup(`
            <header><h1>${cafe.name}</h1></header>
            <ul>
                <li><strong>Espresso:</strong> ${cafe.espresso}</li>
                <li><strong>Filter:</strong> ${cafe.filter}</li>
                <li><strong>Good for working:</strong> ${cafe.working}</li>
                <li><strong>Price range:</strong> ${cafe.price}</li>
            </ul>
            <footer><a href="${cafe.url}" target="_blank">Website</a> · <a href="https://www.openstreetmap.org/node/${cafe.osm}" target="_blank">OpenStreetMap</a></footer>
            `)
            .openPopup();
    });
}

requestCoffeeShops.send();
