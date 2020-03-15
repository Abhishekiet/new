import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from "../Images/weblogo.png"
import {Route,Link,BrowserRouter} from "react-router-dom" 
import "./Coustom.css" 

class Navbar extends Component{
 render(){
     return(
         <div className="container-fluid shadow text-center ">
            <div className="row m-2">  
                <div className="col-md-3">
                <img src={logo}/>
                </div>
                     <div className="col-md-3">
                     <Link to="/OurProducts" className="Navbarcss m-4">  <h4>OUR PRODUCTS</h4>  </Link>
                     </div>
                       <div className="col-md-2 ">
                    <Link to="/Cart" className="Navbarcss m-4">   <h4>CART</h4> </Link>
                   </div>
                   <div className="col-md-2 ">
                     <Link to="/About" className="Navbarcss m-4">    <h4>ABOUT US</h4>      </Link>
                       </div>
                   <div className="col-md-2 ">
                    <Link to="/signup" className="Navbarcss m-4">   <h4>SIGN UP</h4> </Link>
                   </div>
            </div>
         </div>

     )
 }
}
export default Navbar