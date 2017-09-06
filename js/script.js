
var mymap = L.map('mapid').setView([44.516787291861, 3.497662300000002], 15.7);
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
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);


// Espace Georges Frêche

var marker = L.marker([44.5154350622595, 3.498090533660161]).addTo(mymap);

marker.bindPopup("<b>Espace Evènements Georges Frêche</b><br>Mende").openPopup();
