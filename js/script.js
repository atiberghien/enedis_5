
var mymap = L.map('mapid').setView([44.51802660193136, 3.501524680981447], 15.5);
mymap.pm.addControls(options);

// define toolbar options

var options = {
    position: 'topleft',
    drawMarker: true,
    drawPolygon: true,
    drawPolyline: true,
    drawCircle: true,
    editPolygon: true,
    deleteLayer: true
};


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);


// Mairie

var marker = L.marker([44.518006, 3.501849]).addTo(mymap);

marker.bindPopup("<b>Mairie</b><br>Mende").openPopup();


// Piscine Municipale

var marker = L.marker([44.516508, 3.472193]).addTo(mymap);

marker.bindPopup("<b>Piscine Municipale</b><br>Mende").openPopup();

var circle = L.circle([44.516508, 3.472193], {
    color: 'yellow',
    fillColor: 'yellow',
    fillOpacity: 0.5,
    radius: 10
}).addTo(mymap);


// Espace Evènements Georges Frêche

var marker = L.marker([44.5154350622595, 3.498090533660161]).addTo(mymap);

marker.bindPopup("<b>Espace Evènements Georges Frêche</b><br>Mende").openPopup();

var circle = L.circle([44.5154350622595, 3.498090533660161], {
    color: 'yellow',
    fillColor: 'yellow',
    fillOpacity: 0.5,
    radius: 30
}).addTo(mymap);


// Théâtre Municipal

var marker = L.marker([44.515001, 3.499085]).addTo(mymap);

marker.bindPopup("<b><u>Théâtre Municipal</u></b><br>Consommation Electrique Moyenne du Bâtiment : <b>4163.2(kw/an)</b><br>Comment Améliorer La Consommation ?").openPopup();

var circle = L.circle([44.515001, 3.499085], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 30
}).addTo(mymap);


// Groupe Scolaire Bonijol

var marker = L.marker([44.518594, 3.503218]).addTo(mymap);

marker.bindPopup("<b><u>Groupe Scolaire Jean Bonijol</u></b><br>Consommation Electrique Moyenne du Bâtiment : <b>7989.2(kw/an)</b><br>Comment Améliorer La Consommation ?").openPopup();

var circle = L.circle([44.518594, 3.503218], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 30
}).addTo(mymap);


// Service Technique Municipal

var marker = L.marker([44.508293, 3.462901]).addTo(mymap);

marker.bindPopup("<b>Service Technique Municipal</b><br>Mende").openPopup();

var circle = L.circle([44.508293, 3.462901], {
    color: 'yellow',
    fillColor: 'yellow',
    fillOpacity: 0.5,
    radius: 10
}).addTo(mymap);


// Nouvelle Mairie Mende

var marker = L.marker([44.5180881, 3.5017153000000008]).addTo(mymap);

marker.bindPopup("<b><u>Nouvelle Mairie</u></b><br>Consommation Electrique Moyenne du Bâtiment : <b>8816.7(kw/an)</b><br>Comment Améliorer La Consommation ?").openPopup();

var circle = L.circle([44.5180881, 3.5017153000000008], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 20
}).addTo(mymap);
