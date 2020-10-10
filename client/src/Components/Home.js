import React from 'react';
import Map from './Map'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Post from "./Post"
import User from "./User"


const Home = () => {

  return (
    <Container>
      <Row className="justify-content-md-center">
      <h3>Welcome to Gnar Share Braj</h3>
    </Row>
      <Row className="justify-content-md-space-between">
        <Col>
        <User />
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
      <Button  variant="success" block href="/post/create">Create a Ride</Button>
    </Row>
    <div>
      <br />
      <br />
      <Post />
    </div>
    </Container>
  )
}

export default Home;





