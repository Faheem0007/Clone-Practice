import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 content-portfolio">
                            <h1>Portfolio</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil odit inventore modi optio excepturi, reprehenderit doloribus dolor iusto rem atque, nisi incidunt repudiandae temporibus?</p>
                        </div>
                        <div className="col-lg-12">
                            <div className="col-lg-4">
                                <div className="imga">
                                    <div className="port">
                                        <img src="../images/p1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="imga">
                                    <div className="port">
                                        <img src="../images/p2.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="imga">
                                    <div className="port">
                                        <img src="../images/p1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button>More</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;