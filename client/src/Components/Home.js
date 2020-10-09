import React from 'react';
import Map from './Map'
import {Container, Row, Col} from 'react-bootstrap'


const Home = () => {

  return (
    <Container>
      <Row className="justify-content-md-center">
      <h3>Welcome to Gnar Share Braj</h3>
    </Row>
      <Row className="justify-content-md-space-between">
        <Col>
        <h1>User Info</h1>
        </Col>
      <Col>
    <Map />
    </Col>
    <Col>
    <h1>Weather Updates</h1>
    </Col>
    </Row>
    <br />
    <br />
    <Row className="justify-content-md-center">
      <h3>Post go here with avaliable ride</h3>
    </Row>
    </Container>
  )
}

export default Home;





