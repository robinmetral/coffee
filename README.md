Languages: [:uk:](#mapping-coffee) / [:fr:](#les-cafés-de-robin)

# Mapping Coffee

This project emerged in September 2016 from [a Tania Rascia article](https://www.taniarascia.com/real-world-examples-of-map-filter-and-reduce-in-javascript/). I created my own version of Tania's [Cafétography](https://github.com/taniarascia/coffee), a JavaScript ES6 coffee map, powered by [Leaflet](https://leafletjs.com).

But every time I wanted to add a new coffee shop to my map, I had to manually edit a `json` file.

Not very user-friendly.

Therefore in January 2019, I decided to transform the project into a [React](https://reactjs.org) app.

## Stack

This project is powered by:

:atom: [React](https://github.com/facebook/react/)  
:earth_africa: [Leaflet](https://github.com/leaflet/leaflet) via [react-leaflet](https://github.com/PaulLeCam/react-leaflet) for the map  
:round_pushpin: [OpenStreetMap](https://openstreetmap.org) map data queried through the [Overpass API](https://github.com/drolbr/Overpass-API)  
:fire: [Firebase](https://firebase.google.com/) via [re-base](https://github.com/tylermcginnis/re-base) for persisting state  
:nail_care: [styled-components](https://github.com/styled-components/styled-components) CSS-in-JS  
:pencil: [Formik](https://github.com/jaredpalmer/formik) for forms and [Yup](https://github.com/jquense/yup) for validation

**But also...**   
[Mapbox](https://www.mapbox.com/) map tiles, [coffee bean icon](https://thenounproject.com/icon/1886493/) by Gyeong Seon Hong of The Noun Project, [Twemoji](https://github.com/twitter/twemoji) emojis, [react-helmet](https://github.com/nfl/react-helmet), GitHub for hosting, versioning and authentication, and Netlify for CI.

---

# Les cafés de Robin

Ce projet a commencé en septembre 2016 avec [ce tutoriel de Tania Rascia](https://www.taniarascia.com/real-world-examples-of-map-filter-and-reduce-in-javascript/). J'ai créé ma propre version de [Cafétography](https://github.com/taniarascia/coffee), une carte en JavaScript ES6 avec [Leaflet](https://leafletjs.com) où j'affichais mes cafés préférés.

Mais à chaque fois que je voulais ajouter un café je devais modifier manuellement un fichier `json`.

Pas très pratique.

En janvier 2019, j'ai donc transformé le projet en appli [React](https://reactjs.org).

## Stack

Ce projet est propulsé par :

:atom: [React](https://github.com/facebook/react/)  
:earth_africa: Carte [Leaflet](https://github.com/leaflet/leaflet) via [react-leaflet](https://github.com/PaulLeCam/react-leaflet/)  
:round_pushpin: Données [OpenStreetMap](https://openstreetmap.org) via la [Overpass API](https://github.com/drolbr/Overpass-API)  
:fire: [Firebase](https://firebase.google.com/) via [re-base](https://github.com/tylermcginnis/re-base) pour conserver l'état global  
:nail_care: Styles CSS-in-JS avec [styled-components](https://github.com/styled-components/styled-components)  
:pencil: Formulaires [Formik](https://github.com/jaredpalmer/formik) et validation avec [Yup](https://github.com/jquense/yup)

**Mais aussi...**   
Fonds de carte [Mapbox](https://www.mapbox.com/), [icône grain de café](https://thenounproject.com/icon/1886493/) par Gyeong Seon Hong du Noun Project, emojis [Twemoji](https://github.com/twitter/twemoji), [react-helmet](https://github.com/nfl/react-helmet), GitHub pour l'hébergement, le contrôle de versions et l'authentification, et Netlify pour la CI.
