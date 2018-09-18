// Set the map variable
const myMap = L.map("mapid");

// Load the basemap
const myBasemap = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Add basemap to map id
myBasemap.addTo(myMap);

// Set view of the map
myMap.setView([18.7884781, 98.9813945], 14);
