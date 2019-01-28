import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Pricing extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-2">
                                <h1>Meet Team</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illo, facere accusamus asperiores, illum, natus veritatis ea odit repudiandae rem eius voluptates laboriosam repellat culpa?</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="col-lg-3 npadding">
                                        <div className="team-member">
                                            <div className="img-holder">
                                                <img src="../images/04.jpg" alt=""/>
                                                <div className="overlay">
                                                    <div className="icon col-lg-1">
                                                        <i className="fab fa-facebook-f"></i>
                                                        <i className="fab fa-github"></i>
                                                        <i className="fab fa-twitter"></i>
                                                        <i className="fab fa-google"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3>Faraz Nadeem</h3>
                                            <h6>CEO/Founder</h6>
                                            <Link to="/new">Read more...</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 npadding">
                                        <div className="team-member">
                                            <div className="img-holder">
                                                <img src="../images/04.jpg" alt=""/>
                                                <div className="overlay">
                                                    <div className="icon col-lg-1">
                                                        <i className="fab fa-facebook-f"></i>
                                                        <i className="fab fa-github"></i>
                                                        <i className="fab fa-twitter"></i>
                                                        <i className="fab fa-google"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3>Faraz Nadeem</h3>
                                            <h6>CEO/Founder</h6>
                                            <Link to="/new">Read more...</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 npadding">
                                        <div className="team-member">
                                            <div className="img-holder">
                                                <img src="../images/04.jpg" alt=""/>
                                                <div className="overlay">
                                                    <div className="icon col-lg-1">
                                                        <i className="fab fa-facebook-f"></i>
                                                        <i className="fab fa-github"></i>
                                                        <i className="fab fa-twitter"></i>
                                                        <i className="fab fa-google"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3>Faraz Nadeem</h3>
                                            <h6>CEO/Founder</h6>
                                            <Link to="/new">Read more...</Link>
                                        </div>
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

export default Pricing;