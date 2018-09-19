// Set the map variable
var myMap = L.map('mapid').setView([18.7884781, 98.9813945], 14);

// Load the basemap
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1Ijoicm9iaW5tZXRyYWwiLCJhIjoiY2pkMTI0bWVnMmV6dzM0bnNhZHBvMDBqeiJ9.Z0gZrvkth24hNkLkvRxg-g'
}).addTo(myMap);

// Make an XMLHttpRequest to the JSON data
const request = new XMLHttpRequest();
request.open('GET', 'https://robinmetral.github.io/coffee/js/data.json', true);

request.onload = function() {
    // Begin accessing JSON data here
    const data = JSON.parse(this.response);

    // Print cafe markers
    const cafes = data.cafes.map(cafe => {
        console.log(cafe.name);
        L.marker([cafe.lat, cafe.lon]).addTo(myMap)
            .bindPopup(`
            <h1>${cafe.name}</h1>
            <ul>
                <li><strong>Ambiance:</strong> ${cafe.ambiance}</li>
                <li><strong>Flavor:</strong> ${cafe.flavor}</li>
                <li><strong>Comments:</strong> ${cafe.comments}</li>
            </ul>
            `)
            .openPopup();
    });
}

request.send();
