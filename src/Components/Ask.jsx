import React, { Component } from 'react';
import $ from "jquery";

class Ask extends Component {

    componentDidMount(){
        $(document).ready(function(){
            $('li.ans').hide()
            $('li.ans').first().show()
            $('li.q').on('click',function(){
                $(this).next()
                    .toggle('.show(100)')
                    .animate({
                        'display': 'block'
                    })
                    .siblings('li.ans')
                    .slideUp();
            })
        })
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 content">
                            <h1>Ask Questions Breifly</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga accusamus, esse laboriosam veniam vitae molestiae.</p>
                        </div>
                        <div className="col-lg-12">
                            <div className="col-lg-6">
                                <div className="circle"></div>
                                <div className="img-holder">
                                    <img className="plant" src="../images/plant.png" alt=""/>
                                    <img src="../images/sm-dots.png" alt="" style={{position:"absolute",top:'200px',left:'0px',zIndex:'-1'}}/>
                                    <img className="L-img img-fluid" src="../images/screen.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                               <ul className="question">
                                    <li className="q"><h3>how are you</h3><span></span></li>
                                    <li className="ans"> <img src="../images/01.jpg" alt=""/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab rerum facere ipsum recusandae nobis laboriosam dolores dolorum. Fugiat maxime ducimus dolorum corrupti veniam incidunt repellat amet inventore? Labore, praesentium.</p></li>
                                
                                    <li className="q"><h3>how are you</h3><span></span></li>
                                    <li className="ans"> <img src="../images/01.jpg" alt=""/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab rerum facere ipsum recusandae nobis laboriosam dolores dolorum. Fugiat maxime ducimus dolorum corrupti veniam incidunt repellat amet inventore? Labore, praesentium.</p></li>
                                
                                    <li className="q"><h3>how are you</h3><span></span></li>
                                    <li className="ans"> <img src="../images/01.jpg" alt=""/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab rerum facere ipsum recusandae nobis laboriosam dolores dolorum. Fugiat maxime ducimus dolorum corrupti veniam incidunt repellat amet inventore? Labore, praesentium.</p></li>
                                
                                    <li className="q"><h3>how are you</h3><span></span></li>
                                    <li className="ans"> <img src="../images/01.jpg" alt=""/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab rerum facere ipsum recusandae nobis laboriosam dolores dolorum. Fugiat maxime ducimus dolorum corrupti veniam incidunt repellat amet inventore? Labore, praesentium.</p></li>
                                
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ask;