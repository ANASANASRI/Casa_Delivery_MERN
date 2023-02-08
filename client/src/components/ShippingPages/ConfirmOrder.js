import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Image, ListGroup, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import CheckoutSteps from './CheckoutSteps';
import { createOrder } from '../../redux/actions/orderActions';
import { CREATE_ORDER_RESET } from '../../redux/actions/orderActionTypes';

const ConfirmOrder = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const order= useSelector(state => state.order)
  const {success,  orderDetails}= order

  const cart = useSelector((state) => state.cart)
  cart.paymentMethod= 'PayPal'
  if (!cart.shippingAddress.address) {
    navigate('/shipping')
  } 
  else if (!cart.paymentMethod) {
    navigate('/payment')
  }

  /// item price and tax
  cart.itemsPrice= cart.cartItems.reduce((acc, item) => acc+ item.price* item.quantity ,0)
  cart.taxPrice= cart.itemsPrice* 0.2
  cart.shippingPrice=10
  cart.totalPrice= cart.itemsPrice + cart.taxPrice + cart.shippingPrice
  
  useEffect(()=>{
    if (success) {
      navigate(`/order/${orderDetails._id}`)
      dispatch({type: CREATE_ORDER_RESET})
    }
  })
    
  const placeOrderHandler=()=> {
     dispatch(createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,

     }))
  }

    return (
        <>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        

        <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Expédition</h2>
              <p>
                <strong>Adresse: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.phone}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Mode de paiement</h2>
              <strong>Methode: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Items commandés</h2>
              {cart.cartItems.length === 0 ? (
                <h4>Votre panier est vide</h4>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.quantity} x {item.price} DH = {item.quantity * item.price} DH
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>Récapitulatif de la commande</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>{cart.itemsPrice} DH</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Livraison</Col>
                  <Col>{cart.shippingPrice} DH</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax(20%)</Col>
                  <Col>{cart.taxPrice} DH</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Totale</Col>
                  <Col>{cart.totalPrice} DH</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {/* {error && <Message variant='danger'>{error}</Message>} */}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Passer la commande
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
            
        </>
    );
};

export default ConfirmOrder;