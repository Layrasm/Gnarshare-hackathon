import React, {useState} from 'react';
import {Card, Button, ListGroup} from "react-bootstrap"
import Comment from "./Comment"

const Post = () => {
  const [show, setShow] = useState(false);



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
  <div className="btnfam">
  {show && <Comment />}
      <Button onClick={() => setShow(!show)}>
        {show ? "Hide Comments " : "View Comments"}
      </Button>

   <Button variant="success">Create a Comment</Button>
  </div>
    </Card.Body>
  </Card>
  )
}

export default Post;