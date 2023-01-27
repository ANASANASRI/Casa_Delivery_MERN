import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import homeheader from "./homeheader.css";
import facebook from "../../../images/facebook.png";
import Twitter from "../../../images/logo-twitter-png-5860.png";
import linkedin from "../../../images/icons8-linkedin-circled-48.png";

const HomeHeader = () => {
    return (
        <>
        <section className="home" id="home">
            
                <div className="home-wrapper d-grid">
                    <div className="col-left">
                        
                        <h1>CASA<br/>DELIVERY</h1>

                        <p>Vestibulum sed augue ac lorem rutrum congue. Donec cursus mollis sapien, non vulputate odio
                            congue id. Sed mattis, tortor nec facilisis laoreet, mauris magna finibus nisl, eu pulvinar
                            erat libero in turpis. </p>

                        <div className="search-food d-flex">
                            <input type="text" placeholder="Search food..."/>
                            <Link to="#" className="search-btn"> Search</Link>
                        </div>
                        <div className="social-icons d-flex">
                            <a href="https://github.com/ANASANASRI" target="_blank" rel="noreferrer noopener"> <img src={facebook} alt="facebook"/></a>
                            <a href="https://twitter.com/anasanasri_" target="_blank" rel="noreferrer noopener"> <img src={Twitter} alt="twitter"/></a>
                            <a href="https://www.linkedin.com/in/anasanasri/" target="_blank" rel="noreferrer noopener" > <img src={linkedin} alt="Linkedin"/></a>
                        </div>

                    </div>
                    <div className="col-right">
                        <img data-tilt src="images/hero-img.png" alt="Home" className="img-fluid"/>
                    </div>
                </div>
            

        </section>
            
        </>
    );
};

export default HomeHeader;