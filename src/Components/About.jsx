import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 abt-content">
                            <h1>How it Works</h1>
                            <div className="line"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley,
                            </p>
                        </div>
                        <div className="col-lg-12">
                            <div className="col-lg-4 col-md-4">
                                <div className="text-holder">
                                    <div className="icon">
                                        <i className="fas fa-address-card"></i>
                                    </div>
                                    <div className="detials">
                                        <h1>FULLY RESPONSIVE</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing 
                                            and typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown printer took a galley,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="text-holder">
                                    <div className="icon">
                                        <i className="fas fa-book"></i>
                                    </div>
                                    <div className="detials">
                                        <h1>WELL DOCUMENTED</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing 
                                            and typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown printer took a galley,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="text-holder">
                                    <div className="icon">
                                        <i className="fas fa-magic"></i>
                                    </div>
                                    <div className="detials">
                                        <h1>EASY TO USE</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing 
                                            and typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown printer took a galley,
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

export default About;