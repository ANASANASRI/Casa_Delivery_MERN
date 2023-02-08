import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from './CheckoutSteps';

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate("/confirm");
  };

  return (
    <Container style={{minHeight:'80vh'}}>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h3>mode de paiement</h3>

          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label as="legend">Sélectionnez la méthode</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="PayPal"
                  id="PayPal"
                  name="paymentMethod"
                  value={paymentMethod}
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Espèce"
                  id="Espèce"
                  name="paymentMethod"
                  value={paymentMethod}
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
              </Col>
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
              Continuer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentMethod;