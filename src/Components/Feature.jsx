import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-lg-6">
                                <div className="circle"></div>
                                <div className="img-holder">
                                    <img src="../images/bg-dots.png" alt=""/>
                                    <img className="L-img img-fluid" src="../images/05.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="text-holder">
                                    <h1>Software House Features</h1>
                                    <p>Simply dummy text of the printing and typesetting 
                                        industry. Lorem Ipsum has been the industry's standard 
                                        dummy text ever since the 1500s, when an unknown printer 
                                        took a galley of type and scrambled it to make a type 
                                        specimen book.  
                                    </p>
                                    <div className="tic">
                                        <p>
                                            <span><i className="fas fa-check-double"></i></span>
                                            Simply dummy text of the Lorem Ipsum is printing and type setting industry.
                                        </p>
                                        <p>
                                            <span><i className="fas fa-check-double"></i></span>
                                            Simply dummy text of the Lorem Ipsum is printing and type setting industry.
                                        </p>
                                        <p>
                                            <span><i className="fas fa-check-double"></i></span>
                                            Simply dummy text of the Lorem Ipsum is printing and type setting industry.
                                        </p>
                                        <p>
                                            <span><i className="fas fa-check-double"></i></span>
                                            Simply dummy text of the Lorem Ipsum is printing and type setting industry.
                                        </p>
                                        <p>
                                            <span><i className="fas fa-check-double"></i></span>
                                            Simply dummy text of the Lorem Ipsum is printing and type setting industry.
                                        </p>
                                        <p>
                                            <span><i className="fas fa-check-double"></i></span>
                                            Simply dummy text of the Lorem Ipsum is printing and type setting industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature;