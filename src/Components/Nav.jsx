import React,{Component} from "react";
import {Link} from "react-router-dom";

class Nav extends Component{
    render(){
        return (
            <div>
                <nav className="nav">
                    <div className="LOGO"> <img src="../images/logo.png" alt=""/> </div>

                    <ul>
                        <li>
                           <Link to="/">Home</Link> 
                        </li>
                        <li>
                           <Link to="/portfolio">Portfolio</Link> 
                        </li>
                        <li>Contact US</li>
                        <li>About</li>
                        <li><button>Hire</button></li>
                    </ul>
                </nav>
            </div>
        );
        
    }    
}

export default Nav;