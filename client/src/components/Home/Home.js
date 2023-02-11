import React, {  useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList/ItemList';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux'
import { getItems } from '../../redux/actions/itemActions';
import Loader from '../spinner/Loader';
import HomeHeader from './HomeHeader/HomeHeader';
import about from "../../images/about.png";
import "./homeOpo.css";

const Home = () => {
  const dispatch= useDispatch()

  const itemList= useSelector(state=> state.itemList)
  const {items, error, loading} = itemList
  const [loadedItems, setLoadedItems] = useState(4);

  useEffect(() => {
    dispatch(getItems())
  },[dispatch])

  const handleLoadMore = () => {
    setLoadedItems(loadedItems + 4);
  };

  return (
    <>
      <HomeHeader></HomeHeader>

      <div className="section-title">
      <h1 className="text-center mb-3">Choisissez votre plat</h1>
      </div>
      
      {loading ? <Loader />
        : error ? <h4>{error}</h4> : 
        <Row>
          {items.slice(0, loadedItems).map(item => 
            (<Col key={item._id} sm={12} md={6} lg={4} xl={3}>
              <ItemList  item={item}  />
            </Col>)
          )}
        </Row>
      }
      {!loading && items.length > loadedItems &&
        <div className="text-center">
          <button className="btn btn-secondary mt-3" onClick={handleLoadMore}>Load More</button>
        </div>
      }
                  
                <div className="container-fluid py-5">
                <div className="container">
                    <div className="section-title">
                    <h1 className="display-4">Opportunités</h1>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 py-0 py-lg-5">
                        <h1 className="mb-3">Devenir<br></br>coursier</h1>
                        <h5 className="mb-3"><FontAwesomeIcon icon={faCheck} className="text-primary mr-3" /> Décidez de vos horaires et de votre zone de livraison avec Casa delivery.</h5>
                        <br></br><h5 className="mb-3"><FontAwesomeIcon icon={faCheck} className="text-primary mr-3" /> Bénéficiez d'un revenu stable et compétitif en travaillant à votre propre rythme.</h5>
                        <br></br><h5 className="mb-3"><FontAwesomeIcon icon={faCheck} className="text-primary mr-3" /> Profitez d'une plateforme simple et efficace pour gérer votre activité de livraison en toute sécurité.</h5>
                        <a href="" className="btn btn-secondary font-weight-bold py-2 px-4 mt-2">apprendre encore plus</a>
                    </div>
                    <div className="col-lg-4 py-5 py-lg-0" style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={about} alt="Home" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-4 py-0 py-lg-5">
                        <h1 className="mb-3">Devenir<br></br>partenaire</h1>
                        <h5 className="mb-3"><FontAwesomeIcon icon={faCheck} className="text-primary mr-3" /> Rejoignez les milliers de restaurants qui ont déjà amélioré leur activité grâce à Casa delivery.</h5>
                        <h5 className="mb-3"><FontAwesomeIcon icon={faCheck} className="text-primary mr-3" /> Offrez une expérience de livraison fluide et fiable à vos clients grâce à notre plateforme avancée.</h5>
                        <h5 className="mb-3"><FontAwesomeIcon icon={faCheck} className="text-primary mr-3" /> Augmentez votre visibilité en ligne et découvrez de nouveaux marchés grâce à notre base d'utilisateurs en constante croissance.</h5>
                        <a href="" className="btn btn-primary font-weight-bold py-2 px-4 mt-2">apprendre encore plus</a>
                    </div>
                    </div>
                </div>
                </div>
        </>
    );
};

export default Home;