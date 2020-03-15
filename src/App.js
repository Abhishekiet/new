import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Signup from "./Components/Signup"
import Cart from "./Components/Cart"
import Ourproduct from './Components/Ourproducts';
import Card from './Components/Card'
import Data from "./Components/Data"
import Sucess from "./Components/Sucess"
import Detail from "./Components/Detail"

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      Data:Data,
      Cart:[],
      DetailImage:"",
      DetailInfo:"",
      DetailName:""
    }
  }

  addtocart=(id)=>{
   const Selecteditem=this.state.Data.find(item=>item.id===id)
   const Mycart=[...this.state.Cart,Selecteditem]
   this.setState({Cart:Mycart})
   console.log(Selecteditem);
  }

  knowmore=(id)=>{
   const Selecteditem=this.state.Data.find(item=>item.id===id)
   console.log(Selecteditem)
    this.setState({
       DetailImage:Selecteditem.image,
       DetailInfo:Selecteditem.info,
       DetailName:Selecteditem.name,
    })
  }
  
   
  render(){
    return( 
        
         <div>
        <Navbar/>

        <Switch>
          <Route path="/ourproducts" component={Ourproduct}><Ourproduct Data={this.state.Data} 
          addtocart={this.addtocart} knowmore={this.knowmore}/> </Route>
          <Route path="/about" component={About}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/cart" component={Cart}> <Cart Cart={this.state.Cart}/> </Route>
          <Route path="/detail" component={Detail}> <Detail image={this.state.DetailImage}
           info={this.state.DetailInfo} name={this.state.DetailName}/> </Route>
          <Route path="/Sucess"component={Sucess} />
         </Switch>

         </div>   
      
    )
  }
}
export default App;