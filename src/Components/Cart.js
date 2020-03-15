import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import Total from './Sucess'

class Cart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const length =this.props.Cart.length
        var Total =0;

      var Show =this.props.Cart.map(item=> <Card name={item.name} rate={item.rate} image={item.image} id={item.id}/>)
      var Sum = this.props.Cart.map(item=>item.rate)
      
      for(var i=0;i<length;i++)
       {
          Total=Total+Sum[i]
       }
       

      if (length===0)
      {
          Show= <h1 className="display-2 m-3 Blue">Your Cart Is Empty ...</h1>
      }  
      return(
            <div>
               <div className="row m-2">
                {Show}
               </div>
         
          <h1 className="display-3 text-center m-3"><strong> Total Cart Value - </strong></h1> 
          <h1 className="display-4 text-center m-3"><strong> ₹ {Total} </strong></h1>
         
            </div>
        )
    }
}
export default Cart;