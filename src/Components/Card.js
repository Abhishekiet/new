import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import "./Coustom.css"  

class Card extends Component{

  render(){
        return( 
        <div className=" card bg-light border border-primary Cardcss m-3 p-2 Float">
        
          <img src={  process.env.PUBLIC_URL+ this.props.image} />
          <div className="row m-2">
        <Link to="/detail">  <button className="p-1 m-2 btn btn-info" onClick={this.props.knowmore} >Know More </button> </Link>
          <button className="p-1 m-2 btn btn-warning" onClick={this.props.addtocart}> Add to Cart</button>
          <div className="row m-1">
            <hr></hr>
            <h5 className="text-center"> {this.props.name} - ₹ {this.props.rate} </h5>
          </div>
          </div>
        </div>
   )
    
    }
} 
export default Card;