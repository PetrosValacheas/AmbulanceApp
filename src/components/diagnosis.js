import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


  class Diagnosis extends Component{

  	constructor(props) {
   	 super(props);
         this.state = {
      	 contacts: [],
      	 selectedIds: []
    	};

    	this.onCheckChange = this.onCheckChange.bind(this)
	}

 	componentDidMount() {
        fetch('https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBldHJvc3ZhMTJAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2MTEwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE5LTExLTIzIiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1NzUxMzUwNDgsIm5iZiI6MTU3NTEyNzg0OH0.FwO8-Pt7Xn4B_l8Hl29GNL5HarbXuV9v5RXTBoHsuAU&language=en-gb&format=json')
        .then(res => res.json())
        .then((data) => {
        	this.setState({ contacts: data })
        })
        .catch(console.log)
    }

    onCheckChange(e){

    	let id = e.currentTarget.getAttribute('id')

    	const {selectedIds} = this.state.selectedIds;

    	console.log(this.state.selectedIds);
   

    	if(e.target.checked===true){
    		console.log("ID: "+id);

    		this.setState(prevState => ({
   					selectedIds: [...prevState.selectedIds,id]
			}))
    	

    	}else{

    		let array = [...this.state.selectedIds];
    		let index = array.indexOf(id);
    		console.log("iNDEX:"+index);
    		if(index!=-1){

    			array.splice(index,1);
    			this.setState({selectedIds: array})
    		}
	
    	}

    	this.setState({
    		[e.target.name]: e.target.checked
    	})

    }
    
  	render(){
  		return (

  		  <div className="symptoms">
          <div className="SymptomsContainer">

              <h1>Symptom List</h1>
            
          </div>
          {this.state.contacts.map((contact) => (

          	 <div className="card">
              <div className="card-body">
                <h2 className="card-title">{contact.Name}</h2>

                <input type="checkbox"  className="symptomsCheckbox" id={contact.ID} onChange={this.onCheckChange}/>

               
               </div>
             </div>
           
          ))}
        </div>

  		   
  		);
  	}
}

export default Diagnosis;

