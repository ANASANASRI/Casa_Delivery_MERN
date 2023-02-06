import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './checkoutsteps.css'

const CheckoutSteps = ({step1,step2, step3}) => {
    return (
      <>
        <section className="checkout-bar">
          <Nav className="justify-content-center checkout-bar-item  mb-4">
            <Nav.Item>
              <LinkContainer to="/shipping">
                {step1? 
                <Nav.Link className='checkout-item ' >
                <div className="step active-bar">
                adresse de livraison
                </div>
              
            </Nav.Link>
            : <Nav.Link disabled className='checkout-item ' >
            <div className="step incomplete">
            adresse de livraison
            </div>
          
        </Nav.Link>
                }
              </LinkContainer>
              </Nav.Item>

              <i className="fas fa-arrow-right"></i>
              

              <Nav.Item>
              <LinkContainer to="/payment">
                {step2? 
                <Nav.Link className='checkout-item ' >
                <div className="step active-bar">
                Mode de paiement
                </div>
              
            </Nav.Link>
            : <Nav.Link disabled className='checkout-item ' >
            <div className="step incomplete">
            Mode de paiement
            </div>
          
        </Nav.Link>
                }
              </LinkContainer>
              </Nav.Item>

              <i className="fas fa-arrow-right"></i>

              <Nav.Item>
              <LinkContainer to="/confirm">
                {step3? 
                <Nav.Link className='checkout-item ' >
                <div className="step active-bar">
                Confirmer la commande
                </div>
              
            </Nav.Link>
            : <Nav.Link disabled className='checkout-item ' >
            <div className="step incomplete">
            Confirmer la commande
            </div>
          
        </Nav.Link>
                }
              </LinkContainer>
              </Nav.Item>
          </Nav>
        </section>
      </>
    );
};

export default CheckoutSteps;