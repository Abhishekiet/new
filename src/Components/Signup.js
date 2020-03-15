import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom"
import "./Coustom.css" 

class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            name:null,
            mail:null,
            contact:null,
            address:null,
        }
    }
    
    handlename=(e)=>{
        this.setState({name:e.target.value})
    }
    handlemail=(e)=>{
        this.setState({mail:e.target.value})
    }
    handlecontact=(e)=>{
        this.setState({contact:e.target.value})
    }
    handleaddress=(e)=>{
        this.setState({address:e.target.value})
    }
    handlesubmit=(e)=>{
        console.log("called")
        this.setState ({
            name:"",
            mail:"",
            contact:"",
            address:"",
        })
    }
    render(){
    return(
    <div className="text-center border border-dark m-4 bg-light">
            <h1 className="text-center m-3 display-2 Underline"> <strong>Sign up</strong> </h1> 
        <h4 className="text-left m-3 shadow-lg rounded Colour">Sign up by just sharing some information... </h4>
      <label className="m-3">  <h5 className="display-4">Your Full Name :</h5> </label>
        <input type="text" className="Signup" value={this.state.name} onChange={this.handlename} placeholder="Type your name"/> <br></br>
        <label className="m-3">  <h4 className="display-4">Your E-Mail :</h4> </label>
        <input type="text" className="Signup" value={this.state.mail} onChange={this.handlemail} placeholder="e.g abc@gmail.com"/> <br></br>
        <label className="m-3">  <h4 className="display-4">Your Contact No :</h4> </label>
        <input type="text" className="Signup" value={this.state.contact} onChange={this.handlecontact} placeholder="e.g 1234567890"/> <br></br>
        <label className="m-3">  <h4 className="display-4">Your Address :</h4> </label>
        <input type="text" className="Signup" value={this.state.address} onChange={this.handleaddress} placeholder="Address with pin code"/>
        <br></br>
      <Link to="/Sucess">  <button className="btn btn-primary m-3 p-3 Signup" onClick={this.handlesubmit}><h1>SIGN UP</h1> </button> </Link>
    </div>
    )
}
}
export default Signup;