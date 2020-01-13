import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class HelpLine extends Component{

	constructor(props) {
    super(props);
  }

  componentDidMount() {
  
   
  }

  render(){


  	return(

  		<main id = "help">
  			<h1>HelpLine</h1>
  			
  	
  				<table>
  					<thead>
    					<tr>
     						<th>Νοσοκομείο</th>
      						<th>Διεύθυνση</th>
      						<th>Περιοχή</th>
     					    <th>Τηλέφωνο</th>
    					</tr>
  					</thead>
  					<tbody>
   						 <tr>
      						<td data-column="Νοσοκομείο">401 Γενικό Στρατιωτικό Νοσοκομείο Αθηνών</td>
      						<td data-column="Διεύθυνση">Μεσογείων 138</td>
      						<td data-column="Περιοχή">ΑΘΗΝΑ</td>
     						<td data-column="Τηλέφωνο">21 0749 4000</td>
   						 </tr>
   						 <tr>
      						<td data-column="Νοσοκομείο">«Αγία Σοφία» – Περιφερειακό Γενικό Νοσοκομείο Παίδων</td>
      						<td data-column="Διεύθυνση">Σαλώνων 20-22</td>
      						<td data-column="Περιοχή">ΑΘΗΝΑ</td>
     						<td data-column="Τηλέφωνο">21 3201 3000</td>
   						 </tr>
   						  <tr>
      						<td data-column="Νοσοκομείο">«Αγιος Σάββας» – Περιφερειακό Αντικαρκινικό-Ογκολογικό</td>
      						<td data-column="Διεύθυνση"> Αλεξάνδρας 171</td>
      						<td data-column="Περιοχή">ΑΘΗΝΑ</td>
     						<td data-column="Τηλέφωνο">21 0640 9000</td>
   						 </tr>
   						  <tr>
      						<td data-column="Νοσοκομείο">«Αγλαϊα Κυριακού» – Περιφερειακό Γενικό Νοσοκομείο Παίδων</td>
      						<td data-column="Διεύθυνση">Λεβαδείας </td>
      						<td data-column="Περιοχή">ΑΘΗΝΑ</td>
     						<td data-column="Τηλέφωνο">21 3200 9000</td>
   						 </tr>
   						  <tr>
      						<td data-column="Νοσοκομείο">«Αλεξάνδρα» – Περιφερειακό Γενικό Νοσοκομείο Αθηνών </td>
      						<td data-column="Διεύθυνση">Λούρου 4-2 </td>
      						<td data-column="Περιοχή">ΑΘΗΝΑ</td>
     						<td data-column="Τηλέφωνο">21 0338 1100</td>
   						 </tr>
   						  <tr>
      						<td data-column="Νοσοκομείο"> «Αμαλία Φλέμιγκ» – Νομαρχιακό Γενικό Νοσοκομείο Αθηνών </td>
      						<td data-column="Διεύθυνση"> 25ης Μαρτίου 14</td>
      						<td data-column="Περιοχή">Μελίσσια </td>
     						<td data-column="Τηλέφωνο">21 3200 3200</td>
   						 </tr>
   						 <tr>
      						<td data-column="Νοσοκομείο"> «Ανδρέας Συγγρός» – Νοσοκομείο  </td>
      						<td data-column="Διεύθυνση">Ι. Δραγούμη 5 </td>
      						<td data-column="Περιοχή"> ΑΘΗΝΑ</td>
     						<td data-column="Τηλέφωνο"> 21 0726 5100</td>
   						 </tr>
   						  <tr>
      						<td data-column="Νοσοκομείο"> «Ασκληπιείο Βούλας» – Περιφερειακό Γενικό Νοσοκομείο </td>
      						<td data-column="Διεύθυνση">Λεωφ. Βασιλέως Παύλου 1 </td>
      						<td data-column="Περιοχή"> Βούλα </td>
     						<td data-column="Τηλέφωνο"> 21 3216 3000 </td>
   						 </tr>
   						 <tr>
      						<td data-column="Νοσοκομείο"> «Γ. Γεννηματάς» – Περιφερειακό Γενικό Νοσοκομείο Αθηνών </td>
      						<td data-column="Διεύθυνση">  Λεωφ. Μεσογείων 154 </td>
      						<td data-column="Περιοχή"> ΑΘΗΝΑ </td>
     						<td data-column="Τηλέφωνο">  21 3203 2000 </td>
   						 </tr>
   						  <tr>
      						<td data-column="Νοσοκομείο"> «Ευαγγελισμός» – Περιφερειακό Γενικό Νοσοκομείο Αθηνών</td>
      						<td data-column="Διεύθυνση"> Υψηλάντου 45-47  </td>
      						<td data-column="Περιοχή"> ΑΘΗΝΑ </td>
     						<td data-column="Τηλέφωνο"> 21 3204 1000 </td>
   						 </tr>
   						   <tr>
      						<td data-column="Νοσοκομείο">«Θριάσιο» Γενικό Νοσοκομείο Ελευσίνας </td>
      						<td data-column="Διεύθυνση"> Λεοφ. Γ. Γεννηματά  </td>
      						<td data-column="Περιοχή"> Ελευσίνα </td>
     						<td data-column="Τηλέφωνο"> 21 3202 8000 </td>
   						 </tr>
   						  <tr>
      						<td data-column="Νοσοκομείο"> «Ιπποκράτειο» – Περιφερειακό Γενικό Νοσοκομείο Αθηνών</td>
      						<td data-column="Διεύθυνση"> Λεωφ. Βασιλίσσης Σοφίας 114</td>
      						<td data-column="Περιοχή">  ΑΘΗΝΑ</td>
     						<td data-column="Τηλέφωνο">  21 3208 8000 </td>
   						 </tr>
   						   <tr>
      						<td data-column="Νοσοκομείο"> «ΚΑΤ» – Περιφερειακό Γενικό Νοσοκομείο Αττικής</td>
      						<td data-column="Διεύθυνση">Νίκης 2 </td>
      						<td data-column="Περιοχή"> Κηφισιά  </td>
     						<td data-column="Τηλέφωνο"> 21 3208 6000  </td>
   						 </tr>

   						  <tr>
      						<td data-column="Νοσοκομείο">«Λαϊκό» – Περιφερειακό Γενικό Νοσοκομείο Αθηνών</td>
      						<td data-column="Διεύθυνση"> Αγίου Θωμά 17 </td>
      						<td data-column="Περιοχή"> ΑΘΗΝΑ  </td>
     						<td data-column="Τηλέφωνο"> 21 3206 0800  </td>
   						 </tr>
   						 <tr>
      						<td data-column="Νοσοκομείο">«Ωνάσειο» Καρδιοχειρουργικό Κέντρο</td>
      						<td data-column="Διεύθυνση"> Λεωφ. Ανδρέα Συγγρού 356 </td>
      						<td data-column="Περιοχή">  Καλλιθέα  </td>
     						<td data-column="Τηλέφωνο"> 21 0949 3000 </td>
   						 </tr>
   						  <tr>
      						<td data-column="Νοσοκομείο">«Τζανειο» – Περιφερειακό Γενικό Νοσοκομείο Πειραιά </td>
      						<td data-column="Διεύθυνση">Ζαννή & Αφεντούλη  </td>
      						<td data-column="Περιοχή">  Πειραιάς  </td>
     						<td data-column="Τηλέφωνο"> 21 3208 1000 </td>
   						 </tr>
   						 <tr>
      						<td data-column="Νοσοκομείο">«Σωτηρία» – Περιφερειακό Γενικό Νοσοκομείο Νοσημάτων Θώρακος Αθηνών </td>
      						<td data-column="Διεύθυνση"> Μεσογείων 152</td>
      						<td data-column="Περιοχή">  ΑΘΗΝΑ  </td>
     						<td data-column="Τηλέφωνο">21 0776 3100 </td>
   						 </tr>
   						 <tr>
      						<td data-column="Νοσοκομείο">«Σισμανόγλειο» – Περιφερειακό Γενικό Νοσοκομείο Αττικής </td>
      						<td data-column="Διεύθυνση"> Σισμανόγλειου 37 </td>
      						<td data-column="Περιοχή"> Μαρούσι    </td>
     						<td data-column="Τηλέφωνο">  21 3205 8001</td>
   						 </tr>
    						
  					</tbody>
			</table>
		

  	</main>
  	);
  }





}

export default HelpLine