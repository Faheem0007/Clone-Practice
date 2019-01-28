import React, { Component } from 'react';
import $ from 'jquery';

class Screenshot extends Component {

    componentDidMount(){

        $(document).ready(function(){
            var flag = 1;
            $('.next').on('click',function(){
                if(flag == 0){
                        $('.slide1').css('z-index','999');
                        $('.slide2').css('z-index','9');
                        $('.slide3').css('z-index','9');
                        $('.slide1').css('transform',"translate(0) scale(1.1)");
                        $('.slide2').css('transform',"translate(-12vw) scale(.9)");
                        $('.slide3').css('transform',"translate(12vw) scale(.9)");
                        flag = 1;
                }else if(flag == 1){
                    $('.slide3').css('z-index','999');
                    $('.slide2').css('z-index','9');
                    $('.slide1').css('z-index','9');
                    $('.slide3').css('transform',"translate(0) scale(1.1)");
                    $('.slide1').css('transform',"translate(-12vw) scale(.9)");
                    $('.slide2').css('transform',"translate(12vw) scale(.9)");
                    console.log('1')

                    flag = 2;


                }else if(flag == 2){
                    $('.slide2').css('z-index','999');
                    $('.slide3').css('z-index','9');
                    
                    $('.slide1').css('z-index','9');
                    $('.slide2').css('transform',"translate(0) scale(1.1)");
                    $('.slide3').css('transform',"translate(-12vw) scale(.9)");
                    $('.slide1').css('transform',"translate(12vw) scale(.9)");
                    console.log('2')
                    flag = 0;


                }
            })

            $('.prev').on('click',function(){
                if(flag == 0){
                    $('.slide1').css('z-index','999');
                    $('.slide2').css('z-index','9');
                    $('.slide3').css('z-index','9');
                    $('.slide1').css('transform',"translate(0) scale(1.1)");
                    $('.slide2').css('transform',"translate(-12vw) scale(.9)");
                    $('.slide3').css('transform',"translate(12vw) scale(.9)");
                    flag = 2;

                }else if(flag == 1){
                    $('.slide3').css('z-index','999');
                    $('.slide2').css('z-index','9');
                    $('.slide1').css('z-index','9');
                    $('.slide3').css('transform',"translate(0) scale(1.1)");
                    $('.slide1').css('transform',"translate(-12vw) scale(.9)");
                    $('.slide2').css('transform',"translate(12vw) scale(.9)");
                    flag = 0;


                }else if(flag == 2){
                    $('.slide2').css('z-index','999');
                    $('.slide1').css('z-index','9');
                    $('.slide3').css('z-index','9');
                    $('.slide2').css('transform',"translate(0) scale(1.1)");
                    $('.slide3').css('transform',"translate(-12vw) scale(.9)");
                    $('.slide1').css('transform',"translate(12vw) scale(.9)");
                    flag = 1;
                }
            })
                
        })
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 bg">
                            <img src="../images/07.jpg" alt=""/>
                            <div className="overlay">
                                <h1>Great Screenshots</h1>
                                <div className="line"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                     adipisicing elit. Libero assumenda placeat voluptas soluta.
                                </p>

                                <div className="next"><i className="fas fa-chevron-right"></i></div>
                                <div className="prev"><i className="fas fa-chevron-left"></i></div>
                                <div className="slider">
                                    <div className="slide1">
                                        <img src="../images/slide1.jpg" alt=""/>
                                    </div>
                                    
                                    <div className="slide2">
                                        <img src="../images/s2.jpg" alt=""/>
                                    </div>
                                    
                                    <div className="slide3">
                                        <img src="../images/s3.jpg" alt=""/>
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

export default Screenshot;