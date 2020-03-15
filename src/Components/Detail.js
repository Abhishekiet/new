import React,{Component} from 'react';
import Card from './Card'
import ReactDOM from 'react-dom';
import "./Coustom.css"
import logo from "../Images/17.jpg"

class Detail extends Component{
    constructor(props){
      super(props);

    }
    render(){
        return(
            <div classname>
              <div className="row m-3">
                  <div className="col-md-5 ">
                    <img src= { process.env.PUBLIC_URL+ this.props.image} width="400px"/>
                  </div>
                     <div className="col-md-5 m-2">
                         
                       <h1 className="display-2 rounded Red"><u>{this.props.name}</u></h1>
                       <p className="display-4 rounded Blue">PRODUCT INFORMATION -</p>
                       <h2>{this.props.info}</h2>    
                     </div>
              </div>
            </div>
        )
    }
}
export default Detail;