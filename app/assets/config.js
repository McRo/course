var dataUrl = 'data/data.csv';
var maxZoom = 9;
var fieldSeparator = '|';
// https://leaflet-extras.github.io/leaflet-providers/preview/
var baseUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
//var baseUrl = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png';
// var baseUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// var baseUrl = 'http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg'

var baseAttribution = 'Data, imagery and map information provided by <a href="http://open.openstreetmap.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>';
var subdomains = 'abc';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 50};
var labelColumn = "Name";
var opacity = 1.0;
