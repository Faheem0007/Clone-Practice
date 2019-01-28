import React,{Component} from "react";
import {Route} from "react-router-dom";
import Nav from "./Nav";
import Home from "./home";
import New from "./New";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
class App extends Component{
    render(){
        return (
            <div>
                <Nav/>
                <Route exact path="/" component={Home}/>
                <Route path="/new" component={New} />
                <Route path="/portfolio" component={ Portfolio } />
                <Footer/>
            </div>
         
        );
    }
}
export default App;