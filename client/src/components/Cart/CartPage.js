import React, { useEffect } from 'react';
import { Col,Card, Form, Image, ListGroup, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const CartPage = () => {
    const location = useLocation()
    const history= useNavigate()
    const {id} = useParams()
    const qty= location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart= useSelector(state=> state.cart)
    const {cartItems} = cart
  
  useEffect(() =>{

    if (location.search) {
      dispatch(addToCart(id, qty))
      
    }
  },[dispatch, qty, id, location.search])

  const removeCartItem= (id)=>{
      console.log('clicked')
      dispatch(removeFromCart(id))
  }
  const checkOutHandler=()=>{
      history.push('/shipping')

  }
    return (
      <Row>
          
        <Col md={8}>
        <h4>Panier</h4>
          {cartItems.length === 0 ? (
            <h6 style={{color: 'chocolate'}}>Votre panier est vide! Ajoutez d'abord de la nourriture..</h6>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/item/${item.id}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                        <Form.Control  className="quantity-select"
                        as='select'
                        value={item.quantity}
                        onChange={(e)=> dispatch(addToCart(item.id, Number(e.target.value)))}
                        >
                        {[...Array(item.countInStock).keys()].map((count)=>(
                            <option key={count+1} value={count+1}>
                              { count+1}
                            </option>
                        ))}

                        </Form.Control>
                    </Col>
                    <Col md={2} className="cartpage-remove-btn">
                        <Button className='remove-icon' type='button' variant='light' onClick={()=>removeCartItem(item.id)}>
                            <i className='remove-icon fas fa-trash'></i>

                        </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        <Col md={4} className='mt-3'>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>total ({cartItems.reduce((initial, item)=>initial+item.quantity,0)}) articles</h2>
                        Total : {cartItems.reduce((initial, item)=>initial+item.quantity*item.price,0)} DH
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={cartItems.length===0} onClick={checkOutHandler}>
                            Passer à la caisse

                        </Button>
                    </ListGroup.Item>

                </ListGroup>

            </Card>
        </Col>

        
      </Row>
    );
};

export default CartPage;