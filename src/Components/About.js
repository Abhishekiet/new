import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Coustom.css" 

class About extends Component{
  render(){
    return(
        <div className="text-center border border-dark m-4 bg-light About">
          <h1 className="m-4 shadow-lg">About Us</h1>
          <h4 className="m-4">
          POKEMONSERIES is an Indian fashion e-commerce company headquartered in Bhopal, India, India.
           The company was founded in 2020 to sell personalized gift items.
          </h4>
          <h3 className="m-4">
          Pokemonseries.com , is an Indian multinational technology company based in Seattle 
          that focuses on e-commerce,and selling quality product.
          </h3>
          
          <div className=" m-4">
               <h1 className="text-left m-3 display-4 Colour"><u >CONTACT US</u></h1>
     <strong>   <h4 className="text-left m-3">Just send us your questions or concerns by contacting us
                 and we will give you the help you need.</h4> </strong>
                <h3 className="text-left m-3">PH : 9131039984</h3>    
                <h3 className="text-left m-3">Address:
                Headoffice PokemonSeries,Bhopal,Madhya Pradesh,INDIA</h3>
                <hr></hr>
                <h5 classname="text-center">All Rights Reserved</h5>
          <h5 classname="text-center">@pokemonseries</h5>
    </div>
        </div> 
    )
}
}
export default About;