import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddShippingAddress } from '../../redux/actions/cartActions';
import CheckoutSteps from './CheckoutSteps';
import './checkoutsteps.css'

const Shipping = () => {
    const shippingAddress = useSelector(state => state.cart.shippingAddress)
    const dispatch= useDispatch()
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [phone, setPhone] = useState(shippingAddress.phone)
    const navigate= useNavigate()
  
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(AddShippingAddress( address, city, postalCode, phone ))
        navigate('/payment')
    }
    return (
        <Container>
            <div className="steps">
            <CheckoutSteps step1></CheckoutSteps>
            </div>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
            <h2>Votre adresse de livraison</h2>


        <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Adresse</Form.Label>
          <Form.Control
            type='text'
            placeholder="Entrer l'adresse"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>ville</Form.Label>
          <Form.Control
            type='text'
            placeholder='Entrez la ville'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Code Postal</Form.Label>
          <Form.Control
            type='text'
            placeholder='Entrez le Code Postal'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Num de telephone</Form.Label>
          <Form.Control
            type='text'
            placeholder='Entrez le numéro de téléphone'
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button className='mt-3 btn-block butnn' type='submit' variant='primary'>
          Continuer
        </Button>
      </Form>
        </Col>
      </Row>
    </Container>
    );
};

export default Shipping;