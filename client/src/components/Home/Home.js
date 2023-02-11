import React, {  useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList/ItemList';
import { Col, Row } from 'react-bootstrap';
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
                        <h1 className="mb-3">Devenir coursier</h1>
                        <h5 className="mb-3">C'est vous le chef ! Livrez avec Casa delivery pour gagner des revenus compétitifs en toute flexibilité et liberté.</h5>
                        <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                        <a href="" className="btn btn-secondary font-weight-bold py-2 px-4 mt-2">Learn More</a>
                    </div>
                    <div className="col-lg-4 py-5 py-lg-0" style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={about} alt="Home" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-4 py-0 py-lg-5">
                        <h1 className="mb-3">Devenir partenaire</h1>
                        <p>Grandissez avec Casa delivery! Boostez les ventes et accédez à de nouvelles opportunités grâce à notre technologie et à notre base d'utilisateurs !</p>
                        <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
                        <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
                        <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
                        <a href="" className="btn btn-primary font-weight-bold py-2 px-4 mt-2">Learn More</a>
                    </div>
                    </div>
                </div>
                </div>
        </>
    );
};

export default Home;