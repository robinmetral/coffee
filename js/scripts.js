// Set the map variable
var myMap = L.map('mapid').setView([18.7884781, 98.9813945], 14);

// Load the basemap
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1Ijoicm9iaW5tZXRyYWwiLCJhIjoiY2pkMTI0bWVnMmV6dzM0bnNhZHBvMDBqeiJ9.Z0gZrvkth24hNkLkvRxg-g'
}).addTo(myMap);

// Create custom icon
var coffeeIcon = L.icon({
    iconUrl: "https://robinmetral.github.io/coffee/img/noun_Coffee Bean_1886493-colored.png",
    shadowUrl: "https://robinmetral.github.io/coffee/img/noun_Coffee Bean_1886493-shadow.png",

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

    // Print cafe markers
    const cafes = data.cafes.map(cafe => {
        console.log(cafe.name);
        L.marker([cafe.lat, cafe.lon], {icon: coffeeIcon}).addTo(myMap)
            .bindPopup(`
            <header><h1>${cafe.name}</h1></header>
            <ul>
                <li><strong>Espresso:</strong> ${cafe.espresso}</li>
                <li><strong>Filter:</strong> ${cafe.filter}</li>
                <li><strong>Good for working:</strong> ${cafe.working}</li>
                <li><strong>Price range:</strong> ${cafe.price}</li>
            </ul>
            <footer><a href="${cafe.url}">Website</a> · <a href="${cafe.osm}">OpenStreetMap</a></footer>
            `)
            .openPopup();
    });
}

request.send();
