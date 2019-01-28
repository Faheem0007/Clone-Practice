import React, { Component } from 'react';

class What extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-lg-5 what-frist">
                                <div className="img-holder">
                                    <img src="../images/plant.png" alt=""/>
                                </div>
                                <h1>What is Techlution ?</h1>
                                <p>Simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever 
                                    since the 1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book.

                                    <br/>
                                    It has survived not only five centuries, but also the leap into electronic 
                                    typesetting, remaining essentially unchanged. It was 
                                    popularised in the 1960s with the release of Letraset sheets 
                                    containing Lorem Ipsum passages, and more recently with desktop publishing 
                                    software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <h3>Discover our best ever services.</h3>
                                <button>Click Here</button>
                            </div>
                            <div className="col-lg-6 what-snd">
                                <div className="circle"></div>
                                <div className="img-holder">
                                    <img className="bg-dots" src="../images/bg-dots.png" alt=""/>
                                    <img className="sm-dots" src="../images/sm-dots.png" alt=""/>
                                    <img className="img-leptop" src="../images/leptop.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default What;