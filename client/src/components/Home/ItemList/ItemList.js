import React from 'react';
import {Link} from "react-router-dom"
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating';

const ItemList = ({item}) => {
    return (
      <>
        <Card className="my-3 p-3  rounded">
          <Link to={`/item/${item._id}`}>
            <Card.Img className="rounded" variant="top" style={{ height: '200px', width: '100%' }} src={item.image} />
          </Link>

          <Card.Body>
          <Link to={`/item/${item._id}`}>
          <Card.Title as="div"> <strong>{item.name}</strong> </Card.Title>
          </Link>
            
            <Card.Text as="div">
              <div className="mb-3">
              <Rating rating={item.rating} review={item.numReviews}></Rating>
              </div>
            </Card.Text>
            <Card.Text as="h3">{item.price} DH</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
};

export default ItemList;