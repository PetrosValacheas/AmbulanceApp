/* eslint-disable */
import firebase from 'firebase'
import config from '../../src/config'
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

function createMark(lat, long, ifInitPoint , token) {


 var myLatLng = {lat: lat, lng: long};

 var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Ambulance Available'
  });

 marker.setMap(map);

  google.maps.event.addListener(marker, 'click', function() {
    // infowindow.setContent(place.name + '<br>' +place.place_id);
   
    //let mapUrl = `https://maps.google.com/maps?&ll=${lat},${long}`

    infowindow.setContent(`<a onClick="${sendNotification(token)}" target="_blank">Ambulance Available</a>`);
    infowindow.open(map, this);
    
  });
  if (!ifInitPoint) {
    markerGroup.push(marker) 
  }
}

function sendNotification(token){

 
 // const messaging = config.messaging();

   /*$.ajax({        
            type : 'POST',
            url : "https://fcm.googleapis.com/fcm/send",
            headers : {
              
                Authorization : 'key=' + 'BKPKHveGSAJUhUi9j3cf6wm9njxSxvsFsN7hFjIrQn-gm93G8Ssap8agIB93P89hUAdJvrUWY6t7rWYg_MvTaAQ'
                ,
                "Access-Control-Allow-Origin":"*"
            },
            contentType : 'application/json',
            dataType: 'json',
            crossDomain: true,
            data: JSON.stringify({"to": token, "notification": {"title":"Test","body":"Test"}}),
            success : function(response) {
                console.log(response);
            },
            error : function(xhr, status, error) {
                console.log(xhr.error);                   
            }
        });*/

   fetch(' https://fcm.googleapis.com/fcm/send', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
     Authorization : 'key='  +  'AAAA_hY5Gkc:APA91bHOB95WbcPXApPDuJLjDtW_iZXIkToo9IvVj6de5Kfs-epUIDDiJNfuK9-F-tBPEID-e94Wxf1mqU7A7PeLUl4pxIp0bB9hbxj5vZFMmgqDDMwJH601Ug7prfRTvj57KhdTMJSE'
  },
   dataType: 'json',
   crossDomain: true,
  body: JSON.stringify({
 
          "to": "fGO1ThXHM1I:APA91bFVbLpD9zy-eSdNWa4jp1e8H3DXgO0NqZJ1CH3ObPlwuHv__gBoc_X0Rde4XZRokm3sY0M7wkKvQRRJHBmkPnV1wMyC3mmTneNJeDTOPUxpBLAOVTrI6vcIaWNJjcVNRajK4OvG",
          "notification": {
              "body":"Exoume Provlima",
              "title":"Peristatiko"
              
          }
  })
})



  
}

export { initMap, getAreaName, nearbySearch , createMark }
