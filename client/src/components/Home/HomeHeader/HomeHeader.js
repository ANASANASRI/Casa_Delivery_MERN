import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import homeheader from "./homeheader.css";
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
                            <Link to="./chercherPLat" className="search-btn">Chercher</Link>
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