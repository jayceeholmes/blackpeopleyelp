

// SHOW MAP
// -----------------------------------------------------------------------------
    var key = 'pk.eyJ1IjoiamF5Y2VlaG9sbWVzIiwiYSI6ImNqOXVkM2d3dTAxYTAycWwwejUydnhxcTAifQ.B-xBaoNaMrQug0ibwBBP-w';
 // MAPPA SCRIPTS TO SHOW OVERLAY
// -----------------------------------------------------------------------------

// Create a variable to hold our map
var myMap;
// Create a variable to hold our canvas
var canvas;
// Create a new Mappa instance using Leaflet.
var mappa = new Mappa('Mapboxgl', key);

// array
var positionsx = [];
var positionsy = [];
var ping;

// Lets put all our map options in a single object
var options = {
  lat: 40.730042,
  lng: -73.993964,
  zoom: 3,
  style: 'mapbox://styles/jayceeholmes/cj9vhztp44udf2sp7i6yjr91z',
}


// p5.js setup
function setup(){
  // Create a canvas 640x640
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  // Create a tile map with lat 0, lng 0, zoom 4
  myMap = mappa.tileMap(options);

  // Overlay the tilemap on top of the canvas
  myMap.overlay(canvas);

  // Retrieve Data From Database
  const dbRefObject = firebase.database().ref().child('pings/racism');

  dbRefObject.once("value", function(data) {

    var locations = data.val();
    var keys = Object.keys(locations);

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var px = locations[k].gpsx;
      var py = locations[k].gpsy;

      positionsx.push(px);
      positionsy.push(py);

      console.log(positionsx);

      ping = myMap.latLngToPixel(px, py);
      color(0,0,255);
      ellipse(ping.x, ping.y, 20, 20);

    }
  });

  // On Change, Draw Point
  myMap.onChange(drawPoint);
}

function draw(){
  // nothing
}


function drawPoint(){
  clear();
  for (var i = 0; i < positionsx.length; i++) {
    ping = myMap.latLngToPixel(positionsx[i], positionsy[i]);
    color(0,0,255);
    ellipse(ping.x, ping.y, 20, 20);
  }
}
