import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 bg-primary nopadding">
                            <div className="col-lg-12 nopadding">
                                <img className="img-fluid" src="../images/bg1.jpg" alt="" style={{width:'100%',height:'85vh'}}/>
                                <div className="overlay">
                                <img className="img-fluid" src="../images/download.png" alt="" style={{width:'100%'}}/>                                
                                </div>
                            </div>
                            <div className="col-lg-12 content">
                                <div className="col-lg-6 col-md-6 con">
                                    <div className="circle"></div>
                                    <h1>PROVIDES TO MAKE BETTER <strong> SOFTWARE</strong></h1>
                                    <p className="col-lg-10"> 
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an 
                                        unknown printer took a galley,
                                    </p>
                                    <button>Download</button>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-11 img">
                                    <div className="circle1"></div>
                                    <img src="../images/cm.png" alt="" className="img-fluid" style={{width:'100%'}}/>
                                    <i className="fas fa-play hidden-md hidden-sm hidden-xs"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        );
    }
}

export default Main;