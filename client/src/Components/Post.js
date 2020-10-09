import React from 'react';
import {Card, Button, ListGroup} from "react-bootstrap"

const Post = () => {



  return (
  <Card>
    <Card.Body>
    <Card.Title>Name</Card.Title>
    <Card.Text>Body</Card.Text>
    <ListGroup variant="flush">
    <ListGroup.Item>Available spot</ListGroup.Item>
    <ListGroup.Item>Departure Location</ListGroup.Item>
    <ListGroup.Item>Rider Level</ListGroup.Item>
    <ListGroup.Item>Departure Time</ListGroup.Item>
    <ListGroup.Item>Car Type</ListGroup.Item>
  </ListGroup>

  <Button>View Comments</Button>
   <Button variant="success">Create a Comment</Button>

    </Card.Body>
  </Card>
  )
}

export default Post;