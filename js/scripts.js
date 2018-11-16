// About
// Open function
function openAbout() {
    document.getElementById('about').style.cssText = 'visibility:visible;';
}
// Close function
function closeAbout() {
    document.getElementById('about').style.cssText = 'visibility:hidden;';
}

// Set the map view
var myMap = L.map('mapid').setView([18.7884781, 98.9813945], 14);

// Load the basemap
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Données &copy; <a href="https://www.openstreetmap.org/copyright">les contributeurs d\'OpenStreetMap</a>, fonds de carte Mapbox Light &copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>, grain de café par Gyeong Seon Hong du <a href="https://thenounproject.com/icon/1886493/">Noun Project</a>. <a href="" onclick="openAbout();return false;">À propos de cette carte</a>',
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
    // Begin accessing JSON data
    const data = JSON.parse(this.response);

    // Initialize and create OSM IDs array
    const osmIds = [];
    for (let i = 0; i < data.cafes.length; i++) {
        osmIds.push(data.cafes[i].osm);
    }

    // Print total number of cafes into about section
    document.getElementById("number-of-cafes").innerHTML = data.cafes.length;

    // request v1 user through OpenStreetMap API 0.6
    const requestUser = new XMLHttpRequest();
    const nodesV1 = [];
    for (let i = 0; i < osmIds.length; i++) {
        nodesV1.push(osmIds[i] + "v1");
    }
    requestUser.open("GET", "https://www.openstreetmap.org/api/0.6/nodes?nodes=" + nodesV1, true); // get v1 of all nodes asynchronously
    requestUser.onload = function (e) {
        if (requestUser.readyState === 4) {
            if (requestUser.status === 200) {
                const requestUserXml = requestUser.responseXML;
                let cafesAdded = 0;
                for (let i = 0; i < osmIds.length; i++) {
                    if (requestUserXml.getElementById(osmIds[i]).getAttribute("user") === "robinmetral") {
                        cafesAdded++; // Increment number of cafes added to OSM by user robinmetral
                    }
                }
                // Print cafesAdded into about section
                console.log(cafesAdded);
                document.getElementById("cafes-added-to-osm").innerHTML = cafesAdded;
            }
            else {
                console.error(requestUser.statusText);
            }
        }
    };
    requestUser.onerror = function (e) {
        console.error(requestUser.statusText);
    };
    requestUser.send(null);
    
    // sort() cafes array in OSM node id ascending order to fit Overpass
    const cafes = data.cafes.sort(function(a, b){return a.osm - b.osm});

    // fetch() OSM data through the Overpass API
    fetch('https://www.overpass-api.de/api/interpreter?data=[out:json];node(id:' + osmIds + ');out;')
        .then(function(response) { return response.json(); })
        .then(function(jsonResponse) {
            for (let j = 0; j < jsonResponse.elements.length; j++) {
                const { lat, lon } = jsonResponse.elements[j]; // es6 destructuring
                const cafeUrl = (jsonResponse.elements[j].hasOwnProperty("tags") === false) ? "" : (jsonResponse.elements[j].tags.hasOwnProperty("website")) ? jsonResponse.elements[j].tags.website : (jsonResponse.elements[j].tags.hasOwnProperty("facebook")) ? jsonResponse.elements[j].tags.facebook : "";
                const cafeHours = (jsonResponse.elements[j].hasOwnProperty("tags") === false || jsonResponse.elements[j].tags.hasOwnProperty("opening_hours") === false) ? "<a href=\"https://www.openstreetmap.org/edit?node=" + cafes[j].osm + "\">ajouter à OpenStreetMap !</a>" : jsonResponse.elements[j].tags.opening_hours;
                const cafeFilter = (Array.isArray(cafes[j].filter)) ? cafes[j].filter : (cafes[j].filter === false) ? "non" : "oui";
                const cafeLatte = (Array.isArray(cafes[j].latte)) ? cafes[j].latte : (cafes[j].latte === false) ? "non" : "oui";
                const cafeLaptop = (cafes[j].laptop) ? "oui" : "non";

                // Print marker
                L.marker([lat, lon], {icon: coffeeIcon}).addTo(myMap)
                    .bindPopup(`
                        <header><h1>${cafes[j].name} (${cafes[j].rating}/5)</h1></header>
                        <p>${cafes[j].comment}</p>
                        <ul>
                            <li><strong>Filtre :</strong> ${cafeFilter}</li>
                            <li><strong>Latte :</strong> ${cafeLatte}</li>
                            <li><strong>Laptop :</strong> ${cafeLaptop}</li>
                        </ul>
                        <footer>
                            Heures d'ouverture : ${cafeHours}<br>
                            <a href="${cafeUrl}">Site web</a> · <a href="https://www.openstreetmap.org/node/${cafes[j].osm}">OpenStreetMap</a> · Mis à jour le ${cafes[j].date}
                        </footer>
                    `);
            }
        })
}

request.send();

