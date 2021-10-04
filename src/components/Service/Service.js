import './Service.css'
import React from 'react';
import { Card,Row,Col } from 'react-bootstrap';

const Service = (props) => {
 const {img,name,rate,price} = props.service;
 return (
  <div className="container">
<Row xs={1} md={2} lg={1} className="g-4">
  
    <Col>
      <Card className="w-50 mx-auto">
        <Card.Img style={{height:"500px", width:"auto"}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Title>Rate: {rate}</Card.Title>
          <Card.Title>Price: {price}$</Card.Title>
          <button className="btn-danger btn">Buy Now</button>
          
        </Card.Body>
      </Card>
    </Col>
  
</Row>
  </div>
 );
};

export default Service;