import React,{Component} from 'react';
import Card from './Card'
import ReactDOM from 'react-dom';
import "./Coustom.css"

class Ourproduct extends Component{
    constructor(props){
        super(props);
    }
    render(){
        
        var Show =this.props.Data.map(item => <Card name={item.name} rate={item.rate} image={item.image} id={item.id}
        addtocart={()=>this.props.addtocart(item.id)} knowmore={()=>this.props.knowmore(item.id)}/>)
        return(
            <div >
               
                <h1 className="display-2 rounded text-center m-3 "><u className="Red"> Our </u>
                 <u className="Blue">Products</u></h1> 
              <div className="m-2"> 
              
                   {Show}
               </div> 
            </div>
        )
    }
}
export default Ourproduct;