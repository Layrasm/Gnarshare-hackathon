import React from 'react';
import Map from './Map'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Post from "./Post"
import User from "./User"
import Weather from "./Weather"


const Home = () => {



  return (
    <Container>
      <Row className="justify-content-md-center">
      <h3 className="home">Welcome to Gnar Share</h3>
      
    </Row>
    <br />
    <br />
      <Row className="justify-content-md-space-between">
        <Col>
        <User />
        </Col>
      <Col>
    <Map />
    </Col>
    <Col>
    <Weather />
    </Col>
    </Row>
    <br />
    <div>
      <br />
      <br />
      <Post />
    </div>
    </Container>
  )
}

export default Home;





