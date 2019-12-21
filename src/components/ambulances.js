import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { initMap, getAreaName , createMark} from '../helpers/GoogleMapHelper'

import firebase from 'firebase'
import config from '../../src/config'


	
class Ambulances extends Component{


    constructor(props) {
      
   		super(props);
         	this.state = {

      	 	points: [],
      	 	keys: [],
          tokens: []
    	};
    	 this.initMap = this.initMap.bind(this)
    	 this.ambulancesAvailable = this.ambulancesAvailable.bind(this)
	}

	 componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let ambulanceRef = config.database().ref('Ambulances Available');
    let tokenRef = config.database().ref('Ambulance Tokens');
    ambulanceRef.on('child_added', snapshot => {

      /* Update React state when message is added at Firebase Database */

      	this.setState(prevState => ({
   					keys: [...prevState.keys,snapshot.key]
			}))

      	this.setState(prevState => ({
   					points: [...prevState.points,snapshot.child("l").val()]
			}))
      //this.setState({points: snapshot.child("l").val()}); 
     // this.setState({keys: snapshot.key}); 

    })
     tokenRef.on('child_added', snapshot => {

      /* Update React state when message is added at Firebase Database */

        this.setState(prevState => ({
            tokens: [...prevState.tokens,snapshot.val()]
      }))
      //this.setState({points: snapshot.child("l").val()}); 
     // this.setState({keys: snapshot.key}); 

    })

    this.initMap()

  }

   initMap() {
   
   
      navigator.geolocation.getCurrentPosition((position) => {
      let location = {lat:position.coords.latitude, lng:position.coords.longitude}
      initMap(document.getElementById('map'), location)
    }, () => { alert("Location is not Available") })
   
  }

   ambulancesAvailable() {
   
   //console.log(this.state.keys);
   //console.log(this.state.points);
   for(var i =0;i<this.state.points.length;i++){

    //console.log(this.state.points[i][0]);
    //console.log(this.state.points[i][1]);
    let lat = this.state.points[i][0];
    let long = this.state.points[i][1];
    let token = this.state.tokens[i];
    
    createMark(lat,long,true , token);
   }

  }

	
	render(){

		return(

			<div id="map_layout">
     			 <div className='Google-map-wrapper' >
       				 <ButtonGroup className='Map-button-group' style={{marginBottom:'20px'}}>
          
        			  <Button bsstyle="primary" id="locationButton"  bssize="large" onClick={this.ambulancesAvailable}>
           					Ambulances  
         				 </Button>
       				 </ButtonGroup>
       
        		<div id="map" style={{}}></div>
      		</div>
    	</div>  

		);

	}
}

export default Ambulances;