import React, { Component } from 'react';
import $ from 'jquery';
import {data} from "./Data";
class New extends Component {

componentDidMount(){
$(document).ready(function(){
$('.about').css({'left':'100%','opacity':'1'});
$('.m1').css({'color':'#2eca7f'})

})

$('.m1').on('click',function(){
$('.about').css({'left':'100%','opacity':'1'});
$('.resume').css({'left':'50%','opacity':'0'});
$('.info').css({'left':'50%','opacity':'0'});
$('.bog').css({'left':'50%','opacity':'0',});

$('.m1').css({'color':'#2eca7f'})
$('.m2').css({'color':'#000'})
$('.m3').css({'color':'#000'})
$('.m4').css({'color':'#000'})

});

$('.m2').on('click',function(){
    $('.about').css({'left':'50%','opacity':'0'});
    $('.resume').css({'left':'100%','opacity':'1'});
    $('.info').css({'left':'50%','opacity':'0'});
    $('.bog').css({'left':'50%','opacity':'0'});

    
    $('.m2').css({'color':'#2eca7f'})
    $('.m4').css({'color':'#000'})
    $('.m3').css({'color':'#000'})
    $('.m1').css({'color':'#000'})

})

$('.m3').on('click',function(){
    $('.about').css({'left':'50%','opacity':'0'});
    $('.resume').css({'left':'50%','opacity':'0'});
    $('.bog').css({'left':'100%','opacity':'1'});
    $('.info').css({'left':'50%','opacity':'0'});
    
    $('.m3').css({'color':'#2eca7f'})
    $('.m2').css({'color':'#000'})
    $('.m4').css({'color':'#000'})
    $('.m1').css({'color':'#000'})
})

$('.m4').on('click',function(){
    $('.about').css({'left':'50%','opacity':'0'});
    $('.resume').css({'left':'50%','opacity':'0'});
    $('.info').css({'left':'100%','opacity':'1'});
    $('.bog').css({'left':'50%','opacity':'0'});

    
    $('.m4').css({'color':'#2eca7f'})
    $('.m2').css({'color':'#000'})
    $('.m3').css({'color':'#000'})
    $('.m1').css({'color':'#000'})
})

$('.contact').click(function(){
    $('.about').css({'left':'50%','opacity':'0'});
    $('.resume').css({'left':'50%','opacity':'0'});
    $('.info').css({'left':'100%','opacity':'1'});
    $('.bog').css({'left':'50%','opacity':'0'});

    
    $('.m4').css({'color':'#2eca7f'})
    $('.m2').css({'color':'#000'})
    $('.m3').css({'color':'#000'})
    $('.m1').css({'color':'#000'})

})
}

render() {

    const response = data.map(obj=>{
        return (<div>
            
    <div className="menu">
        <div className="m1">
            <i className="fa fa-home"></i>
            <br />
            <label>Home</label>
        </div>

        <div className="m2">
            <i className="fa fa-address-book"></i>
            <br />
            <label>Resume</label>
        </div>

        <div className="m3">
            <i className="fa fa-briefcase"></i>
            <br/>
            <label>Works</label>
        </div>
        <div className="m4">
            <i className="fa fa-ban"></i>
            <br />
            <label>Contact</label>
        </div>
    </div>


    <div className="card">
        <div className="img">
            <img src="../images/blog2.jpg" alt="" />
        </div>
        <div className="profile_img">
            <img src="../images/1.jpg" alt="" />
        </div>
        <div className="details">
            <h1>{obj.name}
                <br />
                <small style={{fontWeight:"lighter",fontSize:'18px',position:'absolute',left:'10%',top:'70px',color:'#2eca7f'}}>
                Email:{ obj.email}</small>
            </h1>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-github"></i>
        </div>
        <div className="contact">
            <h1>Contact me</h1>
        </div>

        <div className="about">
            <h3>About me</h3>

            <hr className="hr" />

            <p className="p">I am Faheem Saleem, web designer from Lahore, Pakistan. I have rich experience in web site
                design and building and
                customization, also I am good at wordpress.
                I love to talk with you about our unique.
            </p>

            <div className="age">
                Age.....25
                <br />
                <br />
                Freelance....Avaiable
            </div>
            <div className="add">
                RESIDENCE.....Lahore
                <br />
                <br />
                ADDRESS ....Lahore, Pakistan
            </div>
            <div className="service">
                <h3>My Service</h3>

                <div className="sdiv">
                    <i className="fa fa-code"></i>
                    <h3>WEB DEVELOPMENT</h3>
                    <p>Modern and mobile-ready
                        website that will help you
                        reach all of your marketing.
                    </p>
                </div>



                <div className="sdiv">
                    <i className="fa fa-ban"></i>
                    <h3>WEB Design</h3>
                    <p>Modern and mobile-ready
                        website that will help you
                        reach all of your marketing.
                    </p>
                </div>



                <div className="sdiv">
                    <i className="fa fa-code"></i>
                    <h3>WEB DEVELOPMENT</h3>
                    <p>Modern and mobile-ready
                        website that will help you
                        reach all of your marketing.
                    </p>
                </div>



                <div className="sdiv">
                    <i className="fa fa-code"></i>
                    <h3>WEB DEVELOPMENT</h3>
                    <p>Modern and mobile-ready
                        website that will help you
                        reach all of your marketing.
                    </p>
                </div>
            </div>
        </div>

        <div className="resume">
            <h3>Resume</h3>

            <hr className="hr" />

            <ul>
                <li><i className="fa fa-briefcase"> EXPERIENCE</i></li>
                <li><i className="fa fa-briefcase"> Education</i></li>

                <li>
                    <h6 style={{marginLeft:'5%',color:'#2eca7f'}}>2013 - PRESENT</h6>
                    <h6 style={{marginLeft:'5%',}}>DIRECTOR</h6>
                    <p style={{marginLeft:'5%',marginTop:"-25px"}}>Techlution.INC</p>
                    <p style={{marginLeft:'5%',marginRight:"5%"}}>Collaborate with creative
                        and development teams on
                        the execution of ideas.
                    </p>
                </li>

                <li>
                    <h6 style={{marginLeft:'5%',color:'#2eca7f'}}>2013 - PRESENT</h6>
                    <h6 style={{marginLeft:'5%',}}>ART UNIVERSITY</h6>
                    <p style={{marginLeft:'5%',marginTop:"-25px"}}>NEW YORK</p>
                    <p style={{marginLeft:'5%',marginRight:"5%"}}>Bachelor's Degree in Computer Science ABC Technical
                        Institute, Jefferson, Missour
                    </p>
                </li>
                <li>
                    <h6 style={{marginLeft:'5%',color:'#2eca7f'}}>2013 - PRESENT</h6>
                    <h6 style={{marginLeft:'5%',}}>FRONT-END DEVELOPER</h6>
                    <p style={{marginLeft:'5%',marginTop:"-25px"}}>Vvork Cloud.INC</p>
                    <p style={{marginLeft:'5%',marginRight:"5%"}}>Collaborate with creative
                        and development teams on
                        the execution.
                    </p>
                </li>
                <li>
                    <h6 style={{marginLeft:'5%',color:'#2eca7f'}}>2013 - PRESENT</h6>
                    <h6 style={{marginLeft:'5%',}}>PROGRAMMING COURSE</h6>
                    <p style={{marginLeft:'5%',marginTop:"-25px"}}>PARIS</p>
                    <p style={{marginLeft:'5%',marginRight:"5%"}}>
                        Coursework - Git, WordPress, Javascript, iOS, Android.
                    </p>
                </li>

                <li>
                    <h6 style={{marginLeft:'5%',color:'#2eca7f'}}>2013 - PRESENT</h6>
                    <h6 style={{marginLeft:'5%',}}>FRONT-END DEVELOPER</h6>
                    <p style={{marginLeft:'5%',marginTop:"-25px"}}>Vvork Cloud.INC</p>
                    <p style={{marginLeft:'5%',marginRight:"5%"}}>Collaborate with creative
                        and development teams on
                        the execution.
                    </p>
                </li>
                <li>
                    <h6 style={{marginLeft:'5%',color:'#2eca7f'}}>2013 - PRESENT</h6>
                    <h6 style={{marginLeft:'5%',}}>PROGRAMMING COURSE</h6>
                    <p style={{marginLeft:'5%',marginTop:"-25px"}}>PARIS</p>
                    <p style={{marginLeft:'5%',marginRight:"5%"}}>
                        Coursework - Git, WordPress, Javascript, iOS, Android.
                    </p>
                </li>
            </ul>
        </div>

        <div className="info">
            <h3>Get in Touch</h3>
            <hr className="hr" />
            <ul>
                
                <br/>
                <li><label htmlFor="">Name</label><input type="text" placeholder="Name..."/></li>
                <br/>
            
                <li><label htmlFor="">Email</label><input type="text" placeholder="Email..."/></li>
                
                
                <br/>
                <li><label htmlFor="">Comment</label><input type="text" placeholder="Comment...."/></li>

                <button>Submit</button>
            </ul>
        </div>

        
        <div className="bog">
            <h3>Lastest Post</h3>
            <hr className="hr" />
            <ul>
                <li>
                    <img src="../images/slider1.jpg" alt=""/>
                    <h3>Creative new Designs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt non eveniet.</p>
                </li>

                
                <li>
                    <img src="../images/slider2.jpg" alt=""/>
                    <h3>Creative new Designs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt non eveniet.</p>
                </li>

                
                <li>
                    <img src="../images/slider3.jpg" alt=""/>
                    <h3>Creative new Designs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt non eveniet.</p>
                </li>
            </ul>
        </div>
    </div>

        </div>)
    })


return (
<div className="main">
    {response}
</div>
);
}
}

export default New;