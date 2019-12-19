/* eslint-disable */
/* headの中に下記タグを追加する */
/*  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places" > */
var map;
var infowindow;
var service;
var centerPoint;
var markerGroup = [];

function initMap(element, initPoint = {lat: 37.962761, lng: 23.707459}, zoom = 15) {
  centerPoint = initPoint
  map = new google.maps.Map(element, {
    center: centerPoint,
    zoom: zoom
  });
  // init infowindow once
  infowindow = new google.maps.InfoWindow();
  // init service once
  service = new google.maps.places.PlacesService(map);
}

function nearbySearch(type =[],placeRadius = 500) {

  console.log("Type: " + type);

  if (map && centerPoint) {
    // var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: centerPoint,
      radius: placeRadius,
      types: type
    }, markNearbyPlaces);
  }
}

function markNearbyPlaces(results, status) {
 
  markerGroup.forEach((marker, i) => {marker.setMap(null)})
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place, ifInitPoint) {
  let placeLoc = place.geometry.location;
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
  });

  if (place.icon) {
    let myIcon = new google.maps.MarkerImage(place.icon, null, null, null, new google.maps.Size(19,20));
   
    marker.setOptions({
      icon: myIcon
    });
  }

  google.maps.event.addListener(marker, 'click', function() {
    // infowindow.setContent(place.name + '<br>' +place.place_id);
    if (!place.name) {
      // console.log(place.address_components[0].short_name);
      place.name = place.address_components[0].short_name
    }
    let mapUrl = `https://maps.google.com/maps?q=${place.name}&ll=${place.geometry.location.lat()},${place.geometry.location.lng()}`
    // リファレンス：http://webapps.stackexchange.com/questions/4438/create-a-google-maps-link-to-a-specific-location
    infowindow.setContent(`<a href="${mapUrl}" target="_blank">${place.name}</a>`);
    infowindow.open(map, this);
    // console.log(place.geometry)
  });
  if (!ifInitPoint) {
    markerGroup.push(marker) 
  }
}

function getAreaName(latLngNow, cb){

  let geocoder = new google.maps.Geocoder();
  geocoder.geocode({latLng: latLngNow}, function(results, status){
    if(status == google.maps.GeocoderStatus.OK){
      // console.log(results[0]);
      createMarker(results[0],true) 
      if (cb) {
        cb(results[0])
      }
      // results[0].formatted_address
    }
  });
}

function createMark(lat, long, ifInitPoint) {
 
  var myLatLng = {lat: lat, lng: long};

 var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Ambulance Available'
  });

 marker.setMap(map);

  /*google.maps.event.addListener(marker, 'click', function() {
    // infowindow.setContent(place.name + '<br>' +place.place_id);
    if (!place.name) {
      // console.log(place.address_components[0].short_name);
      place.name = place.address_components[0].short_name
    }
    let mapUrl = `https://maps.google.com/maps?q=${place.name}&ll=${place.geometry.location.lat()},${place.geometry.location.lng()}`
    // リファレンス：http://webapps.stackexchange.com/questions/4438/create-a-google-maps-link-to-a-specific-location
    infowindow.setContent(`<a href="${mapUrl}" target="_blank">${place.name}</a>`);
    infowindow.open(map, this);
    // console.log(place.geometry)
  });
  if (!ifInitPoint) {
    markerGroup.push(marker) 
  }*/
}

export { initMap, getAreaName, nearbySearch , createMark }
