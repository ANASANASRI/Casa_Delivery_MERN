import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const DeliveryOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    recipientName: "",
    recipientAddress: "",
    recipientPhone: "",
    deliveryInstructions: "",
  });
  const [orderAccepted, setOrderAccepted] = useState(null);

  const handleInputChange = (event) => {
    setOrderDetails({
      ...orderDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleAcceptOrder = () => {
    setOrderAccepted(true);
  };

  const handleRejectOrder = () => {
    setOrderAccepted(false);
  };

  return (
    <Container className="my-5">
      {orderAccepted === null ? (
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h3 className="text-center mb-5">Order Details</h3>
            <Form>
              <Form.Group controlId="formRecipientName">
                <Form.Label>Recipient Name</Form.Label>
                <Form.Control
                  type="text"
                  name="recipientName"
                  value={orderDetails.recipientName}
                  onChange={handleInputChange}
                  placeholder="Enter recipient name"
                  readOnly
                />
              </Form.Group>
              <Form.Group controlId="formRecipientAddress">
                <Form.Label>Recipient Address</Form.Label>
                <Form.Control
                  type="text"
                  name="recipientAddress"
                  value={orderDetails.recipientAddress}
                  onChange={handleInputChange}
                  placeholder="Enter recipient address"
                  readOnly
                />
              </Form.Group>
              <Form.Group controlId="formRecipientPhone">
                <Form.Label>Recipient Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="recipientPhone"
                  value={orderDetails.recipientPhone}
                  onChange={handleInputChange}
                  placeholder="Enter recipient phone"
                  readOnly
                />
              </Form.Group>
              <Form.Group controlId="formDeliveryInstructions">
                <Form.Label>Delivery Instructions</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="deliveryInstructions"
                  value={orderDetails.deliveryInstructions}
                  onChange={handleInputChange}
                  placeholder="Enter delivery instructions (optional)"
                  readOnly
                />
              </Form.Group>
              <Button variant="primary" onClick={handleAcceptOrder}>
                Accept Order
              </Button>{" "}
              <Button variant="secondary" onClick={handleRejectOrder}>
                Reject Order
              </Button>
            </Form>
          </Col>
        </Row>
      ) : (
        <Row className="my-5">
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  {orderAccepted ? "Order Accepted" : "Order Rejected"}
                </Card.Title>
                <Button
                  variant="secondary"
                  className="mt-5 mb-3"
                  onClick={() => setOrderAccepted(null)}
                >
                  {orderAccepted
                    ? "Accept Another Order"
                    : "Try Another Order"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DeliveryOrder;
