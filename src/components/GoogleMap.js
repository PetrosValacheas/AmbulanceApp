import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { initMap, getAreaName, nearbySearch } from '../helpers/GoogleMapHelper'

// const initPoint = {lat: 35.6795253, lng: 139.7589926}; 

// https://developers.google.com/places/supported_types?hl=ja
const placeTypes = {
  
    name : 'hospital',
    id : 'hospital'
}



class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLoadingMsg: "Get your Location",
      locationName : 'Getting Current Location',
      placeType: ""
    };
    this.initMap = this.initMap.bind(this)
    this.nearbySearch = this.nearbySearch.bind(this)
  }

  initMap() {
    navigator.geolocation.getCurrentPosition((position) => {
      let location = {lat:position.coords.latitude, lng:position.coords.longitude}
      initMap(document.getElementById('map'), location)
      getAreaName(location, (addr) => {
        console.log(addr);
        this.setState({locationName: addr.formatted_address});
      })
    }, () => { alert("Location is not Available") })
  }
  nearbySearch(e) {
    // alert(e.currentTarget.getAttribute('data-type'))

    let locationTypes = e.currentTarget.getAttribute('data-type')
    nearbySearch([locationTypes], 1000)
  }
  componentDidMount() {
  
   this.initMap()
  }

  render() {
    return (

    <div id="map_layout">
      <div className='Google-map-wrapper' >
        <ButtonGroup className='Map-button-group' style={{marginBottom:'20px'}}>
          <Button bsstyle="primary" id="locationButton"  bssize="large" onClick={this.initMap}>
          
            Current Location
          </Button>
          <Button bssize="large"  id="hospitalSearch" onClick={this.nearbySearch} data-type={placeTypes.name} >  Show Hospitals
            
          
          </Button>
        </ButtonGroup>
        <p className='location-name' style={{paddingBottom:'20px'}}>
          {this.state.locationName}{this.state.placeType}
        </p>
        <div id="map" style={{}}></div>
      </div>
    </div>  
    );
  }
}

export default GoogleMap;
