Languages: [:uk:](#mapping-coffee) / [:fr:](#les-cafés-de-robin)

# Mapping Coffee

This project emerged in September 2016 from [a Tania Rascia article](https://www.taniarascia.com/real-world-examples-of-map-filter-and-reduce-in-javascript/). I created my own version of Tania's [Cafétography](https://github.com/taniarascia/coffee), a JavaScript ES6 coffee map, powered by [Leaflet](https://leafletjs.com).

But every time I wanted to add a new coffee shop to my map, I had to manually edit a `json` file.

Not very user-friendly.

Therefore in January 2019, I decided to transform the project into a [React](https://reactjs.org) app.

## Stack

:atom: [React](https://github.com/facebook/react/)  
:earth_africa: [Leaflet](https://github.com/leaflet/leaflet) for the map  
:round_pushpin: [OpenStreetMap](https://openstreetmap.org) map data queried through the [Overpass API](https://github.com/drolbr/Overpass-API)  
:fire: [Firebase](https://firebase.google.com/) for persisting state  
:nail_care: [styled-components](https://github.com/styled-components/styled-components) CSS-in-JS  
:pencil: [Formik](https://github.com/jaredpalmer/formik) for forms and [Yup](https://github.com/jquense/yup) for validation

---

# Les cafés de Robin

Ce projet a commencé en septembre 2016 avec [ce tutoriel de Tania Rascia](https://www.taniarascia.com/real-world-examples-of-map-filter-and-reduce-in-javascript/). J'ai créé ma propre version de [Cafétography](https://github.com/taniarascia/coffee), une carte en JavaScript ES6 avec [Leaflet](https://leafletjs.com) où j'affichais mes cafés préférés.

Mais à chaque fois que je voulais ajouter un café je devais modifier manuellement un fichier `json`.

Pas très pratique.

En janvier 2019, j'ai donc transformé le projet en appli [React](https://reactjs.org).

## Stack

:atom: [React](https://github.com/facebook/react/)
:earth_africa: Carte [Leaflet](https://github.com/leaflet/leaflet)  
:round_pushpin: Données [OpenStreetMap](https://openstreetmap.org) via la [Overpass API](https://github.com/drolbr/Overpass-API)  
:fire: [Firebase](https://firebase.google.com/) pour conserver l'état global  
:nail_care: Styles CSS-in-JS avec [styled-components](https://github.com/styled-components/styled-components)  
:pencil: Formulaires [Formik](https://github.com/jaredpalmer/formik) et validation avec [Yup](https://github.com/jquense/yup)
