import React,{Component} from 'react';
import Main from './Main';
import About from './About';
import What from './What';
import Feature from './Feature';
import Screenshot from './Screenshot';
import Ask from './Ask';
import Pricing from './Pricing';

class Home extends Component{
    render(){
        return (
            <div>
                <Main/>
                <About/>
                <What/>
                <Feature/>
                <Screenshot/>
                <Ask/>
                <Pricing/>
            </div>
        )
    }
}
export default Home;