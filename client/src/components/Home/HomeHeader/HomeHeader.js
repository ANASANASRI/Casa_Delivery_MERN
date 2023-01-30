import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import homeheader from "./homeheader.css";
import github from "../../../images/icons8-github-40 (1).png";
import Twitter from "../../../images/icons8-twitter-circled-40.png";
import linkedin from "../../../images/icons8-linkedin-circled-40 (1).png";
import cd1 from "../../../images/cd1.png";
import hero from "../../../images/hero.png";


const HomeHeader = () => {
    return (
        <>
        <section className="home" id="home">
            
                <div className="home-wrapper d-grid container">
                    <div className="col-left col">
                        <img
                            alt="casa delivery"
                            src={cd1}
                            height="210"
                            className="d-inline-block align-top img-left"
                        />
                        <br/><br/>
                        <p>Découvrez un service de livraison abordable et profitez de produits frais. Appelez-nous.</p>

                        <div className="search-food d-flex">
                            <input type="text" placeholder="Chercher votre plat..."/>
                            <Link to="#" className="search-btn">Chercher</Link>
                        </div>
                        <div className="social-icons d-flex">
                            <a href="https://github.com/ANASANASRI" target="_blank" rel="noreferrer noopener"> <img src={github} alt="facebook"/></a>
                            <a href="https://twitter.com/anasanasri_" target="_blank" rel="noreferrer noopener"> <img src={Twitter} alt="twitter"/></a>
                            <a href="https://www.linkedin.com/in/anasanasri/" target="_blank" rel="noreferrer noopener" > <img src={linkedin} alt="Linkedin"/></a>
                        </div>

                    </div>
                    <div className="col-right col">
                        <img src={hero} alt="Home" className="img-fluid"/>
                    </div>
                </div>
            

        </section>
            
        </>
    );
};

export default HomeHeader;